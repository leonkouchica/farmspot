import React from "react";
import Preloader from "../helper/Preloader";
import ColorInit from "../helper/ColorInit";
import Breadcrumb from "../components/Breadcrumb";
import HeaderOne from "../components/HeaderOne";
import BottomFooter from "../components/BottomFooter";
import About from "../components/About";
import ScrollToTop from "react-scroll-to-top";

const AboutPage = () => {
  return (
    <>
      {/* ColorInit */}
      <ColorInit color={true} />

      {/* ScrollToTop */}
      <ScrollToTop smooth color="#FA6400" />

      {/* Preloader */}
      <Preloader />

      {/* HeaderTwo */}
      <HeaderOne category={true} />

      {/* Breadcrumb */}
      <Breadcrumb title={"Contact"} />

      {/* About */}
      <About />

      {/* ShippingOne */}
      {/* <ShippingOne /> */}

      {/* FooterTwo */}
      {/* <FooterTwo /> */}

      {/* BottomFooter */}
      <BottomFooter />
    </>
  )
}

export default AboutPage