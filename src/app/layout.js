import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Aditya Lahre | Creative Full Stack Developer",
  description: "Aditya Lahre - MERN Stack Developer & Digital Marketer.",
  openGraph: {
    title: "Aditya Lahre • Portfolio",
    description: "Transforming Ideas Into Digital Reality.",
    url: "https://your-domain.vercel.app",
    siteName: "Aditya Lahre Portfolio",
    images: [{ url: "/og-image.jpg" }],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-[#050505] text-white selection:bg-white selection:text-black">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}