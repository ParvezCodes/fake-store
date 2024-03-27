import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "../App.css";
import toast from "react-hot-toast";

const Product = ({ product }) => {
  const { id, image, title, category, price } = product;

  const { addToCart } = useContext(CartContext);

  const cutTitle = (title, maxLength) => {
    if (title.length <= maxLength) {
      return title;
    } else {
      return title.substring(0, maxLength) + "...";
    }
  };

  return (
    <div className="card border border-dark">
      <Link to={`/product/:${id}`} className="text-decoration-none">
        <img src={image} className="card-img-top my-4" alt="..." />
      </Link>
      <div className="card-body">
        <Link to={`/product/:${id}`} className="text-decoration-none">
          <h5 className="card-title text-dark">{cutTitle(title, 18)}</h5>
        </Link>
        <p className="card-text">{`$${price}`}</p>
        <p className="card-text">{category}</p>
        <div className="d-grid gap-2">
          <button
            className="btn btn-dark py-2"
            type="button"
            onClick={() => {
              addToCart(product, id);
              toast.success("Added to cart");
            }}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
