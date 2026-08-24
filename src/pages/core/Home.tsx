import React from "react";
import { PageBackground, CaseStudies, HomeHero, Roles } from '../../components/index'
import { PaperSeparator } from '@/components/layout/paperSeparator'

const Home: React.FC = () => {
  return (
      <div className="relative w-full min-h-screen">
        <PageBackground src="/images/bg-home-texture.webp" />
        <HomeHero />
              
        <div className="relative mt-12 w-full z-20">
          <PaperSeparator />
          <img
            src='/images/bg-texture-dots.webp'
            alt='Background pattern for content'
            className="absolute inset-0 bg-cover bg-fixed w-full h-800"
          />
          <Roles />
          <CaseStudies />
        </div>
      </div>
  );
};

export default Home;