import HeroSection from "@/components/landing/HeroSection";
import AboutSection from "@/components/landing/AboutSection";
import ExpertSection from "@/components/landing/ExpertSection";
import ConversionSection from "@/components/landing/ConversionSection";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <AboutSection />
      <ExpertSection />
      <ConversionSection />
    </div>
  );
}
