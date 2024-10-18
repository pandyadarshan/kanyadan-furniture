import React from "react";

const TopAddressSection = () => {
  return (
    <div className="top-address-section d-md-block d-none">
      <div className="container-lg top-address-section-inner">
        <div className="address-sec">
          <div className="address">
            <i class="fa-solid fa-location-dot me-2"></i>
            <span>Kanyadan Furniture Rajkot, Nr Mavdi Plot, Rajkot-360004</span>
          </div>
          {/* <div className="email">
            <i class="fa-solid fa-envelope me-2"></i>
            <span>kanyadanfurniture@gmail.com</span>
          </div> */}
        </div>
        <div className="social-sec">
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-youtube"></i>
        </div>
      </div>
    </div>
  );
};

export default TopAddressSection;
