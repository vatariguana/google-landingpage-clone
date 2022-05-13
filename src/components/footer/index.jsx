import React from "react";
import FooterDesktop from "./components/FooterDesktop";
import FooterMobile from "./components/FooterMobile";
import "./index.css";

const Footer = () => {
  return (
    // RAP-YPtg-e8QU-4VEvN
    //https://www.ondemandassessment.com
    <>
      <footer className="contenedor-footer">
        <div className="contenedor-itemsAll">
          <div className="col-12 contenedor-ecuador">Ecuador</div>
          <FooterDesktop />
          <FooterMobile />
        </div>
      </footer>
    </>
  );
};
export default Footer;
