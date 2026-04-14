import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Preloader } from "@/components/Preloader";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500"],
});

export const metadata = {
  title: {
    template: "%s | Viakrit Events",
    default: "Event Management & Brand Activation Company",
  },
  description:
    "Viakrit Events is an event management and brand activation company delivering corporate events, government projects, promotional campaigns and on-ground marketing across India. We plan, promote and execute high-impact experiences that drive visibility, engagement and brand growth.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={cn(
          "min-h-screen bg-surface text-on_surface font-sans antialiased",
          spaceGrotesk.variable,
          inter.variable,
        )}>
        <Preloader />
        <Navbar />
        <main className="flex flex-col items-center justify-between min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
