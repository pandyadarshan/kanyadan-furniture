import React from "react";
import sofa from "../assets/sofa.jpeg";
import wordrob from "../assets/wordrob.jpeg";

const About = () => {
  return (
    <div className="about-us-container">
      <div class="responsive-container-block bigContainer">
        <div class="responsive-container-block Container">
          <div class="responsive-container-block leftSide">
            <span class="common-title text-start">
              We Make Difference in Your Homes
            </span>
            <div className="common-sub-title">GET TO KNOW ABOUT US</div>
            <p class="text-blk subHeading my-5">
              We have 30+ years of experiences for give you better quality
              results.
            </p>
            <p>
              Kanyadan Furniture is the premium quality brand for Home and
              Office furniture in Ahmedabad, India. Led by the largest in-house
              design & Manufaturing team in the Gujarat in the furniture
              category, Kanyadan Furniture aims to transform spaces with its
              thoughtfully designed furniture to create brighter homes and
              offices with products that have the highest design quotient in
              aesthetics, functionality and technology. We are using latest
              technology imported machines for our manufacturing process, so we
              are able to produce as customer designed and opt.
            </p>
          </div>
          <div class="responsive-container-block rightSide">
            <img
              class="number1img"
              src="https://img.freepik.com/free-photo/picture-frame-by-velvet-armchair_53876-132788.jpg"
            />
            <img
              class="number2img"
              src="https://5.imimg.com/data5/SELLER/Default/2023/10/351281158/PB/II/FF/68434442/bedroom-furniture-set.jpg"
            />
            <img
              class="number3img"
              src="https://aksharfurniture.in/upload/about/glass-dining-table.jpg"
            />
            <img
              class="number5img"
              src="https://img.freepik.com/free-photo/carpenter-cutting-mdf-board-inside-workshop_23-2149451066.jpg"
            />
            <iframe
              allowfullscreen="allowfullscreen"
              class="number4vid"
              poster="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/b242.png"
              src="https://www.youtube.com/embed/svg%3E?"
            ></iframe>
            <img class="number7img" src={wordrob} />
            <img class="number6img" src={sofa} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
