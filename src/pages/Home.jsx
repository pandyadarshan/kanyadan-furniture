import React, { useEffect, useState } from "react";

import TopSection from "../components/home/TopSection";
import MidBannerSection from "../components/home/MidBannerSection";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Projects from "../components/home/Projects";
import Journey from "../components/home/Journey";

const Home = () => {
  return (
    <>
      <TopSection />
      <WhyChooseUs />
      <MidBannerSection />
      <Projects />
      <Journey />
    </>
  );
};

export default Home;
