import Navbar from "../components/layout/Navbar";
import HeroSection from "../components/home/HeroSection";
import ServicesSection from "../components/home/ServicesSection";
import ForBusinessSection from "../components/home/ForBusinessSection";
import CTASection from "../components/home/CTASection";
import Footer from "../components/layout/Footer";
import BecomeRider from "../components/home/BecomeRider";

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      <Navbar />
      
      {/* Main Content Wrapper */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        <HeroSection />
        <ServicesSection />
        <ForBusinessSection />
        <BecomeRider />
        <CTASection />
      </div>

      <Footer />
    </div>
  );
}
