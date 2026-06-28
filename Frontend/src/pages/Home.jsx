import { Helmet } from 'react-helmet-async'
import HeroSection from "../components/home/HeroSection";
import ServicesSection from "../components/home/ServicesSection";
import WhyChooseSection from "../components/home/WhyChooseSection";
import ForBusinessSection from "../components/home/ForBusinessSection";
import BecomeRider from "../components/home/BecomeRider";
import CTASection from "../components/home/CTASection";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>bookfleet — Fast local delivery in your city</title>
        <meta name="description" content="bookfleet provides fast, reliable last-mile delivery with real-time tracking and a flexible fleet. Get business and personal deliveries handled efficiently." />
      </Helmet>
      <HeroSection />
      <ServicesSection />
      <WhyChooseSection />
      <ForBusinessSection />
      <BecomeRider />
      <CTASection />
    </>
  );
}