import React from "react";
import Preloader from "../helper/Preloader";
import HeaderOne from "../components/HeaderOne";
import Breadcrumb from "../components/Breadcrumb";
import ShopSection from "../components/ShopSection";
import BottomFooter from "../components/BottomFooter";
import ScrollToTop from "react-scroll-to-top";
import ColorInit from "../helper/ColorInit";

const ProductsPage = () => {
  return (
    <>
      {/* ColorInit */}
      <ColorInit color={true} />

      {/* ScrollToTop */}
      <ScrollToTop smooth color="#FA6400" />

      {/* Preloader */}
      <Preloader />

      {/* HeaderOne */}
      <HeaderOne category={true} />

      {/* Breadcrumb */}
      <Breadcrumb title={"Products"} />

      {/* ShopSection */}
      <ShopSection />

      {/* ShippingTwo */}
      {/* <ShippingTwo /> */}

      {/* FooterTwo */}
      {/* <FooterTwo /> */}

       {/* BottomFooter */}
       <BottomFooter />

    </>
  )
}

export default ProductsPage