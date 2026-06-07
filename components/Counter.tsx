"use client";

import { useEffect, useState, useRef } from "react";
import { useInView, animate } from "framer-motion";

interface CounterProps {
  target: string;
  duration?: number;
}

export default function Counter({ target, duration = 2 }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  // Calculate values directly during render
  const numericPart = target ? target.replace(/[^0-9.]/g, "") : "";
  const suffix = target ? target.replace(/[0-9.]/g, "") : "";
  const value = parseFloat(numericPart);
  const isNumber = !isNaN(value);

  // Initialize state with "0 + suffix" if it's a number, otherwise fallback to target
  const [count, setCount] = useState(isNumber ? `0${suffix}` : target);

  useEffect(() => {
    // Only run the animation if it's a valid number and it comes into view
    if (isNumber && isInView) {
      const controls = animate(0, value, {
        duration: duration,
        onUpdate: (v) => setCount(Math.round(v) + suffix),
      });
      return controls.stop;
    }
  }, [value, suffix, duration, isInView, isNumber]);

  // If it's not a number, just render the target directly to avoid unnecessary state tracking
  return <span ref={ref}>{isNumber ? count : target}</span>;
}
