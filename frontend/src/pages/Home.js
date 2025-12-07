import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Demo from "../components/Demo";
import Technology from "../components/Technology";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Stats from "../components/Stats";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import BackgroundElements from "../components/BackgroundElements";

const Home = () => {
  return (
    <>
      <BackgroundElements />
      <Header />
      <Hero />
      <Demo />
      <Technology />
      <Features />
      <HowItWorks />
      <Stats />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
};

export default Home;
