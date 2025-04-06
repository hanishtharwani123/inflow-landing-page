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
      <BioLinkSection lottieAnimationPath="/animations/Section_2_optimized.json" />
      <AIEngagementSection lottieAnimationPath="/animations/Section_4_optimized.json" />
      <SmartSchedulingSection lottieAnimationPath="/animations/Section_3_optimized.json" />
      <InfluenceWithoutLimitsSection lottieAnimationPath="/animations/Section_5_optimized.json" />
      <PricingSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Home;
