import Image from "next/image";
import Header from "@/components/navigation/Header";
import Hero from "@/components/ui/home/Hero";
import Features from "@/components/ui/home/Features";
import HowItWorks from "@/components/ui/home/HowItWorks";
import Pricing from "@/components/ui/home/Pricing";
import CTA from "@/components/ui/home/CTA";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#00150b] to-[#000d1c]">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Pricing />
        <CTA />
      </main>
    </div>
  );
}
