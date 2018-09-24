import React from "react";

import { Footer, Col } from "react-materialize";
import "../../css/FooterComponent.css";
import footerImg from "../../img/Background/footer_background.jpg";

const FooterComponent = () => (
  <div>
    <Col s={12} m={10} l={10}>
      <img
        className="footer-img"
        src={footerImg}
        alt="alinhamento balanceamento oficina"
        height="200px"
      />
    </Col>
    <Footer
      className="red accent-4"
      copyrights="&copy 2018 Copyright Todos os direitos reservados a GooMec-Plataforma Automotiva"
      links={
        <ul>
          <li>
            <a className="grey-text text-lighten-3" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="grey-text text-lighten-3" href="/nossa-historia">
              Sobre nós
            </a>
          </li>
          <li>
            <a className="grey-text text-lighten-3" href="/produtos">
              Produtos
            </a>
          </li>
          <li>
            <a className="grey-text text-lighten-3" href="/contato">
              Contato
            </a>
          </li>
        </ul>
      }
    >
      <h5 className="white-text">GooMec</h5>
      <p className="grey-text text-lighten-4">
        Tudo que você precisa esta aqui.
      </p>
      <h5 className="white-text">Telefone:.(11) 9 5787-7709</h5>
    </Footer>
  </div>
);

export default FooterComponent;
