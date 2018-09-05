import React from "react";
import { Row, Col, Tabs, Tab, Modal, Button } from "react-materialize";
import Slogan from "../utils/Slogan";

import "../../css/ProductsPage.css";

// Images
import carClassic from "../../img/Background/car-classic.jpg";

import alinhadores from "../../img/Products/Alinhadores/01_kmc_3d_expert/kmc_3d_alinhador_expert_thumb.png";
import rampas from "../../img/Products/Rampas/01_kmc_rampas_10p/kmc_rampa_10p.jpg";
import baseAlinhamento from "../../img/Products/Base_Alinhamento/01_kmc_base_18p/kmc_base_view.jpg";
import elevadores from "../../img/Products/Elevadores/01_kmc_elev_r4500s/kmc_elevador_r4500s.jpg";
import balanceadoras from "../../img/Products/Balanceadoras/01_kmc_balanceadora_2070/kmc_balanceadora_2070.jpg";
import desmontadoras from "../../img/Products/Desmontadoras/01_kmc_desm_1500/kmc_1500.jpg";
import acessorios from "../../img/Products/Acessorios/01_kmc_acessorio/kmc_acessorio.jpg";
import linhaPesada from "../../img/Products/Linha_Pesada/01_kmc_3090_truck/kmc_3090_Truck.jpg";

