import React, { useState } from "react";
import ProductCard from "../components/gallery/ProductCard";

const Gallery = () => {
  const products = [
    {
      id: 1,
      name: "Chair",
      category: "chairs",
      src: "https://aksharfurniture.in/upload/diningset/subdiningset/6486537885chair-1.jpg",
    },
    {
      id: 2,
      name: "Sofa",
      category: "sofa",
      src: "https://aksharfurniture.in/upload/sofaset/subsofaset/hawk.jpg",
    },
    {
      id: 3,
      name: "Dining Table",
      category: "dining table",
      src: "https://aksharfurniture.in/upload/diningset/subdiningset/979018480marbal-top-dining-table-1.jpg",
    },
    {
      id: 4,
      name: "Bedroom Set",
      category: "bedroomset",
      src: "https://aksharfurniture.in/upload/bedroomset/bed.jpg",
    },
    {
      id: 5,
      name: "Center Table",
      category: "center table",
      src: "https://aksharfurniture.in/upload/center-table/center-table-1.jpg",
    },
    {
      id: 6,
      name: "Center Table 3",
      category: "center table",
      src: "https://aksharfurniture.in/upload/center-table/center-table-2.jpg",
    },
    {
      id: 7,
      name: "Dining Table 2",
      category: "dining table",
      src: "https://aksharfurniture.in/upload/diningset/subdiningset/8599660226marbal-top-dining-table-8.jpg",
    },
    {
      id: 8,
      name: "Sofa 2",
      category: "sofa",
      src: "https://aksharfurniture.in/upload/sofaset/subsofaset/dallas.jpg",
    },
    {
      id: 9,
      name: "Chair 2",
      category: "chairs",
      src: "https://aksharfurniture.in/upload/diningset/subdiningset/6746872247chair-2.jpg",
    },
    {
      id: 10,
      name: "Bedroom Set 2",
      category: "bedroomset",
      src: "https://aksharfurniture.in/upload/bedroomset/subbedroomset/bed-1.jpg",
    },
    {
      id: 11,
      name: "Center Table 2",
      category: "center table",
      src: "https://aksharfurniture.in/upload/center-table/center-table-3.jpg",
    },
    {
      id: 12,
      name: "Chair 3",
      category: "chairs",
      src: "https://aksharfurniture.in/upload/diningset/subdiningset/184770310chair-3.jpg",
    },
    {
      id: 13,
      name: "Sofa 3",
      category: "sofa",
      src: "https://aksharfurniture.in/upload/sofaset/subsofaset/stork.jpg",
    },
    {
      id: 14,
      name: "Dining Table 3",
      category: "dining table",
      src: "https://aksharfurniture.in/upload/diningset/subdiningset/9158267223marbal-top-dining-table-7.jpg",
    },
    {
      id: 15,
      name: "Bedroom Set 3",
      category: "bedroomset",
      src: "https://aksharfurniture.in/upload/bedroomset/subbedroomset/bed-2.jpg",
    },
    {
      id: 17,
      name: "Dining Table 4",
      category: "dining table",
      src: "https://aksharfurniture.in/upload/diningset/subdiningset/1241097001marbal-top-dining-table-10.jpg",
    },
    {
      id: 18,
      name: "Dining Table 5",
      category: "dining table",
      src: "https://aksharfurniture.in/upload/diningset/subdiningset/5183365202marbal-top-dining-table-9.jpg",
    },
    {
      id: 19,
      name: "Chair 4",
      category: "chairs",
      src: "https://aksharfurniture.in/upload/diningset/subdiningset/72997470chair-4.jpg",
    },
    {
      id: 20,
      name: "Bedroom Set 4",
      category: "bedroomset",
      src: "https://aksharfurniture.in/upload/bedroomset/subbedroomset/bed-4.jpg",
    },
    // Add more products as needed
  ];

  const categories = [
    "chairs",
    "sofa",
    "dining table",
    "bedroomset",
    "center table",
  ];

  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCheckboxChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter((cat) => cat !== category)
      );
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const filteredProducts = selectedCategories.length
    ? products.filter((product) =>
        selectedCategories.includes(product.category)
      )
    : products;

  return (
    <div className="container mt-4">
      <div className="row">
        {/* Filter Section */}
        <div className="col-12 col-md-4 col-lg-3 mb-4">
          <div className="common-sub-title mb-4 text-start">
            Filter by Category
          </div>
          {categories.map((category) => (
            <div className="form-check cursor-pointer mb-3" key={category}>
              <div class="checkbox-wrapper-33">
                <label class="checkbox cursor-pointer" htmlFor={category}>
                  <input
                    class="checkbox__trigger visuallyhidden"
                    type="checkbox"
                    value={category}
                    id={category}
                    onChange={() => handleCheckboxChange(category)}
                  />
                  <span class="checkbox__symbol">
                    <svg
                      aria-hidden="true"
                      class="icon-checkbox"
                      width="28px"
                      height="28px"
                      viewBox="0 0 28 28"
                      version="1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M4 14l8 7L24 7"></path>
                    </svg>
                  </span>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </label>
              </div>
            </div>
          ))}
        </div>

        {/* Product Grid Section */}
        <div className="col-12 col-md-8 col-lg-9">
          <div className="common-title mb-4 text-start">Products</div>
          <div className="row effect-grid">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <ProductCard product={product} />
              ))
            ) : (
              <p>No products available for the selected category.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
