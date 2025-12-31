"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { SiGithub, SiLinkedin, SiInstagram, SiWhatsapp } from "react-icons/si";
import { FiMail, FiPhone } from "react-icons/fi";

export default function Contact() {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const myEmail = "adityalahre11@gmail.com"; 
  const myPhone = "917999066421"; 

  // Mouse tracking logic (Unified with Hero/About)
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

  // Exact Hero Spotlight Intensity
  const spotlight = useTransform(
    [smoothX, smoothY],
    ([x, y]) => isHovered 
      ? `radial-gradient(350px circle at ${x}px ${y}px, rgba(255,255,255,0.15), transparent 80%)`
      : `radial-gradient(350px circle at 50% 50%, rgba(255,255,255,0), transparent 80%)`
  );

  const socials = [
    { name: "GitHub", url: "https://github.com/adityalahre", icon: <SiGithub /> },
    { name: "LinkedIn", url: "https://linkedin.com/in/adityalahre", icon: <SiLinkedin /> },
    { name: "Instagram", url: "https://instagram.com/adityalahre", icon: <SiInstagram /> },
    { name: "WhatsApp", url: `https://wa.me/${myPhone}`, icon: <SiWhatsapp /> }, 
  ];

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      id="contact" 
      className="py-40 px-6 bg-black flex flex-col items-center justify-center relative overflow-hidden group/contact"
    >
      {/* 1. Unified Spotlight Overlay */}
      <motion.div 
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500"
        style={{ 
          background: spotlight,
          opacity: isHovered ? 1 : 0 
        }}
      />

      {/* 2. Hero-Style Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 w-full"
      >
        <p className="text-zinc-500 uppercase tracking-[0.6em] mb-12 text-sm font-bold">
          // Let's create magic
        </p>
        
        <motion.a 
          href={`mailto:${myEmail}`} 
          className="relative inline-block mb-16"
          whileHover="hover"
        >
          <motion.h3 
            variants={{
              hover: { 
                scale: 1.05,
                textShadow: "0px 0px 40px rgba(255, 255, 255, 0.6)",
                color: "#ffffff"
              }
            }}
            className="text-[12vw] md:text-[10vw] font-black tracking-tighter leading-none text-zinc-600 transition-all duration-500 cursor-pointer italic"
          >
            LET'S TALK
          </motion.h3>
          <motion.div 
            variants={{ hover: { width: "100%", opacity: 1, backgroundColor: "#ffffff" } }}
            initial={{ width: "0%", opacity: 0 }}
            className="h-[2px] bg-zinc-800 mt-4 mx-auto transition-all duration-500 shadow-[0_0_25px_white]"
          />
        </motion.a>

        {/* Contact Info with Hover Effects */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 mt-10">
           <a href={`mailto:${myEmail}`} className="flex items-center gap-4 group/item">
             <FiMail className="text-2xl text-zinc-500 group-hover/item:text-white transition-colors group-hover/item:drop-shadow-[0_0_10px_white]" />
             <span className="text-lg md:text-xl font-bold tracking-widest text-zinc-500 group-hover/item:text-white transition-colors lowercase">
               {myEmail}
             </span>
           </a>
           <a href={`https://wa.me/${myPhone}`} className="flex items-center gap-4 group/item">
             <FiPhone className="text-2xl text-zinc-500 group-hover/item:text-white transition-colors group-hover/item:drop-shadow-[0_0_10px_white]" />
             <span className="text-lg md:text-xl font-bold tracking-widest text-zinc-500 group-hover/item:text-white transition-colors">
               +91 79990 66421
             </span>
           </a>
        </div>
      </motion.div>

      {/* Social Logos - Big, Balanced & Glowing */}
      <div className="mt-40 w-full max-w-5xl border-t border-white/10 pt-16 z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {socials.map((social, i) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10, color: "#ffffff", scale: 1.1 }}
              className="flex flex-col items-center gap-4 text-zinc-500 transition-all duration-300 group/icon"
            >
              <div className="text-5xl md:text-6xl group-hover/icon:drop-shadow-[0_0_20px_rgba(255,255,255,0.5)] transition-all">
                {social.icon}
              </div>
              <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] font-black mt-2 text-zinc-600 group-hover/icon:text-white transition-colors">
                {social.name}
              </span>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Footer Branding - High Visibility */}
      <div className="mt-32 text-center z-10">
        <p className="text-white text-[11px] md:text-[13px] uppercase tracking-[0.6em] font-black mt-2 opacity-70 hover:opacity-100 transition-opacity">
          MERN STACK DEVELOPER <span className="text-zinc-600 mx-2">•</span> DIGITAL MARKETER <span className="text-zinc-600 mx-2">•</span> 2025
        </p>
      </div>
    </section>
  );
}