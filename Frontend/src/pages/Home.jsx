import { useState } from "react";
import ZiptoCountdown from "../components/home/ZiptoCountdown";
import HeroSection from "../components/home/HeroSection";
import ServicesSection from "../components/home/ServicesSection";
import ForBusinessSection from "../components/home/ForBusinessSection";
import CTASection from "../components/home/CTASection";
import BecomeRider from "../components/home/BecomeRider";

export default function Home() {
  const [heroReady, setHeroReady] = useState(false);

  return (
     <>
      {!heroReady && (
        <ZiptoCountdown
          minutesBefore={10 / 60}
          onComplete={() => setHeroReady(true)}
        />
      )}

      {heroReady && (
        <>
          <HeroSection />
          <ServicesSection />
          <ForBusinessSection />
          <BecomeRider />
          <CTASection />
        </>
      )}
    </>
  );
}