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
      {/* --- DESKTOP NAVBAR (Wahi tumhara original wala) --- */}
      <motion.nav 
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        transition={{ duration: 0.8, ease: "circOut" }}
        className="hidden md:block fixed top-8 left-1/2 z-[100] bg-zinc-900/40 backdrop-blur-xl border border-white/5 px-8 py-4 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
      >
        <ul className="flex gap-10 items-center">
          {navItems.map((item) => (
            <li key={item.name} className="relative group">
              <Link
                to={item.to}
                smooth={true}
                duration={400}
                easing="easeInOutQuart"
                spy={true}
                offset={-20}
                activeClass="nav-active"
                className="text-zinc-500 hover:text-white cursor-pointer text-[10px] uppercase tracking-[0.3em] font-black transition-all duration-300 relative z-10"
              >
                {item.name}
              </Link>
              <motion.div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-all shadow-[0_0_8px_white]" />
            </li>
          ))}
        </ul>
      </motion.nav>

      {/* --- MOBILE NAVBAR (Ab screen se bahar nahi jayega) --- */}
      <motion.nav 
        initial={{ y: 100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] w-[92%] max-w-[360px] bg-zinc-900/90 backdrop-blur-2xl border border-white/10 px-4 py-3 rounded-[2rem] shadow-2xl"
      >
        <ul className="flex justify-between items-center w-full">
          {navItems.map((item) => (
            <li key={item.name} className="flex-1">
              <Link
                to={item.to}
                smooth={true}
                duration={400}
                spy={true}
                activeClass="mobile-nav-active"
                className="flex flex-col items-center gap-1 text-zinc-500 transition-all"
              >
                <span className="text-xl">{item.icon}</span>
                <span className="text-[7px] uppercase tracking-widest font-black">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </motion.nav>

      <style jsx global>{`
        /* Desktop Active State (Tumhari Original Settings) */
        .nav-active {
          color: white !important;
          text-shadow: 0 0 15px rgba(255, 255, 255, 0.8);
          letter-spacing: 0.4em !important;
        }

        /* Mobile Active State */
        .mobile-nav-active {
          color: white !important;
          transform: translateY(-4px);
        }
        .mobile-nav-active span {
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
        }
      `}</style>
    </>
  );
}