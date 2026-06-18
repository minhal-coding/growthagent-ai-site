"use client";

import { type ElementType, type JSX, useEffect, useState } from "react";
import { motion, type MotionProps } from "framer-motion";

type TextScrambleProps = {
  children: string;
  duration?: number;
  speed?: number;
  characterSet?: string;
  as?: ElementType;
  className?: string;
  trigger?: boolean;
  onScrambleComplete?: () => void;
} & MotionProps;

const defaultChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

export function TextScramble({
  children,
  duration = 0.8,
  speed = 0.04,
  characterSet = defaultChars,
  className,
  as: Component = "span",
  trigger = true,
  onScrambleComplete,
  ...props
}: TextScrambleProps) {
  const MotionComponent = motion.create(Component as keyof JSX.IntrinsicElements);
  const [displayText, setDisplayText] = useState(children);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!trigger || isAnimating) return;

    setIsAnimating(true);
    const steps = Math.max(1, Math.round(duration / speed));
    let step = 0;

    const interval = window.setInterval(() => {
      const progress = step / steps;
      let scrambled = "";

      for (let index = 0; index < children.length; index += 1) {
        if (children[index] === " ") {
          scrambled += " ";
        } else if (progress * children.length > index) {
          scrambled += children[index];
        } else {
          scrambled += characterSet[Math.floor(Math.random() * characterSet.length)];
        }
      }

      setDisplayText(scrambled);
      step += 1;

      if (step > steps) {
        window.clearInterval(interval);
        setDisplayText(children);
        setIsAnimating(false);
        onScrambleComplete?.();
      }
    }, speed * 1000);

    return () => window.clearInterval(interval);
  }, [characterSet, children, duration, isAnimating, onScrambleComplete, speed, trigger]);

  return (
    <MotionComponent className={className} {...props}>
      {displayText}
    </MotionComponent>
  );
}
