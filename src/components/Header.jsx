import React, { useContext } from "react";
import { SidebarContext } from "../context/SidebarContext";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <Link className="navbar-brand mx-3" to="/">
            FakeShop
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item mx-2">
                <Link className="nav-link active" aria-current="page" to="/">
                  <i className="fa-solid fa-house"></i>&nbsp; Home
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link" to="/shop">
                  <i className="fa-solid fa-store"></i>&nbsp; Shop
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link" to="/about">
                  <i className="fa-solid fa-envelope"></i>&nbsp; Contact
                </Link>
              </li>
            </ul>

            <span
              className="navbar-text position-relative mx-2 my-1"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              <i className="fa-solid fa-bag-shopping"></i>&nbsp; Cart
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {itemAmount}
              </span>
            </span>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Header;
