import React from 'react';
import HeroSection from '../components/about/Hero';
import VisionMissionSection from '../components/about/Vision';
import PrestasiSection from '../components/about/Prestasi';

const About = () => {
  return (
    <div className="flex flex-wrap items-center justify-center h-full">
      <HeroSection />
      <VisionMissionSection />
      <PrestasiSection />
    </div>
  );
};

export default About;
