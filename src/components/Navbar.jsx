"use client";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

export default function Navbar() {
  const navItems = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <motion.nav 
      initial={{ y: -100, x: "-50%", opacity: 0 }}
      animate={{ y: 0, x: "-50%", opacity: 1 }}
      transition={{ duration: 0.8, ease: "circOut" }}
      className="fixed top-8 left-1/2 z-[100] bg-zinc-900/40 backdrop-blur-xl border border-white/5 px-8 py-4 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
    >
      <ul className="flex gap-10 items-center">
        {navItems.map((item) => (
          <li key={item.name} className="relative group">
            <Link
              to={item.to}
              smooth={true}
              duration={400} // Time kam kar diya (Fast scroll)
              easing="easeInOutQuart" // Smooth but fast transition
              spy={true}
              offset={-20} // Thoda sa space upar rakha hai sections ke liye
              activeClass="nav-active"
              className="text-zinc-500 hover:text-white cursor-pointer text-[10px] uppercase tracking-[0.3em] font-black transition-all duration-300 relative z-10"
            >
              {item.name}
            </Link>
            
            {/* Hover Dot Indicator */}
            <motion.div 
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-all shadow-[0_0_8px_white]" 
            />
          </li>
        ))}
      </ul>

      <style jsx global>{`
        .nav-active {
          color: white !important;
          text-shadow: 0 0 15px rgba(255, 255, 255, 0.8);
          letter-spacing: 0.4em !important;
        }
      `}</style>
    </motion.nav>
  );
}