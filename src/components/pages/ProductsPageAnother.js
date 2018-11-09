/* eslint-disable*/
import React from "react";

import { Row, Col, Tabs, Tab, Modal, Button } from "react-materialize";
import { Link } from "react-router-dom";

// Thunbnails
import alinhadores from "../../img/Products/Alinhadores/01_kmc_3d_expert/kmc_3d_alinhador_expert_thumb.png";
import rampas from "../../img/Products/Rampas/01_kmc_rampas_10p/kmc_rampa_10p.jpg";
import baseAlinhamento from "../../img/Products/Base_Alinhamento/01_kmc_base_18p/kmc_base_view.jpg";
import elevadores from "../../img/Products/Elevadores/01_kmc_elev_r4500s/kmc_elevador_r4500s.jpg";
import balanceadoras from "../../img/Products/Balanceadoras/01_kmc_balanceadora_2070/kmc_balanceadora_2070.jpg";
import desmontadoras from "../../img/Products/Desmontadoras/01_kmc_desm_1500/kmc_1500.jpg";
import acessorios from "../../img/Products/Acessorios/01_kmc_acessorio/kmc_acessorio.jpg";
import linhaPesada from "../../img/Products/Linha_Pesada/01_kmc_3090_truck/kmc_3090_Truck.jpg";

// Alinhadores
import kmc3D from "../../img/Cards/KMC-3D-EXPERT-1.png";
import kmcCCD from "../../img/Cards/KMC-CCD-4000-1.png";
import kmcFLEX from "../../img/Cards/KMC-FLEX-FULL-1.png";

// Rampas
import rampaHidraulica from "../../img/Cards/KMC-RAMPA-10P.png";
import rampaPneumatica from "../../img/Cards/KMC-RAMPA-20-HD.png";

// Elevadores
import elevadorEletroMecanico from "../../img/Cards/KMC-R4000-ER.png";
import elevadorPneumatico from "../../img/Cards/KMC-RAMPA-10P.png";

export default class ProductsPageAnother extends React.Component {
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
              <Link to="/todos-categorias/alinhadores">
                <Button className="blue" large>
                  Alinhadores
                </Button>
              </Link>
            </div>
          </Col>
          <Col s={10} m={3} l={3}>
            <br />
            <div className="align-item-flex">
              <img className="thumbnail small" src={rampas} alt="kmc_rampas" />
            </div>
            <br />
            <div className="align-item-flex">
              <Link to="/todos-categorias/rampas">
                <Button className="blue" large>
                  Rampas
                </Button>
              </Link>
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
              <Button className="blue" large>
                Base De Alinhamento
              </Button>
            </div>
          </Col>{" "}
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
              <Button className="blue" large>
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
              <Button className="blue" large>
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
              <Button className="blue" large>
                Desmontadoras
              </Button>
            </div>
          </Col>{" "}
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
              <Button className="blue" large>
                Acessórios
              </Button>
            </div>
          </Col>{" "}
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
              <Button className="blue" large>
                Linha Pesada
              </Button>
            </div>
          </Col>{" "}
        </Col>
      </Row>
    );
  }
}
