"use client";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useRef, useState } from "react";
import { PROJECTS } from "@/constants/projects";

const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <div ref={ref} className="relative mb-32 md:mb-48 last:mb-0">
      <div className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-10 items-center justify-center`}>
        
        {/* Project Image Section (Size Reduced) */}
        <div className="w-full md:w-[45%] overflow-hidden rounded-2xl bg-zinc-900 group relative aspect-[4/3] border border-white/5">
          <motion.div style={{ y }} className="relative h-full w-full">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
            />
          </motion.div>
          <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all duration-500" />
        </div>

        {/* Project Info Section */}
        <div className="w-full md:w-[35%] space-y-5 px-4">
          <div className="flex items-center gap-4">
            <span className="text-zinc-800 font-black text-4xl md:text-6xl italic">0{index + 1}</span>
            <span className="text-zinc-500 uppercase tracking-widest text-[9px] font-bold">
              {project.category}
            </span>
          </div>

          <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none text-white italic">
            {project.title}
          </h3>

          <p className="text-zinc-500 text-base font-light leading-relaxed">
            Scalable architecture aur modern UI patterns ka use karke ek clean user experience deliver kiya gaya hai.
          </p>

          <div className="pt-4">
             <button className="group flex items-center gap-4 text-white uppercase text-[10px] font-black tracking-[0.4em] border-b border-white/10 pb-2 hover:border-white transition-all shadow-[0_5px_15px_rgba(255,255,255,0.05)]">
               Live Demo
               <span className="group-hover:translate-x-2 transition-transform">→</span>
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Projects() {
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

  const spotlight = useTransform(
    [smoothX, smoothY],
    ([x, y]) => isHovered 
      ? `radial-gradient(400px circle at ${x}px ${y}px, rgba(255,255,255,0.12), transparent 80%)`
      : `radial-gradient(400px circle at 50% 50%, rgba(255,255,255,0), transparent 80%)`
  );

  return (
    <section 
      id="projects" 
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="py-40 bg-black text-white px-6 relative overflow-hidden"
    >
      {/* Spotlight Effect */}
      <motion.div 
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500"
        style={{ background: spotlight, opacity: isHovered ? 1 : 0 }}
      />

      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-32">
          <h4 className="text-zinc-500 uppercase tracking-[0.4em] text-[10px] font-black italic">// PORTFOLIO</h4>
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none">
            WORKS<span className="text-zinc-800">.</span>
          </h2>
        </div>

        <div className="space-y-10">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}