const ProductsPage = () => (
  <div className="center-align josefin-font">
    <Col s={10} m={12}>
      <Slogan title={"GOOMEC"} image={carClassic} />
    </Col>
    <div style={{ width: "80%", marginLeft: "10%" }}>
      <Row>
        <Col className="center-align" offset="s2 m4" s={8} m={4}>
          <h3>Produtos:</h3>
        </Col>
      </Row>
      <Row>
        <Col className="categories-content" s={12} m={3}>
          <div className="row">
            <img
              className="categories-img thumbnail"
              src={alinhadores}
              alt="kmc_3d_alinhadores"
            />
          </div>
          <Modal
            header="Alinhadores"
            fixedFooter
            trigger={
              <Button
                style={{ marginBottom: "1em" }}
                className="blue"
                waves="light"
              >
                Alinhadores
              </Button>
            }
          >
            <Tabs className="tab-demo z-depth-1">
              <Tab title="KMC 3D EXPERT" active>
                <Col s={12}>
                  <div className="row">
                    <p>
                      Apresentamos as melhores máquinas para geometria
                      automotiva do mercado, somos a KMC do Brasil. Nossa
                      empresa é formada por profissionais com mais de 40 anos de
                      experiência e desenvolvemos soluções para oficinas,
                      concessionárias e autocenters.
                    </p>
                  </div>
                  <Col s={12} m={12} l={12}>
                    <div
                      alt="KMC 3D EXPERT"
                      className="products kmc-3d-expert-view no-repeat-background materialboxed"
                    />
                  </Col>
                </Col>
              </Tab>
              <Tab title="KMC 3D EFFICIENT">
                <Col s={12}>
                  <div className="row">
                    <p>
                      Apresentamos as melhores máquinas para geometria
                      automotiva do mercado, somos a KMC do Brasil. Nossa
                      empresa é formada por profissionais com mais de 40 anos de
                      experiência e desenvolvemos soluções para oficinas,
                      concessionárias e autocenters.
                    </p>
                  </div>
                  <Col s={12} m={12} l={12}>
                    <div
                      alt="KMC 3D EFFICIENT"
                      className="products kmc-3d-efficient-view no-repeat-background materialboxed"
                    />
                  </Col>
                </Col>
              </Tab>
              <Tab title="KMC 3D COMPACT">
                <Col s={12}>
                  <div className="row">
                    <p>
                      Apresentamos as melhores máquinas para geometria
                      automotiva do mercado, somos a KMC do Brasil. Nossa
                      empresa é formada por profissionais com mais de 40 anos de
                      experiência e desenvolvemos soluções para oficinas,
                      concessionárias e autocenters.
                    </p>
                  </div>
                  <Col s={12} m={12} l={12}>
                    <div
                      alt="KMC 3D COMPACT"
                      className="products kmc-3d-compact-view no-repeat-background materialboxed"
                    />
                  </Col>
                </Col>
              </Tab>
            </Tabs>
          </Modal>
        </Col>
        <Col className="categories-content" s={12} m={3}>
          <div className="row">
            <img className="categories-img thumbnail" alt="" src={rampas} />
          </div>
          <Modal
            header="Rampas"
            fixedFooter
            trigger={
              <Button
                style={{ marginBottom: "1em" }}
                className="blue"
                waves="light"
              >
                Rampas
              </Button>
            }
          >
            <Tabs className="tab-demo z-depth-1">
              <Tab title="KMC 10p" active>
                <Col s={12}>
                  <div className="row">
                    <h5>RAMPA PNEUMÁTICA 1,10 MT (ALTURA)</h5>
                    <p>
                      Atende à todos os veículos de passeio, caminhonetes, SUVs
                      e vans (inclusive alongadas)
                    </p>
                  </div>
                  <Col s={12} m={12} l={12}>
                    <div
                      alt="KMC 10p"
                      className="products kmc-10p-view no-repeat-background materialboxed"
                    />
                  </Col>
                </Col>
              </Tab>
              <Tab title="KMC 13p">
                <Col s={12}>
                  <div className="row">
                    <h5>RAMPA PNEUMÁTICA 1,10 MT (ALTURA)</h5>
                    <p>
                      Atende à todos os veículos de passeio, caminhonetes, SUVs
                      e vans (inclusive alongadas)
                    </p>
                  </div>
                  <Col s={12} m={12} l={12}>
                    <div
                      alt="KMC 13p"
                      className="products kmc-13p-view no-repeat-background materialboxed"
                    />
                  </Col>
                </Col>
              </Tab>
            </Tabs>
          </Modal>
        </Col>
        <Col className="categories-content" s={12} m={3}>
          <div className="row">
            <img
              className="categories-img thumbnail"
              alt="Base de alinhamento"
              src={baseAlinhamento}
            />
          </div>
          <Modal
            header="Base de Alinhamento"
            fixedFooter
            trigger={
              <Button
                style={{ marginBottom: "1em" }}
                className="blue"
                waves="light"
              >
                Base de alinhamento
              </Button>
            }
          >
            <Tabs className="tab-demo z-depth-1">
              <Tab title="KMC 18p" active>
                <Col s={12}>
                  <div className="row">
                    <h5>BASE DE ALINHAMENTO PARA UTILIZAÇÃO COM ELEVADOR</h5>
                    <p>
                      Pratico e maleável ocupa pouco espaço possibilitando o
                      serviço de alinhamento automotivo em locais que não
                      possibilitam a instalação de rampa pneumática,
                      transformando o box de elevador em um box de alinhamento.
                      Solução ideal para Oficinas Mecânica, com fácil manuseio
                      otimiza espaço e processo de alinhamento.
                    </p>
                  </div>
                  <Col s={12} m={12} l={12}>
                    <div
                      alt="KMC 18p"
                      className="products kmc-18p-view no-repeat-background materialboxed"
                    />
                  </Col>
                </Col>
              </Tab>
            </Tabs>
          </Modal>
        </Col>
        <Col className="categories-content" s={12} m={3}>
          <div className="row">
            <img
              className="categories-img thumbnail"
              alt="Elevadores automotivos"
              src={elevadores}
            />
          </div>
          <Modal
            header="Elevadores"
            fixedFooter
            trigger={
              <Button
                style={{ marginBottom: "1em" }}
                className="blue"
                waves="light"
              >
                Elevadores
              </Button>
            }
          >
            <Tabs className="tab-demo z-depth-1">
              <Tab title="KMC R 4500S" active>
                <Col s={12}>
                  <div className="row">
                    <h5>ELEVADOR DE COLUNA HIDRÁULICO</h5>
                    <p>
                      Solução ideal para Oficinas Mecânica, com fácil manuseio
                      otimiza espaço e processo de alinhamento.
                    </p>
                  </div>
                  <Col s={12} m={12} l={12}>
                    <div
                      alt="KMC R 4500S"
                      className="products kmc-r-4000s-view no-repeat-background materialboxed"
                    />
                  </Col>
                </Col>
              </Tab>
              <Tab title="KMC R 4000">
                <Col s={12}>
                  <div className="row">
                    <h5>ELEVADOR DE COLUNA HIDRÁULICO</h5>
                    <p>
                      Solução ideal para Oficinas Mecânica, com fácil manuseio
                      otimiza espaço e processo de alinhamento.
                    </p>
                  </div>
                  <Col s={12} m={12} l={12}>
                    <div
                      alt="KMC R 4000"
                      className="products kmc-r-4000-view no-repeat-background materialboxed"
                    />
                  </Col>
                </Col>
              </Tab>
            </Tabs>
          </Modal>
        </Col>
      </Row>

      <Row>
        <Col className="categories-content" s={12} m={3}>
          <div className="row">
            <img
              className="categories-img thumbnail"
              alt="Balanceadoras automotivas"
              src={balanceadoras}
            />
          </div>
          <Modal
            header="Balanceadoras"
            fixedFooter
            trigger={
              <Button
                style={{ marginBottom: "1em" }}
                className="blue"
                waves="light"
              >
                Balanceadoras
              </Button>
            }
          >
            <Tabs className="tab-demo z-depth-1">
              <Tab title="KMC 9000 R" active>
                <Col s={12}>
                  <div className="row">
                    <h5>BALANCEADORA MOTORIZADA</h5>
                    <p>
                      Solução ideal para Oficinas Mecânica, com fácil manuseio
                      otimiza espaço e processo de alinhamento.
                    </p>
                  </div>
                  <Col s={12} m={12} l={12}>
                    <div
                      alt="KMC 9000 R"
                      className="products kmc-9000-r-view no-repeat-background materialboxed"
                    />
                  </Col>
                </Col>
              </Tab>
              <Tab title="KMC 3000 R">
                <Col s={12}>
                  <div className="row">
                    <h5>BALANCEADORA MOTORIZADA</h5>
                    <p>
                      Solução ideal para Oficinas Mecânica, com fácil manuseio
                      otimiza espaço e processo de alinhamento.
                    </p>
                  </div>
                  <Col s={12} m={12} l={12}>
                    <div
                      alt="KMC 3000 R"
                      className="products kmc-3000-r-view no-repeat-background materialboxed"
                    />
                  </Col>
                </Col>
              </Tab>
              <Tab title="KMC 2100 R">
                <Col s={12}>
                  <div className="row">
                    <h5>BALANCEADORA MOTORIZADA</h5>
                    <p>
                      Solução ideal para Oficinas Mecânica, com fácil manuseio
                      otimiza espaço e processo de alinhamento.
                    </p>
                  </div>
                  <Col s={12} m={12} l={12}>
                    <div
                      alt="KMC 2100 R"
                      className="products kmc-2100-r-view no-repeat-background materialboxed"
                    />
                  </Col>
                </Col>
              </Tab>
              <Tab title="KMC 1800 R">
                <Col s={12}>
                  <div className="row">
                    <h5>BALANCEADORA MOTORIZADA</h5>
                    <p>
                      Solução ideal para Oficinas Mecânica, com fácil manuseio
                      otimiza espaço e processo de alinhamento.
                    </p>
                  </div>
                  <Col s={12} m={12} l={12}>
                    <div
                      alt="KMC 1800 R"
                      className="products kmc-1800-r-view no-repeat-background materialboxed"
                    />
                  </Col>
                </Col>
              </Tab>
            </Tabs>
          </Modal>
        </Col>
        <Col className="categories-content" s={12} m={3}>
          <div className="row">
            <img
              className="categories-img thumbnail"
              alt="desmontadora automotiva"
              src={desmontadoras}
            />
          </div>
          <Modal
            header="Desmontadoras"
            fixedFooter
            trigger={
              <Button
                style={{ marginBottom: "1em" }}
                className="blue"
                waves="light"
              >
                Desmontadoras
              </Button>
            }
          >
            <Tabs className="tab-demo z-depth-1">
              <Tab title="KMC R 1500" active>
                <Col s={12}>
                  <div className="row">
                    <h5>DESMONTADORA</h5>
                    <p>
                      Solução ideal para Oficinas Mecânica, com fácil manuseio
                      otimiza espaço e processo de alinhamento.
                    </p>
                  </div>
                  <Col s={12} m={12} l={12}>
                    <div
                      alt="KMC R 1500"
                      className="products kmc-r-1500-view no-repeat-background materialboxed"
                    />
                  </Col>
                </Col>
              </Tab>
            </Tabs>
          </Modal>
        </Col>
        <Col className="categories-content" s={12} m={3}>
          <div className="row">
            <img
              className="categories-img thumbnail"
              alt="acessorios automotivos kmc"
              src={acessorios}
            />
          </div>
          <Modal
            header="Acessórios"
            fixedFooter
            trigger={
              <Button
                style={{ marginBottom: "1em" }}
                className="blue"
                waves="light"
              >
                Acessórios
              </Button>
            }
          >
            <Tabs className="tab-demo z-depth-1">
              <Tab title="CONJUNTO PARA VALETA" active>
                <Col s={12}>
                  <div className="row">
                    <h5>ACESSÓRIOS</h5>
                    <p>
                      Solução ideal para Oficinas Mecânica, com fácil manuseio
                      otimiza espaço e processo de alinhamento.
                    </p>
                  </div>
                  <Col s={12} m={12} l={12}>
                    <div
                      alt="CONJUNTO PARA VALETA"
                      className="products kmc-acessorio-view no-repeat-background materialboxed"
                    />
                  </Col>
                </Col>
              </Tab>
            </Tabs>
          </Modal>
        </Col>
        <Col className="categories-content" s={12} m={3}>
          <div className="row">
            <img
              className="categories-img thumbnail"
              alt="linha pesada automotiva"
              src={linhaPesada}
            />
          </div>
          <Modal
            header="Linha Pesada"
            fixedFooter
            trigger={
              <Button
                style={{ marginBottom: "1em" }}
                className="blue"
                waves="light"
              >
                Linha pesada
              </Button>
            }
          >
            <Tabs className="tab-demo z-depth-1">
              <Tab title="KMC 3090 TRUCK" active>
                <Col s={12}>
                  <div className="row">
                    <h5>BALANCEADORA MOTORIZADA</h5>
                    <p>
                      Solução ideal para Oficinas Mecânica, com fácil manuseio
                      otimiza espaço e processo de alinhamento.
                    </p>
                  </div>
                  <Col s={12} m={12} l={12}>
                    <div
                      alt="KMC 3090 TRUCK"
                      className="products kmc-3090-truck-view  no-repeat-background materialboxed"
                    />
                  </Col>
                </Col>
              </Tab>
            </Tabs>
          </Modal>
        </Col>
      </Row>
    </div>
  </div>
);

export default ProductsPage;
