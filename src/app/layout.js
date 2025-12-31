import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  // Browser Tab Title - Ye 100% kaam karega
  title: {
    default: "Aditya Lahre | Creative Full Stack Developer",
    template: "%s | Aditya Lahre"
  },
  description: "Aditya Lahre - MERN Stack Developer & Digital Marketer specializing in high-end web experiences.",
  
  // Favicon (Jo kala triangle dikh raha hai usse hatane ke liye)
  icons: {
    icon: "/favicon.ico", 
    apple: "/apple-touch-icon.png",
  },

  // Search Engine & Social Media
  openGraph: {
    title: "Aditya Lahre • Portfolio",
    description: "Transforming Ideas Into Digital Reality. Check out my latest works.",
    url: "https://aditya-lahre.vercel.app", // Yahan apna actual Vercel URL daal dena
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
        
        {/* Main Content Area */}
        <main className="flex-grow">
          {children}
        </main>

        {/* CSS for better mobile experience */}
        <style dangerouslySetInnerHTML={{ __html: `
          body { -webkit-tap-highlight-color: transparent; }
        ` }} />
      </body>
    </html>
  );
}