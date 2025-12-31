// src/components/Cursor.jsx
"use client";
import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function Cursor() {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useSpring(0, { stiffness: 500, damping: 28 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 28 });

  useEffect(() => {
    const moveMouse = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    // Check if hovering over interactive elements
    const handleHover = () => {
      const elements = document.querySelectorAll("a, button, .group");
      elements.forEach((el) => {
        el.addEventListener("mouseenter", () => setIsHovered(true));
        el.addEventListener("mouseleave", () => setIsHovered(false));
      });
    };

    window.addEventListener("mousemove", moveMouse);
    handleHover();

    return () => {
      window.removeEventListener("mousemove", moveMouse);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{
        translateX: mouseX,
        translateY: mouseY,
        left: -16,
        top: -16,
      }}
      animate={{
        scale: isHovered ? 2.5 : 1,
        backgroundColor: isHovered ? "rgba(37, 99, 235, 0.4)" : "white",
      }}
      className="fixed w-8 h-8 rounded-full pointer-events-none z-[9999] mix-blend-difference"
    />
  );
}