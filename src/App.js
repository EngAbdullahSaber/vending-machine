import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Aboutus from "./components/aboutus/Aboutus";
import Products from "./components/products/Products";
import AboutUs from "./components/AboutUss/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";
import { Vortex } from "react-loader-spinner";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div>
      {loading ? (
        <div className="spinner">
          <Vortex
            visible={true}
            height="100"
            width="100"
            ariaLabel="vortex-loading"
            wrapperStyle={{}}
            wrapperClass="vortex-wrapper"
            colors={[
              "#390085 ",
              "#7c3aed",
              "#390085",
              "#7c3aed",
              "#390085",
              "#7c3aed",
            ]}
          />
        </div>
      ) : (
        <div>
          <Navbar />
          <Header />
          <Aboutus />
          <Products />
          <AboutUs />
          <ContactUs />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
