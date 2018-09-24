/* eslint-disable */
import React from "react";
import { Helmet } from "react-helmet";
import {
  Row,
  Col,
  Carousel,
  Button,
  Modal,
  Collection,
  CollectionItem
} from "react-materialize";
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
import qualidade from "../../img/Logo/selo_qualidade.png";

class HomePage extends React.Component {
  state = {
    typing: true,
    title: "KMC",

    itemImage: qualidade
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
      <div>
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
          <Col s={10} m={12} l={12}>
            <Slogan title={"GOOMEC"} image={carSlogan} />
          </Col>
          <Row>
            <Col className="sub-slogan" s={12} m={12} l={12}>
              <h2>
                SUA PLATAFORMA DE CONTEÚDO AUTOMOTIVO
                <br />
              </h2>
              <div>
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
              </div>
            </Col>
          </Row>
          <Slogan
            title="Sobre a GooMec"
            image={
              "https://firebasestorage.googleapis.com/v0/b/pwa-experiment-eb2bd.appspot.com/o/img%2FBackground%2Fcapa.jpg?alt=media&token=0aaa9fc2-483c-445f-9a16-395d6ce8d671"
            }
            content="Com mais de 30 anos de experiência no segmento automotivo, e a sua juventude com um mundo de tecnologia, queremos criar um universo de experiência atrelado a modernidade e praticidade. Nosso projeto surgiu, com a visão de ajudar o empresário do setor automotivo."
          />
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
                  <span span className="blue-text text-darken-2">
                    {" "}
                    Centro Automotivo{" "}
                  </span>
                  100% nacional. <br />
                  Parcele sua compras com cartão BNDES
                </h5>
                <h5 className="center-align">
                  Otimize seu serviço, aumentando sua produtividade. <br />
                  Conheça a linha de produtos{" "}
                  <span span className="blue-text text-darken-2">
                    KMC
                  </span>
                  :
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
                  <SlideItem title="Balanceadoras" thumbnail={balanceadoras} />
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

              <Button
                className="blue hide-on-med-and-down"
                onClick={() => {
                  this.handleClickProduct();
                }}
                node="a"
                href="/produtos"
                large
              >
                Produtos
              </Button>
              <div className="hide-on-med-and-up">
                <Link to="/produtos">
                  <Button
                    className="blue "
                    onClick={() => {
                      this.handleClickProduct();
                    }}
                    large
                  >
                    Produtos
                  </Button>
                </Link>
              </div>
            </Col>
          </Row>
          <div className="divider" />

          {/* <Row>
                    <Col className="center-align offset-s2 offset-m4" s={8} m={4}>
                        <h3>Conteúdo</h3>
                    </Col>
                    <Col offset="m2" s={12} m={8}>
                        <Slider>
                            <Slide
                                src={
                                    "https://firebasestorage.googleapis.com/v0/b/pwa-experiment-eb2bd.appspot.com/o/img%2FBackground%2Fdicas-slide.jpg?alt=media&token=40abb425-a29d-49a1-bcc1-5643f9eff7f3"
                                }
                                title="DICAS"
                            >
                                <div className="text-shadown">
                                    <p>
                                        Quer anunciar sua empresa, e aumentar o número de clientes?
                  </p>
                                </div>
                                <Link to="/produtos">
                                    <Button className="blue" large>
                                        Saiba mais
                  </Button>
                                </Link>
                            </Slide>
                            <Slide
                                src={
                                    "https://firebasestorage.googleapis.com/v0/b/pwa-experiment-eb2bd.appspot.com/o/img%2FBackground%2Fdicas-slide.jpg?alt=media&token=40abb425-a29d-49a1-bcc1-5643f9eff7f3"
                                }
                                title="DICAS"
                            >
                                <div className="text-shadown">
                                    <p>Dicas texto</p>
                                </div>
                                <Link to="/nossa-historia">
                                    <Button
                                        className="blue"
                                        large
                                        node="a"
                                        href="/dicas-e-artigos"
                                    >
                                        Saiba mais
                  </Button>
                                </Link>
                            </Slide>
                        </Slider>
                    </Col>
                </Row> */}

          <Row>
            <Col offset="s1 m1 l1" s={10} m={10} l={10}>
              <div>
                <br />
                <div className="hide-on-small-only">
                  <Col s={5} m={6} l={5} className="products-list">
                    <h4>
                      <Collection>
                        <Link to="/">
                          <CollectionItem
                            className="item"
                            onClick={() => {
                              this.handleClick();
                              this.setState({
                                title: "KMC 3D EXPERT",
                                itemImage: alinhadores
                              });
                            }}
                          >
                            Alinhadores
                          </CollectionItem>
                        </Link>
                        <Link to="/">
                          <CollectionItem
                            className="item"
                            onClick={() => {
                              this.handleClick();
                              this.setState({
                                title: "KMC HD",
                                itemImage: rampas
                              });
                            }}
                          >
                            Rampas
                          </CollectionItem>
                        </Link>
                        <Link to="/">
                          <CollectionItem
                            className="item"
                            onClick={() => {
                              this.handleClick();
                              this.setState({
                                title: "KMC 18p",
                                itemImage: baseAlinhamento
                              });
                            }}
                          >
                            Base de Alinhamento
                          </CollectionItem>
                        </Link>
                        <Link to="/">
                          <CollectionItem
                            className="item"
                            onClick={() => {
                              this.handleClick();
                              this.setState({
                                title: "KMC R 4500S",
                                itemImage: elevadores
                              });
                            }}
                          >
                            Elevadores
                          </CollectionItem>
                        </Link>
                        <Link to="/">
                          <CollectionItem
                            className="item"
                            onClick={() => {
                              this.handleClick();
                              this.setState({
                                title: "KMC 1800R",
                                itemImage: balanceadoras
                              });
                            }}
                          >
                            Balanceadoras
                          </CollectionItem>
                        </Link>
                        <Link to="/">
                          <CollectionItem
                            className="item"
                            onClick={() => {
                              this.handleClick();
                              this.setState({
                                title: "KMC 906R",
                                itemImage: desmontadoras
                              });
                            }}
                          >
                            Desmontadoras
                          </CollectionItem>
                        </Link>
                        <Link to="/">
                          <CollectionItem
                            className="item"
                            onClick={() => {
                              this.handleClick();
                              this.setState({
                                title: "CONJUNTO PARA VALETA",
                                itemImage: acessorios
                              });
                            }}
                          >
                            Acessórios
                          </CollectionItem>
                        </Link>
                        <Link to="/">
                          <CollectionItem
                            className="item"
                            onClick={() => {
                              this.setState({
                                title: "KMC 3090 TRUCK",
                                itemImage: linhaPesada
                              });
                              this.handleClick();
                            }}
                          >
                            Linha Pesada
                          </CollectionItem>
                        </Link>
                      </Collection>
                    </h4>
                  </Col>
                  <Col offset="s1 m1 l2" s={10} m={5} l={5}>
                    <a
                      onClick={() => {
                        this.handleClick();
                      }}
                      href="/produtos"
                    >
                      <div className="hoverable">
                        <SlideItem
                          title={this.state.title}
                          thumbnail={this.state.itemImage}
                        />
                      </div>
                    </a>
                  </Col>
                  {/* <Col className="hide-on-large-only" s={10} m={5} l={5}>
                    <div>
                      <a href="/produtos">
                        <h5 className="text-justify">
                          <i>
                            Otimize sua produtividade adquirindo a ferramenta
                            perfeita. Conheça a linha de produtos KMC
                          </i>
                        </h5>
                      </a>
                    </div>
                  </Col> */}
                </div>
              </div>
            </Col>
            {/* <Col
              className="hide-on-med-and-down"
              offset="l3"
              s={10}
              m={6}
              l={6}
            >
              <div>
                <a href="/produtos">
                  <h5 className="text-justify">
                    <i>
                      Otimize sua produtividade adquirindo a ferramenta
                      perfeita. Conheça a linha de produtos KMC
                    </i>
                  </h5>
                </a>
              </div>
            </Col> */}
          </Row>

          <Modal
            fixedFooter
            trigger={
              <Button className="fixed-button red pulse" waves fixed>
                Anuncie
              </Button>
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
