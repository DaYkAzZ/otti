import Image from "next/image";
import Header from "@/components/navigation/Header";
import Hero from "@/components/ui/home/Hero";
import Slider from "@/components/ui/home/Slider";

export default function Home() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Hero />
      </div>
      <div>
        <Slider />
      </div>
    </div>
  );
}
