import React, { useContext, useState } from "react";
import Product from "../components/Product.jsx";
import { ProductContext } from "../context/ProductContext.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import bg from "../img/bg.jpg";
import bg1 from "../img/bg1.jpg";
import bg2 from "../img/bg2.jpg";
import bg3 from "../img/bg3.jpg";
import bg4 from "../img/bg4.jpg";
import "../App.css";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { products } = useContext(ProductContext);

  const scrollToElementAndSetCategory = (category) => {
    const element = document.getElementById("shop");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setSelectedCategory(category);
  };

  const filterProducts = () => {
    if (selectedCategory === "all") {
      return products;
    } else {
      return products.filter((item) => item.category === selectedCategory);
    }
  };

  return (
    <>
      <div className="container">
        <div className="row mx-auto">
         
          <div
            className="btn btn-dark my-2"
            style={{ width: "97%", margin: "0 auto" }}
            onClick={() => scrollToElementAndSetCategory(`all`)}
          >
            All
          </div>
          <div
            className="col-lg-6 col-xl-3 col-md-6 col-sm-6 col-6 child-div"
            onClick={() => scrollToElementAndSetCategory(`men's clothing`)}
          >
            <div
              className="image-container"
              style={{ backgroundImage: `url(${bg1})` }}
            >
              <p className="image-text">Men's</p>
            </div>
          </div>
          <div
            className="col-lg-6 col-xl-3 col-md-6 col-sm-6 col-6 child-div"
            onClick={() => scrollToElementAndSetCategory(`women's clothing`)}
          >
            <div
              className="image-container"
              style={{ backgroundImage: `url(${bg2})` }}
            >
              <p className="image-text">Women's</p>
            </div>
          </div>
          <div
            className="col-lg-6 col-xl-3 col-md-6 col-sm-6 col-6 child-div"
            onClick={() => scrollToElementAndSetCategory("jewelery")}
          >
            <div
              className="image-container"
              style={{ backgroundImage: `url(${bg3})` }}
            >
              <p className="image-text">Accessories</p>
            </div>
          </div>
          <div
            className="col-lg-6 col-xl-3 col-md-6 col-sm-6 col-6 child-div"
            onClick={() => scrollToElementAndSetCategory("electronics")}
          >
            <div
              className="image-container"
              style={{ backgroundImage: `url(${bg4})` }}
            >
              <p className="image-text">Electronic</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container" id="shop">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 mx-auto">
          {filterProducts().map((product) => (
            <div
              key={product.id}
              className="col mb-3 col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3"
            >
              <Product product={product} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
