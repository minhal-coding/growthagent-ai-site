"use client";

import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

type DottedShaderSurfaceProps = React.ComponentProps<"div">;

const vertexShaderSource = `
attribute vec2 a_position;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`;

const fragmentShaderSource = `
precision mediump float;

uniform vec2 u_resolution;
uniform float u_time;

float circle(vec2 point, float radius) {
  return smoothstep(radius, radius - 0.012, length(point));
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution.xy;
  vec2 centered = uv - 0.5;
  centered.x *= u_resolution.x / u_resolution.y;

  float topGlow = exp(-length((uv - vec2(0.48, 0.88)) * vec2(1.0, 1.8)) * 3.0);
  float leftGlow = exp(-length((uv - vec2(0.16, 0.92)) * vec2(1.2, 1.0)) * 4.0);
  float greenGlow = exp(-length((uv - vec2(0.74, 0.48)) * vec2(1.4, 1.2)) * 5.0);

  vec3 color = vec3(0.012, 0.016, 0.032);
  color += vec3(0.32, 0.26, 1.0) * topGlow * 0.28;
  color += vec3(0.05, 0.45, 1.0) * leftGlow * 0.12;
  color += vec3(0.0, 0.78, 0.45) * greenGlow * 0.08;

  vec2 grid = centered;
  grid.y += 0.22;
  float perspective = clamp((0.86 - uv.y) * 1.9, 0.0, 1.0);
  grid.x *= mix(1.0, 2.6, perspective);
  grid.y *= mix(0.8, 3.4, perspective);
  grid.y += sin(grid.x * 7.0 + u_time * 0.7) * 0.018 + sin(grid.x * 14.0 - u_time * 0.5) * 0.01;

  vec2 cells = fract(grid * vec2(34.0, 26.0)) - 0.5;
  float dots = circle(cells, 0.044);
  float horizonFade = smoothstep(0.1, 0.75, perspective) * smoothstep(0.97, 0.44, uv.y);
  vec3 dotColor = mix(vec3(0.24, 0.36, 0.86), vec3(0.68, 0.78, 1.0), perspective);
  color += dotColor * dots * horizonFade * 0.5;

  float vignette = smoothstep(1.06, 0.26, length(centered));
  color *= mix(0.62, 1.0, vignette);

  gl_FragColor = vec4(color, 1.0);
}
`;

function createShader(gl: WebGLRenderingContext, type: number, source: string) {
  const shader = gl.createShader(type);
  if (!shader) return null;

  gl.shaderSource(shader, source);
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader);
    return null;
  }

  return shader;
}

export function DottedShaderSurface({ className, ...props }: DottedShaderSurfaceProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl", { antialias: false, alpha: false, powerPreference: "high-performance" });
    if (!gl) return;

    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
    if (!vertexShader || !fragmentShader) return;

    const program = gl.createProgram();
    if (!program) return;

    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW);

    const positionLocation = gl.getAttribLocation(program, "a_position");
    const resolutionLocation = gl.getUniformLocation(program, "u_resolution");
    const timeLocation = gl.getUniformLocation(program, "u_time");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let animationFrame = 0;
    const start = performance.now();

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      const width = window.innerWidth;
      const height = window.innerHeight;
      canvas.width = Math.floor(width * ratio);
      canvas.height = Math.floor(height * ratio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    const render = (now: number) => {
      gl.useProgram(program);
      gl.enableVertexAttribArray(positionLocation);
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
      gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);
      gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
      gl.uniform1f(timeLocation, (now - start) / 1000);
      gl.drawArrays(gl.TRIANGLES, 0, 6);

      if (!reducedMotion) {
        animationFrame = requestAnimationFrame(render);
      }
    };

    resize();
    render(start);
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrame);
      gl.deleteBuffer(positionBuffer);
      gl.deleteProgram(program);
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
    };
  }, []);

  return (
    <div className={cn("pointer-events-none fixed inset-0 overflow-hidden", className)} {...props}>
      <canvas ref={canvasRef} className="absolute inset-0 size-full" aria-hidden="true" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,4,7,0.12)_0%,rgba(3,4,7,0.34)_50%,rgba(3,4,7,0.92)_100%)]" />
    </div>
  );
}
