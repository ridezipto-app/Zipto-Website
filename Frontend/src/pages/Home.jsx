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
        <title>bookfleet – Fast Hyperlocal Delivery in Bhubaneswar, Odisha | bookfleet.in</title>
        <meta name="description" content="bookfleet is Odisha's trusted hyperlocal delivery service. Bike, scooty, auto, pickup & mini truck deliveries in Bhubaneswar with real-time tracking and transparent pricing." />
        <meta name="keywords" content="bookfleet, hyperlocal delivery, last-mile delivery, Bhubaneswar delivery, Odisha courier, parcel delivery, bike delivery, logistics" />
        <link rel="canonical" href="https://bookfleet.in/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="bookfleet" />
        <meta property="og:title" content="bookfleet – Fast Hyperlocal Delivery in Bhubaneswar" />
        <meta property="og:description" content="Odisha's trusted hyperlocal delivery platform. Five vehicle classes, real-time tracking, transparent pricing." />
        <meta property="og:url" content="https://bookfleet.in/" />
        <meta property="og:image" content="https://bookfleet.in/logo.jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="bookfleet – Fast Hyperlocal Delivery in Bhubaneswar" />
        <meta name="twitter:description" content="Odisha's trusted hyperlocal delivery platform. Five vehicle classes, real-time tracking, transparent pricing." />
        <meta name="twitter:image" content="https://bookfleet.in/logo.jpeg" />
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