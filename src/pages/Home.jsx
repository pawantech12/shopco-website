import React from "react";
import HeroSection from "../components/HeroSection";
import PartnerSection from "../components/PartnerSection";
import NewArrivalSection from "../components/NewArrivalSection";
import TopSellingSection from "../components/TopSellingSection";
import DressStyle from "../components/DressStyle";
import TestimonialSection from "../components/TestimonialSection";
import NewsletterSection from "../components/NewsletterSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <PartnerSection />
      <NewArrivalSection />
      <TopSellingSection />
      <DressStyle />
      <TestimonialSection />
      <NewsletterSection />
    </>
  );
};

export default Home;
