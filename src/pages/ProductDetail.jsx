import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { ProductContext } from "../context/ProductContext";
import toast from "react-hot-toast";

const ProductDetail = () => {
  const { id } = useParams();
  // we recieve id :3 but we want only 3 so next line help to achieve this
  const numericID = Number(id.slice(1));

  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  const product = products.find((item) => {
    return item.id === numericID;
  });

  if (!product) {
    return (
      <div style={{ height: "70vh" }} className="d-flex justify-content-center align-items-center">
        <section>Loading...</section>
      </div>
    );
  }

  // console.log(product);

  const { image, title, price, description, category } = product;

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ height: "80vh" }}
    >
      <div className="container">
        <div className="row border border-dark p-3 mt-3">
          <div className="col-sm-4">
            <div className="img_container">
              <img src={image} alt="" className="img-fluid" />
            </div>
          </div>
          <div className="col-sm-8 d-flex justify-content-center align-items-start flex-column">
            <div className="mt-2">
              <h2>{title}</h2>
            </div>
            <div className="mt-2 text-dark-emphasis">{category}</div>
            <div className="mt-2">
              <h3>{`$ ${price}`}</h3>
            </div>
            <div style={{ textAlign: "justify" }} className="mt-2">
              {description}
            </div>
            <div className="w-100">
              <button
                className="btn btn-lg btn-dark rounded-2 mt-5 w-100 mb-5"
                onClick={() => {
                  addToCart(product, numericID);
                  toast.success("Added to cart");
                }}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
