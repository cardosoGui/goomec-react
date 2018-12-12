/* eslint-disable */
import React from "react";
import { Helmet } from "react-helmet";
import { Row, Col, Carousel, Button, Modal } from "react-materialize";
import { Link } from "react-router-dom";
import Typist from "react-typist";
import Slogan from "../utils/Slogan";
import SlideItem from "../utils/SlideItem";
import FormAd from "../utils/FormAd";
import ReactGA from "react-ga";

import logo from "../../img/Logo/logo.png";

import carSlogan from "../../img/Background/car-slogan.jpg";

// Css
import "../../css/HomePage.css";

// Produtos
import alinhadores from "../../img/Products/Alinhadores/01_kmc_3d_expert/kmc_3d_alinhador_expert_thumb.png";
import rampas from "../../img/Products/Rampas/01_kmc_rampas_10p/kmc_rampa_10p.jpg";
import baseAlinhamento from "../../img/Products/Base_Alinhamento/01_kmc_base_18p/kmc_base_view.jpg";
import elevadores from "../../img/Products/Elevadores/01_kmc_elev_r4500s/kmc_elevador_r4500s.jpg";
import balanceadoras from "../../img/Products/Balanceadoras/01_kmc_balanceadora_2070/kmc_balanceadora_2070.jpg";
import desmontadoras from "../../img/Products/Desmontadoras/01_kmc_desm_1500/kmc_1500.jpg";
import acessorios from "../../img/Products/Acessorios/01_kmc_acessorio/kmc_acessorio.jpg";
import linhaPesada from "../../img/Products/Linha_Pesada/01_kmc_3090_truck/kmc_3090_Truck.jpg";
import ProductsPageAnother from "./ProductsPageAnother";

class HomePage extends React.Component {
  state = {
    typing: true,
    title: "KMC"
  };

  handleClick() {
    ReactGA.outboundLink(
      {
        label: "Clicou em alinhadores"
      },
      function() {
        console.log("redirect here");
      }
    );
  }

