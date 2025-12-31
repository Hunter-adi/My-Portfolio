import "./globals.css";
import Navbar from "@/components/Navbar";

// Sirf ek baar metadata rakhein
export const metadata = {
  title: "Aapka Naam | Creative Full Stack Developer",
  description: "Crafting modern web experiences with Next.js and Framer Motion.",
  openGraph: {
    title: "Aapka Naam - Portfolio",
    description: "Take a look at my latest projects and skills.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#050505] text-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}