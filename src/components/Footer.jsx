"use client";
import { Link } from "react-scroll";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState } from "react";

export default function Footer() {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  function handleMouseMove({ clientX, clientY, currentTarget }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  // Wahi signature spotlight jo Hero section mein hai
  const spotlight = useTransform(
    [smoothX, smoothY],
    ([x, y]) => isHovered 
      ? `radial-gradient(350px circle at ${x}px ${y}px, rgba(255,255,255,0.15), transparent 80%)`
      : `radial-gradient(350px circle at 50% 50%, rgba(255,255,255,0), transparent 80%)`
  );

  return (
    <footer 
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative py-24 px-6 bg-black border-t border-white/10 overflow-hidden"
    >
      {/* 1. Signature Spotlight Overlay */}
      <motion.div 
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500"
        style={{ background: spotlight, opacity: isHovered ? 1 : 0 }}
      />

      {/* 2. Classic Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-24 items-start">
          
          {/* Column 1: Fast Links */}
          <div className="space-y-8">
            <h4 className="text-white text-xs uppercase tracking-[0.5em] font-black opacity-40 italic">Links</h4>
            <div className="flex flex-col gap-4">
              {["Home", "About", "Projects", "Contact"].map((item) => (
                <Link
                  key={item}
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={400}
                  className="text-zinc-500 hover:text-white cursor-pointer text-sm uppercase tracking-[0.2em] font-bold transition-all w-fit"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2: Location/Status */}
          <div className="space-y-8">
            <h4 className="text-white text-xs uppercase tracking-[0.5em] font-black opacity-40 italic">Info</h4>
            <div className="space-y-4 text-zinc-400 text-sm uppercase tracking-[0.2em] font-bold">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse shadow-[0_0_10px_white]" />
                Online & Available
              </div>
              <p>Chhattisgarh, India</p>
              <p className="text-zinc-600">Edition 2025</p>
            </div>
          </div>

          {/* Column 3: Back to Top (Big & Sharp) */}
          <div className="md:text-right space-y-8">
            <h4 className="text-white text-xs uppercase tracking-[0.5em] font-black opacity-40 italic">Action</h4>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center gap-6 text-white group"
            >
              <span className="text-xs uppercase tracking-[0.3em] font-black border-b border-white/20 group-hover:border-white transition-all pb-1">Scroll to Top</span>
              <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                ↑
              </div>
            </button>
          </div>
        </div>

        {/* Branding & Social Copyright Bar */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-zinc-500 text-[10px] md:text-xs uppercase tracking-[0.6em] font-black">
            © 2025 ADITYA LAHRE <span className="mx-2 text-zinc-800">|</span> DESIGNED & DEVELOPED
          </div>
          
          <div className="flex gap-8 text-zinc-600 text-[10px] uppercase tracking-[0.4em] font-black">
             <span className="hover:text-white cursor-default transition-colors">Next.js</span>
             <span className="hover:text-white cursor-default transition-colors">Framer Motion</span>
             <span className="hover:text-white cursor-default transition-colors">Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
}