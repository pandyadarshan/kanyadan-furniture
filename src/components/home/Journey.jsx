import React from "react";

const Journey = () => {
  return (
    <div className="journey-container p-3 p-md-5">
      <div className="container">
        <div className="list">
          <div className="list-time">
            <i class="fa-regular fa-handshake"></i>
            <div>
              <div className="number">300</div>
              <div className="common-sub-title">Project Completed</div>
            </div>
          </div>
          <div className="list-time">
            <i class="fa-regular fa-face-smile-beam"></i>
            <div>
              <div className="number">232</div>
              <div className="common-sub-title">Satisfied Customers</div>
            </div>
          </div>
          <div className="list-time">
            <i class="fa-solid fa-gear"></i>
            <div>
              <div className="number">345</div>
              <div className="common-sub-title">Customization</div>
            </div>
          </div>
          <div className="list-time">
            <i class="fa-solid fa-palette"></i>
            <div>
              <div className="number">345</div>
              <div className="common-sub-title">Designs</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
