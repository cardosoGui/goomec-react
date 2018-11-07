import React from "react";

import { Row, Col, Tabs, Tab, Modal, Button } from "react-materialize";

//Thunbnails
import alinhadores from "../../img/Products/Alinhadores/01_kmc_3d_expert/kmc_3d_alinhador_expert_thumb.png";
import rampas from "../../img/Products/Rampas/01_kmc_rampas_10p/kmc_rampa_10p.jpg";
import baseAlinhamento from "../../img/Products/Base_Alinhamento/01_kmc_base_18p/kmc_base_view.jpg";
import elevadores from "../../img/Products/Elevadores/01_kmc_elev_r4500s/kmc_elevador_r4500s.jpg";
import balanceadoras from "../../img/Products/Balanceadoras/01_kmc_balanceadora_2070/kmc_balanceadora_2070.jpg";
import desmontadoras from "../../img/Products/Desmontadoras/01_kmc_desm_1500/kmc_1500.jpg";
import acessorios from "../../img/Products/Acessorios/01_kmc_acessorio/kmc_acessorio.jpg";
import linhaPesada from "../../img/Products/Linha_Pesada/01_kmc_3090_truck/kmc_3090_Truck.jpg";

//Alinhadores
import kmc3D from "../../img/Cards/KMC-3D-EXPERT-1.png";
import kmcCCD from "../../img/Cards/KMC-CCD-4000-1.png";
import kmcFLEX from "../../img/Cards/KMC-FLEX-FULL-1.png";

//Rampas
import rampaHidraulica from "../../img/Cards/KMC-RAMPA-10P.png";
import rampaPneumatica from "../../img/Cards/KMC-RAMPA-20-HD.png";

//Elevadores
import elevadorEletroMecanico from "../../img/Cards/KMC-R4000-ER.png";
import elevadorPneumatico from "../../img/Cards/KMC-RAMPA-10P.png";

export default class ProductsPageContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      alinhadores: {
        categories: [
          { title: "KMC 3D", img: kmc3D },
          { title: "KMC CCD", img: kmcCCD },
          { title: "KMC FLEX", img: kmcFLEX }
        ]
      },
      rampas: {
        categories: [
          { title: "Rampas Hidráulicas", img: rampaHidraulica },
          { title: "Rampas Pneumáticas", img: rampaPneumatica }
        ]
      },
      elevadores: {
        categories: [
          { title: "Elevadores Eletromecãnicos", img: elevadorEletroMecanico },
          { title: "Elevadores Hidráulicos", img: elevadorPneumatico }
        ]
      }
    };
  }
  render() {
    return (
      <Row>
        <Col s={10} m={12} l={12}>
          <Col offset="s2 m2 l1" s={10} m={3} l={2} className="center-item">
            <img
              className="thumbnail "
              src={alinhadores}
              alt="kmc_3d_alinhadores"
            />
            <Col s={12} m={12} l={12}>
              <br />
              <Button large>Alinhadores</Button>
            </Col>
          </Col>
          <Col offset="s2 m2 l1" s={10} m={3} l={2} className="center-item">
            <img
              className="thumbnail "
              src={alinhadores}
              alt="kmc_3d_alinhadores"
            />
            <Col s={12} m={12} l={12}>
              <br />
              <Button large>Alinhadores</Button>
            </Col>
          </Col>{" "}
          <Col offset="s2 m2 l1" s={10} m={3} l={2} className="center-item">
            <img
              className="thumbnail "
              src={alinhadores}
              alt="kmc_3d_alinhadores"
            />
            <Col s={12} m={12} l={12}>
              <br />
              <Button large>Alinhadores</Button>
            </Col>
          </Col>{" "}
          <Col offset="s2 m2 l1" s={10} m={3} l={2} className="center-item">
            <img
              className="thumbnail "
              src={alinhadores}
              alt="kmc_3d_alinhadores"
            />
            <Col s={12} m={12} l={12}>
              <br />
              <Button large>Alinhadores</Button>
            </Col>
          </Col>{" "}
          <Col offset="s2 m2 l1" s={10} m={3} l={2} className="center-item">
            <img
              className="thumbnail "
              src={alinhadores}
              alt="kmc_3d_alinhadores"
            />
            <Col s={12} m={12} l={12}>
              <br />
              <Button large>Alinhadores</Button>
            </Col>
          </Col>{" "}
          <Col offset="s2 m2 l1" s={10} m={3} l={2} className="center-item">
            <img
              className="thumbnail "
              src={alinhadores}
              alt="kmc_3d_alinhadores"
            />
            <Col s={12} m={12} l={12}>
              <br />
              <Button large>Alinhadores</Button>
            </Col>
          </Col>{" "}
          <Col offset="s2 m2 l1" s={10} m={3} l={2} className="center-item">
            <img
              className="thumbnail "
              src={alinhadores}
              alt="kmc_3d_alinhadores"
            />
            <Col s={12} m={12} l={12}>
              <br />
              <Button large>Alinhadores</Button>
            </Col>
          </Col>{" "}
          <Col offset="s2 m2 l1" s={10} m={3} l={2} className="center-item">
            <img
              className="thumbnail "
              src={alinhadores}
              alt="kmc_3d_alinhadores"
            />
            <Col s={12} m={12} l={12}>
              <br />
              <Button large>Alinhadores</Button>
            </Col>
          </Col>
        </Col>
      </Row>
    );
  }
}
