import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import toast from "react-hot-toast";

const CartItem = ({ item }) => {
  const { id, title, image, price, amount } = item;
  const { removeFromCart, increseAmount, decreseAmount } =
    useContext(CartContext);
  return (
    <div className="cartItemBox">
      <div className="cart_Box">
        <div className="left_cartbox">
          <div className="img">
            <Link to={`/product/:${id}`}>
              <img src={image} alt="" />
            </Link>
          </div>
        </div>
        <div className="right_cartbox">
          <div className="top_cartbox">
            <div className="cart_item_title">{title}</div>
          </div>
          <div className="bottom_cartbox">
            <div className="btns">
              <div className="cart_item_icon" onClick={() => decreseAmount(id)}>
                <i className="fa-regular fa-square-minus"></i>
              </div>
              <div>{amount}</div>

              <div className="cart_item_icon" onClick={() => increseAmount(id)}>
                <i className="fa-regular fa-square-plus"></i>
              </div>
            </div>
            <div>{`$  ${parseFloat(price * amount).toFixed(2)}`}</div>
            <div
              className="icons"
              onClick={() => {
                removeFromCart(id);
                toast.error("Removed");
              }}
            >
              <i className="fa-solid fa-trash-can"></i>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default CartItem;
