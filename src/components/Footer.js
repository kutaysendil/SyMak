import React from "react";
import "./footer.css";
import Logo from "./pages/SyImg/logo3.png";

const Footerr = () => {
  return (
    <div className="footer">
      <img src={Logo} alt="logo" />
      <div>
        <ul>
          <li>
            <p className="felem">
              Sy Makina olarak işlerimizi profesyonel olarak yapıyoruz,
              kaliteden asla taviz vermiyoruz.
            </p>
            <br />
            <hr
              style={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}
            />
            <br />
          </li>
          <li className="felem">
            <i className="fas fa-map-marker-alt">
              {"  "} 06374 Ostim Osb/Yenimahalle/Ankara{" "}
            </i>
          </li>
          <li className="felem">
            <i className="fas fa-phone">
              {"  "}
              +90 312 385 76 93{" "}
            </i>
          </li>
          <li className="felem">
            <i className="far fa-envelope">{"  "} info@symakina.com</i>
          </li>
        </ul>
      </div>
      <div className="felem2">
        © 2021 SY Makina . Tüm Hakları Saklıdır - All Rights Reserved
      </div>
    </div>
  );
};

export default Footerr;
