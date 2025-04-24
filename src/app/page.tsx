import Image from "next/image";
import Header from "@/components/navigation/Header";
import Hero from "@/components/ui/Hero";

export default function Home() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Hero />
      </div>
    </div>
  );
}
