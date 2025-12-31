import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  // Isse terminal ki metadataBase warning khatam ho jayegi
  metadataBase: new URL("https://aditya-lahre.vercel.app"),
  
  title: {
    default: "Aditya Lahre | Creative Full Stack Developer",
    template: "%s | Aditya Lahre"
  },
  description: "Aditya Lahre - MERN Stack Developer & Digital Marketer specializing in high-end web experiences.",
  
  icons: {
    icon: "/favicon.ico", 
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "Aditya Lahre • Portfolio",
    description: "Transforming Ideas Into Digital Reality. Check out my latest works.",
    url: "https://aditya-lahre.vercel.app",
    siteName: "Aditya Lahre Portfolio",
    images: [
      {
        url: "/og-image.jpg", 
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-[#050505] text-white selection:bg-white selection:text-black min-h-screen flex flex-col">
        {/* Navbar */}
        <Navbar />
        
        {/* Page Content */}
        <main className="relative z-10 flex-grow">
          {children}
        </main>

        {/* Mobile touch optimization */}
        <style dangerouslySetInnerHTML={{ __html: `
          body { -webkit-tap-highlight-color: transparent; }
        ` }} />
      </body>
    </html>
  );
}