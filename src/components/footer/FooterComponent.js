import React from "react";

import { Footer } from "react-materialize";

const FooterComponent = () => (
  <div>
    <Footer
      className="orange darken-4"
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
    </Footer>
  </div>
);

export default FooterComponent;
