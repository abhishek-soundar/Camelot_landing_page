import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import CommandPreview from '../components/CommandPreview';
import FeaturesSection from '../components/FeaturesSection';
import TransformationSection from '../components/TransformationSection';
import HowItWorksSection from '../components/HowItWorksSection';
import AutonomousSection from '../components/AutonomousSection';
import SecuritySection from '../components/SecuritySection';
import PricingSection from '../components/PricingSection';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="relative">
      <Navbar />
      <HeroSection />
      <CommandPreview />
      <FeaturesSection />
      <TransformationSection />
      <HowItWorksSection />
      <AutonomousSection />
      <SecuritySection />
      <PricingSection />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Home;
