import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import SideBar from "./components/SideBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Hero from "./components/Hero";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <Router>
        <Toaster/>
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/shop" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
        <SideBar />
        <Footer />
      </Router>
    </>
  );
};

export default App;
