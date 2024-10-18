import React from "react";
import { Link } from "react-router-dom";

const BottomFooterSection = () => {
  return (
    <div className="copyright-section">
      © Copyright 2023{" "}
      <Link to={"/#"} className="mx-1">
        Kanyadan Furniture
      </Link>{" "}
      all rights reserved | Designed & Develop by: Smart Fusion IT Services
    </div>
  );
};

export default BottomFooterSection;
