import { Button } from "@/components/ui/button";
import Image from "next/image";
import Navbar from "./_components/Navbar";
import HeroSection from "./_components/HeroSection";

export default function Home() {
  return (
    <>
      {" "} 
      <Navbar />
      <HeroSection />
    </>
  );
}
