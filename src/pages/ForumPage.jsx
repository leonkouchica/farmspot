import React from "react";
import Preloader from "../helper/Preloader";
import ColorInit from "../helper/ColorInit";
import HeaderOne from "../components/HeaderOne";
import Breadcrumb from "../components/Breadcrumb";
import BottomFooter from "../components/BottomFooter";
import Forum from "../components/Forum";
import ScrollToTop from "react-scroll-to-top";


const ForumPage = () => {
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
          <Breadcrumb title={"Forum"} />
    
          {/* Forum */}
          <Forum />
    
          {/* ShippingOne */}
          {/* <ShippingOne /> */}
    
          {/* FooterTwo */}
          {/* <FooterTwo /> */}
    
          {/* BottomFooter */}
          <BottomFooter />
        </>
      )
}

export default ForumPage