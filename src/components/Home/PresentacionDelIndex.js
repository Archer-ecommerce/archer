import React from "react";
import "../../css/Product.css";

//Imagenes Jordan
import NikeLogo from "../../images/logos/nike.png";
import Nike4 from "../../images/sneaker/home/home4.jfif";
import Nike6 from "../../images/sneaker/home/home6.jfif";

//Imagenes Yeezy
import AdidasLogo from "../../images/logos/adidas.png";
import Yeezy1 from "../../images/sneaker/yeezy/1.jfif";
import Yeezy2 from "../../images/sneaker/yeezy/2.jfif";

import { BlackButton } from "../Button/BlackButton";

export const PresentacionDelIndex = () => {
  return (
    <div style={{ marginBottom: "100px" }}>
      <div className="portada">
        <div className="portada-detalles">
          <h2>Air Jordan I High og</h2>
          <p>The Jordan Family DNA is in all of us.</p>
          <BlackButton
            texto={`Buy`}
            link={`/category/Jordan`}
            clase={`home-boton`}
          />
        </div>
      </div>
      <div className="productos">
        <div className="home-flex">
          <img src={NikeLogo} width="120" alt="Logo extraido de FlatIcon" />
          <h3>Air Jordan</h3>
          <p>
            Air Jordan is an American brand of basketball shoes, athletic,
            casual, and style clothing produced by Nike. Founded in Chicago, Air
            Jordan was created for Hall of Fame former basketball player Michael
            Jordan during his time with the Chicago Bulls.
          </p>
          <BlackButton
            texto={`Buy`}
            link={`/category/Jordan`}
            clase={`home-boton`}
          />
        </div>
        <img src={Nike4} className="img1" alt="imagen de zapatilla Nike" />
        <img src={Nike6} className="img2" alt="imagen de zapatilla Nike" />
      </div>
      <div className="productos2">
        <img src={Yeezy1} className="img3" alt="imagen de zapatilla Yeezy" />
        <img src={Yeezy2} className="img4" alt="imagen de zapatilla Yeezy" />
        <div className="home-flex2">
          <img src={AdidasLogo} width="120" alt="Logo extraido de FlatIcon" />
          <h3>Yeezy</h3>
          <p>
            Adidas Yeezy is a fashion collaboration between German sportswear
            company Adidas and American designer, rapper, entrepreneur and
            personality Kanye West. The collaboration has become notable for its
            high-end limited edition colorways and general releases offered by
            the Yeezy Boost sneakers line up.
          </p>
          <BlackButton
            texto={`Buy`}
            link={`/category/Yeezy`}
            clase={`home-boton`}
          />
        </div>
      </div>
    </div>
  );
};
