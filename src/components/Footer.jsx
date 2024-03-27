import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className="text-center bg-body-dark mt-5">
      <div className="container-fluid pt-4 bg-dark text-white">
        <section className="">
          <a
            data-mdb-ripple-init
            className="btn btn-link btn-floating btn-lg m-1 text-white"
            href="https://github.com/ParvezCodes"
            role="button"
            data-mdb-ripple-color="light"
          >
            <i className="fa-brands fa-github"></i>
          </a>

          <a
            data-mdb-ripple-init
            className="btn btn-link btn-floating btn-lg text-white m-1"
            href="https://www.linkedin.com/in/parvez-pathan-947631256"
            role="button"
            data-mdb-ripple-color="light"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>

          <a
            data-mdb-ripple-init
            className="btn btn-link btn-floating btn-lg text-white m-1"
            href="https://www.instagram.com/prvzz_07"
            role="button"
            data-mdb-ripple-color="light"
          >
            <i className="fab fa-instagram"></i>
          </a>

          <a
            data-mdb-ripple-init
            className="btn btn-link btn-floating btn-lg text-white m-1"
            href="https://www.facebook.com/parvez.pathan.9889"
            role="button"
            data-mdb-ripple-color="light"
          >
            <i className="fa-brands fa-facebook"></i>
          </a>
        </section>
      </div>

      <div className="text-center p-3 bg-dark text-white">
        © 2024 Copyright at &nbsp;
        <a
          className="text-white text-decoration-none"
          href="https://parvezcodes.netlify.app"
          target="_blank"
        >
          prvzzCodes.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
