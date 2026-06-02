import { Helmet } from 'react-helmet-async'
import HeroSection from "../components/home/HeroSection";
import ServicesSection from "../components/home/ServicesSection";
import ForBusinessSection from "../components/home/ForBusinessSection";
import CTASection from "../components/home/CTASection";
import BecomeRider from "../components/home/BecomeRider";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Zipto — Fast local delivery in your city</title>
        <meta name="description" content="Zipto provides fast, reliable last-mile delivery with real-time tracking and a flexible fleet. Get business and personal deliveries handled efficiently." />
      </Helmet>
      <HeroSection />
      <ServicesSection />
      <ForBusinessSection />
      <BecomeRider />
      <CTASection />
    </>
  );
}