/* eslint-disable*/
import React from "react";

import { Row, Col, Button } from "react-materialize";
import ReactGA from "react-ga";

// Thunbnails
import alinhadores from "../../img/Products/Alinhadores/01_kmc_3d_expert/kmc_3d_alinhador_expert_thumb.png";
import rampas from "../../img/Products/Rampas/01_kmc_rampas_10p/kmc_rampa_10p.jpg";
import baseAlinhamento from "../../img/Products/Base_Alinhamento/01_kmc_base_18p/kmc_base_view.jpg";
import elevadores from "../../img/Products/Elevadores/01_kmc_elev_r4500s/kmc_elevador_r4500s.jpg";
import balanceadoras from "../../img/Products/Balanceadoras/01_kmc_balanceadora_2070/kmc_balanceadora_2070.jpg";
import desmontadoras from "../../img/Products/Desmontadoras/01_kmc_desm_1500/kmc_1500.jpg";
import acessorios from "../../img/Products/Acessorios/01_kmc_acessorio/kmc_acessorio.jpg";
import linhaPesada from "../../img/Products/Linha_Pesada/01_kmc_3090_truck/kmc_3090_Truck.jpg";

import "../../css/ProductsPage.css";

export default class ProductsPageAnother extends React.Component {
  constructor() {
    super();

    ReactGA.pageview("/produtos");
  }

  handleEvent(action) {
    ReactGA.event({
      category: "Entrando no site",
      action: `Clicou no botão ${action}, pela HomePage`
    });
  }
  render() {
    return (
      <Row>
        <Col offset="s2" s={10} m={12} l={12}>
          <Col s={10} m={3} l={3}>
            <br />
            <div className="align-item-flex">
              <img
                className="thumbnail small"
                src={alinhadores}
                alt="kmc_3d_alinhadores"
              />
            </div>
            <br />
            <div className="align-item-flex">
              <Button
                className="blue"
                large
                node="a"
                onClick={() => {
                  this.handleEvent("Alinhadores");
                }}
                href="/todos-categorias/alinhadores"
              >
                Alinhadores
              </Button>
            </div>
          </Col>
          <Col s={10} m={3} l={3}>
            <br />
            <div className="align-item-flex">
              <img className="thumbnail small" src={rampas} alt="kmc_rampas" />
            </div>
            <br />
            <div className="align-item-flex">
              <Button
                className="blue"
                large
                node="a"
                onClick={() => {
                  this.handleEvent("Rampas");
                }}
                href="/todos-categorias/rampas"
              >
                Rampas
              </Button>
            </div>
          </Col>
          <Col s={10} m={3} l={3}>
            <br />
            <div className="align-item-flex">
              <img
                className="thumbnail small"
                src={baseAlinhamento}
                alt="kmc_base_de_alinhamento"
              />
            </div>
            <br />
            <div className="align-item-flex">
              <Button
                className="blue"
                large
                node="a"
                onClick={() => {
                  this.handleEvent("Base de Alinhamento");
                }}
                href="/todos-produtos/Base-Alinhamento"
              >
                Base De Alinhamento
              </Button>
            </div>
          </Col>
          <Col s={10} m={3} l={3}>
            <br />
            <div className="align-item-flex">
              <img
                className="thumbnail small"
                src={elevadores}
                alt="kmc_elevadores"
              />
            </div>
            <br />
            <div className="align-item-flex">
              <Button
                className="blue"
                large
                node="a"
                onClick={() => {
                  this.handleEvent("Elevadores");
                }}
                href="/todos-categorias/elevadores"
              >
                Elevadores
              </Button>
            </div>
          </Col>{" "}
          <Col s={10} m={3} l={3}>
            <br />
            <div className="align-item-flex">
              <img
                className="thumbnail small"
                src={balanceadoras}
                alt="kmc_balanceadoras"
              />
            </div>
            <br />
            <div className="align-item-flex">
              <Button
                className="blue"
                large
                node="a"
                onClick={() => {
                  this.handleEvent("Balanceadoras");
                }}
                href="/todos-produtos/Balanceadoras"
              >
                Balanceadoras
              </Button>
            </div>
          </Col>{" "}
          <Col s={10} m={3} l={3}>
            <br />
            <div className="align-item-flex">
              <img
                className="thumbnail small"
                src={desmontadoras}
                alt="kmc_desmontadoras"
              />
            </div>
            <br />
            <div className="align-item-flex">
              <Button
                className="blue"
                large
                node="a"
                onClick={() => {
                  this.handleEvent("Desmontadoras");
                }}
                href="/todos-produtos/Desmontadoras"
              >
                Desmontadoras
              </Button>
            </div>
          </Col>
          <Col s={10} m={3} l={3}>
            <br />
            <div className="align-item-flex">
              <img
                className="thumbnail small"
                src={acessorios}
                alt="kmc_acessorios_alinhamento"
              />
            </div>
            <br />
            <div className="align-item-flex">
              <Button
                className="blue"
                large
                node="a"
                onClick={() => {
                  this.handleEvent("Acessórios");
                }}
                href="/todos-produtos/Acessórios"
              >
                Acessórios
              </Button>
            </div>
          </Col>
          <Col s={10} m={3} l={3}>
            <br />
            <div className="align-item-flex">
              <img
                className="thumbnail small"
                src={linhaPesada}
                alt="kmc_acessorios_alinhamento"
              />
            </div>
            <br />
            <div className="align-item-flex">
              <Button
                className="blue"
                large
                node="a"
                onClick={() => {
                  this.handleEvent("Linha Pesada");
                }}
                href="todos-categorias/linha-pesada"
              >
                Linha Pesada
              </Button>
            </div>
          </Col>
        </Col>
      </Row>
    );
  }
}
