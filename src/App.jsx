import "./index.css";
import TopProducts from "./components/TopProducts/TopProducts";
import Banner from "./components/Banner/banner";
import Hero from "./components/Hero/hero";
import AOS from "aos";
import Products from "./components/Products/Products";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Sub from "./components/Sub/Sub";
import Testinomials from "./components/Testinomials/Testinomials";
import Footer from "./components/Footer/Footer";

function App() {
  const [orderPopup, setOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="bg-whote dark:bg-gray-900 dark:test-white duration-200">
        <Navbar handleOderPopup={handleOrderPopup} />
        <Hero handleOderPopup={handleOrderPopup} />
        <Products />
        <TopProducts handleOrderPopup={handleOrderPopup} />
        <Banner />
        <Sub />
        <Testinomials />
        <Footer />
      </div>
    </>
  );
}

export default App;
