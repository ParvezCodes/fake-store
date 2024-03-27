import React, { useContext } from "react";
import { SidebarContext } from "../context/SidebarContext.jsx";
import { CartContext } from "../context/CartContext.jsx";
import CartItem from "./CartItem.jsx";
import "../App.css";
import toast from "react-hot-toast";

const SideBar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, total, itemAmount } = useContext(CartContext);

  const sidebarClass = isOpen ? "sidebar open" : "sidebar closed";

  return (
    <>
      <div
        className={`position-fixed ${sidebarClass}`}
        style={{
          top: 0,
          right: isOpen ? 0 : "-100%",
          width: "100%",
          maxWidth: "35vw",
          height: "100vh",
          background: "white",
          color: "black",
          padding: "20px",
          transition: "right 0.3s ease",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div className="d-flex justify-content-between">
          <div>{`Cart Items (${itemAmount})`}</div>
          <div onClick={handleClose}>
            <i className="fa-solid fa-circle-xmark"></i>
          </div>
        </div>
        <hr />
        <div>
          {cart.map((item) => {
            return <CartItem item={item} key={item.id} />;
          })}
        </div>
        <div className="mt-auto">
          <div
            className="bg-danger text-white p-2 mb-1 text-center rounded-3"
            onClick={() => {
              clearCart();
              toast.success("Cart is Clear");
            }}
          >
            Clear Cart
          </div>
          <div
            className="bg-danger text-white p-2 mb-1 text-center rounded-3"
            onClick={() => {
              toast.success("Order Placed");
            }}
          >
            Check Out
          </div>
          <div className="bg-dark text-white p-2 mb-1 text-center rounded-3">{`Total $${parseFloat(
            total
          ).toFixed(2)}`}</div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