  done = () => {
    this.setState({ typing: false }, () => {
      this.setState({ typing: true });
    });
  };
  render() {
    ReactGA.pageview("/home");
    return (
      <div className="section scrollspy">
        <Helmet>
          <title>
            GooMec | Alinhadores, Balanceadoras, Desmontadoras, Elevadores,
            Rampas
          </title>
          <meta
            name="description"
            content="Plataforma de conteúdo automotivo, especializada em divulgação produtos e ferramentas mecânicas para o centro automotivo"
          />
        </Helmet>
        <div className="center-align josefin-font">
          <span id="home" className="section scrollspy">
            <Col s={10} m={12} l={12}>
              <Slogan title={"GOOMEC"} image={carSlogan} />
            </Col>
            <Row>
              <Col className="sub-slogan" offset="s1 m2 l2" s={10} m={8} l={8}>
                <h2>SUA PLATAFORMA DE CONTEÚDO AUTOMOTIVO</h2>
                <span>
                  {/* onTypingDone={this.done} Para loop */}
                  {this.state.typing ? (
                    <div>
                      <Typist>
                        <span>SOLUÇÕES INTELIGENTES PARA SUA OFICINA</span>
                        <Typist.Backspace count={11} delay={3000} />
                        <Typist.Delay ms={3000} />
                        <br />
                        <span className="color-text-goomec">
                          O CENTRO AUTOMOTIVO
                        </span>
                        <Typist.Delay ms={3000} />
                        <br />
                        <span className="color-text-goomec">O MECÂNICO</span>
                        <Typist.Delay ms={3000} />
                        <br />
                        <span className="color-text-goomec">VOCÊ</span>
                      </Typist>
                    </div>
                  ) : (
                    ""
                  )}
                </span>
              </Col>
            </Row>
          </span>

          <Row>
            <Col s={12} m={12} l={12}>
              <Slogan
                title="Sobre a GOOMEC"
                image={
                  "https://firebasestorage.googleapis.com/v0/b/pwa-experiment-eb2bd.appspot.com/o/img%2FBackground%2Fcapa.jpg?alt=media&token=0aaa9fc2-483c-445f-9a16-395d6ce8d671"
                }
                content="Com mais de 30 anos de experiência no segmento automotivo, e a sua juventude com um mundo de tecnologia, queremos criar um universo de experiência atrelado a modernidade e praticidade. Nosso projeto surgiu, com a visão de ajudar o empresário do setor automotivo."
              />
            </Col>
          </Row>
          <Row>
            <Col offset="m1 l1" s={12} m={10} l={10}>
              <img
                style={{ borderRadius: "0.5em" }}
                className="materialboxed"
                src="https://firebasestorage.googleapis.com/v0/b/goomec-cdaf3.appspot.com/o/campanha%2FBF.jpg?alt=media&token=cc772d14-17dc-49eb-8839-8d0ee1d15d06"
                alt="Produtos goomec Black Friday"
                width="100%"
                data-caption="Alinhadores 3D em promoção imperdível, aproveite esta oportunidade"
              />
            </Col>
          </Row>

          <span id="produtos">
            <div className="divider" />
            <Row>
              <Col m={2}>Distribuidor Oficial:</Col>
              <Col m={8}>
                <br />
                <img alt="logo_kmc" src={logo} width="150px" />
              </Col>
              {/* <Col m={4}>Seja parceiro</Col> */}
            </Row>
            <div className="divider" />
            <Row>
              <Col offset="s1 m1 l2" s={10} m={9} l={8}>
                <div className="text-header">
                  <h4>Monte sua oficina</h4>
                </div>
                <div className="text-content">
                  <h5 className="center-align">
                    Tecnologia de ponta para o seu <br />
                    <span className="blue-text text-darken-2">
                      Centro Automotivo
                    </span>
                    100% nacional. <br />
                    Parcele sua compras com cartão BNDES
                  </h5>
                  <h5 className="center-align">
                    Otimize seu serviço, aumentando sua produtividade. <br />
                    Conheça a linha de produtos
                    <span className="blue-text text-darken-2">KMC</span>:
                  </h5>
                </div>
              </Col>
            </Row>
            <Row className="hide-on-med-and-up">
              <Col s={12} m={12}>
                <Carousel>
                  <div>
                    <SlideItem title="Alinhadores" thumbnail={alinhadores} />
                  </div>
                  <div>
                    <SlideItem title="Rampas" thumbnail={rampas} />
                  </div>
                  <div>
                    <SlideItem
                      title="Base de Alinhamento"
                      thumbnail={baseAlinhamento}
                    />
                  </div>
                  <div>
                    <SlideItem title="Elevadores" thumbnail={elevadores} />
                  </div>
                  <div>
                    <SlideItem
                      title="Balanceadoras"
                      thumbnail={balanceadoras}
                    />
                  </div>
                  <div>
                    <SlideItem
                      title="Desmontadoras de Pneus"
                      thumbnail={desmontadoras}
                    />
                  </div>
                  <div>
                    <SlideItem title="Acessórios" thumbnail={acessorios} />
                  </div>
                  <div>
                    <SlideItem title="Linha Pesada" thumbnail={linhaPesada} />
                  </div>
                </Carousel>

                <div className="hide-on-med-and-up">
                  <Button
                    className="blue"
                    onClick={() => {
                      this.handleClickProduct();
                    }}
                    node="a"
                    href="/produtos"
                    large
                  >
                    Produtos
                  </Button>
                </div>
              </Col>
            </Row>

            <Row>
              <Col offset="" s={12} m={12} l={12}>
                <div className="hide-on-small-only ">
                  <ProductsPageAnother />
                </div>
              </Col>
            </Row>
          </span>

          <Modal
            fixedFooter
            trigger={
              <Button className="fixed-button red pulse">Anuncie</Button>
            }
          >
            <br />
            <br />
            <br />
            <br />
            <h2 className="center-align text-anuncio">
              Quer saber como anunciar seu produto?
            </h2>
            <br />
            <br />
            <br />
            <FormAd />
          </Modal>
        </div>
      </div>
    );
  }
}

export default HomePage;
