"use client";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const words = ["Full Stack Developer", "Digital Marketer"];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 100 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  function handleMouseMove({ clientX, clientY, currentTarget }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
    if (!isHovered) setIsHovered(true);
  }

  // Wahi bright glow spotlight jo tumne pehle select kiya tha
  const spotlight = useTransform(
    [smoothX, smoothY],
    ([x, y]) => isHovered 
      ? `radial-gradient(300px circle at ${x}px ${y}px, rgba(255,255,255,0.15), transparent 80%)`
      : `radial-gradient(300px circle at 50% 50%, rgba(255,255,255,0), transparent 80%)` 
  );

  return (
    <section 
      id="home"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative h-screen flex items-center justify-center bg-black overflow-hidden"
    >
      {/* 1. Spotlight Overlay (Fixed smooth fade-out) */}
      <motion.div 
        className="pointer-events-none absolute inset-0 z-20 transition-opacity duration-500"
        style={{ 
          background: spotlight,
          opacity: isHovered ? 1 : 0 
        }}
      />

      <div className="text-center z-10 px-4">
        {/* Intro Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-zinc-500 uppercase text-[10px] md:text-xs font-bold tracking-[0.5em] mb-6"
        >
          Creative Portfolio • 2025
        </motion.p>

        {/* Name with Split Entry Animation */}
        <h1 className="text-[14vw] md:text-[11vw] font-black leading-[0.8] tracking-tighter uppercase italic text-white mb-10">
          <motion.span
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="block"
          >
            ADITYA
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="block text-zinc-400"
          >
            LAHRE
          </motion.span>
        </h1>

        {/* Bari-bari change hone wala text */}
        <div className="h-8 overflow-hidden mb-12">
          <AnimatePresence mode="wait">
            <motion.p
              key={words[index]}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-white text-lg md:text-2xl font-light tracking-widest uppercase italic"
            >
              {words[index]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Smooth Moving Ball in Pill Border */}
        <div className="flex justify-center">
          <div className="w-24 h-10 border border-white/20 rounded-full flex items-center px-2 relative">
            <motion.div
              animate={{ x: [0, 56, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-4 h-4 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)]"
            />
          </div>
        </div>
      </div>

      {/* Grid Background (Hero Style) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Scroll Hint */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-600 text-[10px] uppercase tracking-widest"
      >
        Scroll to explore
      </motion.div>
    </section>
  );
}