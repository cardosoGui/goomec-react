import React from "react";
import {
  Row,
  Col,
  Button,
  Parallax,
  Icon,
  Collection,
  CollectionItem
} from "react-materialize";
import { Link } from "react-router-dom";

import "../../css/AboutPage.css";

import womanCar from "../../img/Background/action-automotive-car.jpg";
import classicCar from "../../img/Background/classic.jpg";
import horizonCar from "../../img/Background/horizon.jpg";

const AboutPage = () => (
  <div className="josefin-font">
    <Row>
      <Parallax alt="Mulher no comando Mecânica" imageSrc={womanCar} />

      <div className="section white center-align">
        <div className="row container">
          <h2 className="header">Nossa Missão</h2>

          <h4 className="grey-text text-darken-3 lighten-3 ">
            Proporcionar soluções no segmento automotivo com equipamentos e
            serviços de ultima geração.
          </h4>
        </div>
      </div>
    </Row>
    <Row>
      <Parallax imageSrc={classicCar} />
      <div className="section white center-align">
        <div className="row container">
          <h2 className="header">Nosso Valor</h2>
          <h4 className="grey-text text-darken-3 lighten-3">
            Trabalhar visando a correção e transparência com todos os seus
            colaboradores e clientes.
          </h4>
        </div>
      </div>
    </Row>
    <Row>
      <Parallax imageSrc={horizonCar} />
      <div className="section white center-align">
        <div className="row container">
          <h2 className="header">Nosso Compromisso</h2>
          <h4 className="grey-text text-darken-3 lighten-3">
            Tornar a GooMec a maior prataforma no segmento automotivo do Brasil.
          </h4>
        </div>
      </div>
    </Row>

    {/* <Row>
      <Col className="offset-s1 offset-m1" s={10} m={6}>
        <div className="text-header">
          <h4>Motivações</h4>
        </div>
        <div className="text-content">
          <p className="flow-text">
            Olá, quero contribuir com meu conhecimento mecânica, e todas dicas
            deste site serão baseados nos meus 30 anos de experiência com
            <span span className="blue-text text-darken-2">
              {" "}
              Oficina Mecânica.{" "}
            </span>
          </p>
          <p className="flow-text">
            Tudo que escrevo será de fácil compreensão e espero que sirva para
            você
            <span span className="blue-text text-darken-2">
              {" "}
              Empreśario e Mecânico{" "}
            </span>
            <br />
            Na sessão de dicas vamos abordar os seguintes assuntos:
            <Collection>
              <CollectionItem href="#">Trabalho em Equipe</CollectionItem>
              <CollectionItem href="#">Atendimento</CollectionItem>
              <CollectionItem href="#">Gestão de Pessoas</CollectionItem>
              <CollectionItem href="#">Vendas</CollectionItem>
              <CollectionItem href="#">Orçamento</CollectionItem>
            </Collection>
          </p>
        </div>
      </Col>
      <Col offset="s2 m1" s={10} m={4}>
        <div alt="GooMec Nossa historia" className="image-home" />
      </Col>
      <Col offset="s2 m3" s={8} m={7}>
        <Link to="/produtos">
          <Button
            large
            waves="light"
            className="blue"
            node="a"
            href="/dicas-e-artigos"
          >
            <Icon left large>
              directions_car
            </Icon>
            saiba mais dicas
          </Button>
        </Link>
      </Col>
    </Row> */}
  </div>
);

export default AboutPage;
