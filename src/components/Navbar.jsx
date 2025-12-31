"use client";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { FiHome, FiUser, FiCode, FiMail } from "react-icons/fi";

export default function Navbar() {
  const navItems = [
    { name: "Home", to: "home", icon: <FiHome /> },
    { name: "About", to: "about", icon: <FiUser /> },
    { name: "Projects", to: "projects", icon: <FiCode /> },
    { name: "Contact", to: "contact", icon: <FiMail /> },
  ];

  return (
    <>
      {/* --- DESKTOP NAVBAR --- */}
      <motion.nav 
        className="hidden md:block fixed top-8 left-1/2 -translate-x-1/2 z-[999] bg-zinc-900/40 backdrop-blur-xl border border-white/5 px-8 py-4 rounded-full shadow-2xl"
      >
        <ul className="flex gap-10 items-center">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.to}
                smooth={true}
                spy={true}
                offset={-80}
                // --- QUICK RESPONSE CHANGES ---
                duration={300}        // Duration 300ms kar diya (kafi fast)
                delay={0}             // Koi delay nahi
                easing="easeOutQuart" // Fast acceleration
                // -----------------------------
                activeClass="nav-active"
                className="text-zinc-500 hover:text-white cursor-pointer text-[10px] uppercase tracking-[0.3em] font-black transition-all"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </motion.nav>

      {/* --- MOBILE NAVBAR --- */}
      <motion.nav 
        className="md:hidden fixed bottom-8 left-1/2 -translate-x-1/2 z-[999] w-[85%] max-w-[320px] bg-zinc-900/95 backdrop-blur-3xl border border-white/10 px-6 py-4 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
      >
        <ul className="flex justify-between items-center gap-2">
          {navItems.map((item) => (
            <li key={item.name} className="flex-1">
              <Link
                to={item.to}
                smooth={true}
                spy={true}
                offset={0}
                // --- QUICK RESPONSE CHANGES ---
                duration={300}        // Mobile par bhi same fast response
                delay={0}
                easing="easeOutQuart"
                // -----------------------------
                activeClass="mobile-nav-active"
                className="flex flex-col items-center gap-1.5 text-zinc-500 transition-all active:scale-90"
              >
                <span className="text-xl">{item.icon}</span>
                <span className="text-[8px] uppercase tracking-tighter font-bold">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </motion.nav>
    </>
  );
}