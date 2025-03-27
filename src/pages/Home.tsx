import React from "react";
import HeroSection from "../components/HeroSection";
import BioLinkSection from "../components/BiolLinkSection";
import AIEngagementSection from "../components/AIEngagementSection";
import SmartSchedulingSection from "../components/SmartSchedulingSection";
import InfluenceWithoutLimitsSection from "../components/InfluenceSection";
import PricingSection from "../components/PricingSection";
import FAQSection from "../components/FAQSection";
import Footer from "../common/Footer";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <HeroSection />
      <BioLinkSection />
      <AIEngagementSection />
      <SmartSchedulingSection />
      <InfluenceWithoutLimitsSection />
      <PricingSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Home;
