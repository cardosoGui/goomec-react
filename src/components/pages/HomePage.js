import React from "react";
import { Row, Col, Carousel, Button, Slider, Slide } from "react-materialize";
import { Link } from "react-router-dom";
import Typist from "react-typist";
import Slogan from "../utils/Slogan";
import SlideItem from "../utils/SlideItem";

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

class HomePage extends React.Component {
  state = {
    typing: true
  };

  done = () => {
    this.setState({ typing: false }, () => {
      this.setState({ typing: true });
    });
  };
  render() {
    return (
      <div className="center-align josefin-font">
        <Col s={10} m={12} l={12}>
          <Slogan
            title={"GOOMEC"}
            image={
              "https://firebasestorage.googleapis.com/v0/b/pwa-experiment-eb2bd.appspot.com/o/img%2FBackground%2Fadult-auto.jpg?alt=media&token=c09296b2-f971-4468-9d23-cc3ceea9dc19"
            }
          />
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
          content="Com mais de 30 anos de experiência no segmento automotivo, e a sua juventude com um mundo de tecnologia, queremos criar um universo de experiência atrelado a modernidade e praticidade. Nosso projeto surgiu, com a visão de ajudar o Empresário de Oficina Mecânica."
        />
        <div className="divider" />
        <Row>
          <Col m={2}>Parceiros</Col>
          <Col m={4}>Kmc</Col>
          <Col m={4}>Seja parceiro</Col>
        </Row>
        <div className="divider" />
        <Row>
          <Col className="center-align" offset=" m4" s={12} m={4}>
            <h3>Monte sua oficina:</h3>
            <Link to="/produtos">
              <Button className="blue" large>
                Produtos
              </Button>
            </Link>
          </Col>
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
                <SlideItem title="Desmontadoras" thumbnail={desmontadoras} />
              </div>
              <div>
                <SlideItem title="Acessórios" thumbnail={acessorios} />
              </div>
              <div>
                <SlideItem title="Linha Pesada" thumbnail={linhaPesada} />
              </div>
            </Carousel>
          </Col>
        </Row>
        <div className="divider" />
        <Row>
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
                <Link to="/dicas-e-artigos">
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
        </Row>
      </div>
    );
  }
}

export default HomePage;
