import React, { useEffect, useRef } from "react";
import gsap from "gsap";

import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import TopAddressSection from "./TopAddressSection";
import BottomFooterSection from "./BottomFooterSection";

const Layout = ({ children }) => {
  return (
    <div className="app-container">
      <TopAddressSection />
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
      <BottomFooterSection />
    </div>
  );
};

export default Layout;
