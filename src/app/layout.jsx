import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Preloader } from "@/components/Preloader";

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"], 
  variable: '--font-space-grotesk',
  weight: ['400', '500', '600', '700']
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  weight: ['400', '500']
});

export const metadata = {
  title: "The Kinetic Curator | High-Performance Events",
  description: "We architect kinetic experiences for the bold.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={cn(
        "min-h-screen bg-surface text-on_surface font-sans antialiased",
        spaceGrotesk.variable, 
        inter.variable
      )}>
        <Preloader />
        <Navbar />
        <main className="flex min-h-screen flex-col items-center justify-between">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
