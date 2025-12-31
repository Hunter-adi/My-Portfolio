"use client";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useRef, useState } from "react";
import { 
  SiReact, SiNextdotjs, SiNodedotjs, SiMongodb, 
  SiTailwindcss, SiFramer, SiJavascript, SiTypescript,
  SiGoogleads, SiMeta, SiGoogleanalytics 
} from "react-icons/si";

export default function About() {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Hero Section wala Exact Mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Hero wala Same Spring Config (Smoothness ke liye)
  const springConfig = { damping: 20, stiffness: 100 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  function handleMouseMove({ clientX, clientY, currentTarget }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const xLeft = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  const xRight = useTransform(scrollYProgress, [0, 1], [300, -300]);

  // EXACT HERO SPOTLIGHT LOGIC (Intensity 0.15 matches Hero)
  const spotlight = useTransform(
    [smoothX, smoothY],
    ([x, y]) => isHovered 
      ? `radial-gradient(250px circle at ${x}px ${y}px, rgba(255,255,255,0.15), transparent 80%)`
      : `radial-gradient(250px circle at 50% 50%, rgba(255,255,255,0), transparent 80%)`
  );

  const skills = [
    { name: "React", icon: <SiReact />, color: "text-blue-400" },
    { name: "Next.js", icon: <SiNextdotjs />, color: "text-white" },
    { name: "Node.js", icon: <SiNodedotjs />, color: "text-green-500" },
    { name: "MongoDB", icon: <SiMongodb />, color: "text-green-400" },
    { name: "Tailwind", icon: <SiTailwindcss />, color: "text-cyan-400" },
    { name: "Framer", icon: <SiFramer />, color: "text-pink-500" },
    { name: "JS / TS", icon: <SiJavascript />, color: "text-yellow-400" },
    { name: "Meta Ads", icon: <SiMeta />, color: "text-blue-600" },
    { name: "Google Ads", icon: <SiGoogleads />, color: "text-blue-500" },
    { name: "Analytics", icon: <SiGoogleanalytics />, color: "text-orange-500" },
  ];

  return (
    <section 
      ref={containerRef} 
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      id="about" 
      className="min-h-screen bg-black py-32 relative overflow-hidden group/about"
    >
      {/* Hero-Grade Spotlight Overlay */}
      <motion.div 
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500"
        style={{ 
          background: spotlight,
          opacity: isHovered ? 1 : 0 
        }}
      />
      
      {/* Hero-Grade Grid Background (Visibility fix) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

      {/* Parallax Background Text */}
      <div className="absolute inset-0 flex flex-col justify-center pointer-events-none opacity-[0.03] select-none space-y-10">
        <motion.h2 style={{ x: xLeft }} className="text-[25vw] font-black whitespace-nowrap leading-none uppercase italic">
          ADITYA LAHRE • ADITYA LAHRE
        </motion.h2>
        <motion.h2 style={{ x: xRight }} className="text-[25vw] font-black whitespace-nowrap leading-none uppercase italic text-outline">
          MERN STACK • DIGITAL MARKETER
        </motion.h2>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h3 className="text-zinc-600 uppercase tracking-[0.6em] text-[10px] font-black mb-8 italic">// ABOUT ME</h3>
            <h2 className="text-5xl md:text-8xl font-black text-white uppercase leading-[0.9] tracking-tighter mb-10 group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all">
              Tech Meets <br /> <span className="text-zinc-500 italic">Strategy</span>.
            </h2>
            <p className="text-zinc-400 text-xl md:text-2xl leading-relaxed font-light">
              Main <span className="text-white font-medium">Aditya Lahre</span> hoon, Chhattisgarh se ek Full Stack Developer. Mera vision code ko scalable banana aur marketing data se results nikalna hai.
            </p>
          </motion.div>
        </div>

        <div className="w-full">
          <div className="flex items-center gap-4 mb-16">
            <div className="h-px flex-1 bg-white/10" />
            <h4 className="text-zinc-500 uppercase tracking-[0.4em] text-[10px] font-black">Expertise Stack</h4>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                whileHover={{ 
                  y: -10,
                  backgroundColor: "rgba(255,255,255,0.08)",
                  borderColor: "rgba(255,255,255,0.3)",
                  boxShadow: "0 0 30px rgba(255,255,255,0.1)"
                }}
                className="p-8 rounded-[2.5rem] bg-zinc-900/10 border border-white/5 backdrop-blur-sm flex flex-col items-center justify-center gap-5 transition-all duration-500 group"
              >
                <div className={`text-5xl ${skill.color} transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]`}>
                  {skill.icon}
                </div>
                <span className="text-[9px] uppercase font-black tracking-[0.3em] text-zinc-600 group-hover:text-white transition-colors">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .text-outline {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.4);
          color: transparent;
        }
      `}</style>
    </section>
  );
}