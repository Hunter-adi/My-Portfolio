import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  // Browser Tab Title
  title: "Aditya Lahre | Creative Full Stack Developer",
  description: "Aditya Lahre - MERN Stack Developer & Digital Marketer focusing on high-end web experiences.",
  
  // Social Media Sharing (WhatsApp, LinkedIn, Twitter par ye dikhega)
  openGraph: {
    title: "Aditya Lahre • Portfolio",
    description: "Transforming Ideas Into Digital Reality. Take a look at my latest projects.",
    url: "https://your-domain.vercel.app", // Yahan apna Vercel link daal dena
    siteName: "Aditya Lahre Portfolio",
    images: [
      {
        url: "/og-image.jpg", // Public folder mein ek badhiya photo rakho is naam se
        width: 1200,
        height: 630,
        alt: "Aditya Lahre Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  
  // Mobile Browser Theme Color
  themeColor: "#050505",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-[#050505] text-white selection:bg-white selection:text-black">
        {/* Navbar hamesha top par rahega */}
        <Navbar />
        
        {/* Main Content */}
        <main>
          {children}
        </main>

        {/* Custom Scrollbar Styling (Bas globals.css mein bhi add kar sakte ho) */}
        <style jsx global>{`
          ::-webkit-scrollbar {
            width: 8px;
          }
          ::-webkit-scrollbar-track {
            background: #050505;
          }
          ::-webkit-scrollbar-thumb {
            background: #222;
            border-radius: 10px;
          }
          ::-webkit-scrollbar-thumb:hover {
            background: #444;
          }
        `}</style>
      </body>
    </html>
  );
}