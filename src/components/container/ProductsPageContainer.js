/* eslint-disable*/
import React from "react";
import { Col, Row, Button, Input, Preloader, Icon } from "react-materialize";
import ProductItem from "../pages/products/ProductItem";

import kmcExpert from "../../img/Cards/KMC-3D-EXPERT-1.png";
import kmcEfficient from "../../img/Cards/KMC-3D-EFFICIENT-1.png";
import kmcCompact from "../../img/Cards/KMC-3D-COMPACT-1.png";

import kmc8000 from "../../img/Cards/KMC-CCD-8000-1.png";
import kmc6000 from "../../img/Cards/KMC-CCD-6000-1.png";
import kmc4000 from "../../img/Cards/KMC-CCD-4000-1.png";

import kmcFlexFull from "../../img/Cards/KMC-FLEX-FULL-1.png";
import kmcFlexStd from "../../img/Cards/KMC-FLEX-STD-1.png";

export default class ProductsPageContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      kmc3d: [
        {
          title: "KMC 3D EXPERT",
          img: kmcExpert,
          content:
            "Toda a tecnologia dos alinhadores 3D KMC pelo melhor preço! O alinhador KMC 3D Compact é ideal para instalação em locais com pouco espaço como valetas."
        },
        {
          title: "KMC 3D EFFICIENT",
          img: kmcEfficient,
          content:
            "Desenvolvido no Brasil, com tecnologia e mão de obra 100% nacionais, o alinhador KMC 3D Efficient é o modelo ideal para você que precisa de uma máquina completa e com excelente custo benefício."
        },
        {
          title: "KMC 3D COMPACT",
          img: kmcCompact,
          content:
            "Toda a tecnologia dos alinhadores 3D KMC pelo melhor preço! O alinhador KMC 3D Compact é ideal para instalação em locais com pouco espaço como valetas."
        }
      ],
      kmcccd: [
        {
          title: "KMC CCD 8000 WIRELESS",
          img: kmc8000,
          content:
            "8 sensores CCD iRed de alta resolução, 4 Cabeças de medição, tecnologia WLAN 2.4 GHz, Função ZOOM, Checklist, ajuste com rodas elevadas e informática completa fazem do KMC 8000 WIRELESS o melhor alinhador computadorizado do mercado."
        },
        {
          title: "KMC CCD 6000 WIRELESS",
          img: kmc6000,
          content:
            "Leitura de todos os parâmetros em tempo real, comunicação simultânea entre os sensores tornando a operação muito mais rápida e intuitiva.6 sensores CCD iRed de alta resolução, 4 cabeças de medição, tecnologia WLAN 2.4 GHz, Função ZOOM, Checklist, ajuste com rodas elevadas e informática completa. KMC 6000, o melhor custo x benefício do mercado em alinhadores computadorizados."
        },
        {
          title: "KMC CCD 4000 WIRELESS",
          img: kmc4000,
          content:
            "4 sensores CCD iRed de alta resolução, 2 cabeças de medição, Função ZOOM, Checklist, ajuste com rodas elevadas e informática completa. Permite UPGRADE para as linhas KMC 6000 e KMC 8000"
        }
      ],
      kmcflex: [
        {
          title: "KMC DEFINITY FLEX II FULL",
          img: kmcFlexFull,
          content:
            "O primeiro e único alinhador FLEX do Brasil, equipamento de alinhamento híbrido (computadorizado e digital) para a medição de ambos os eixos (dianteiro e traseiro). Facilidade de uso com ou sem computador."
        },
        {
          title: "KMC DEFINITY FLEX II STD",
          img: kmcFlexStd,
          content:
            "O primeiro e único alinhador FLEX do Brasil, equipamento de alinhamento híbrido (computadorizado e digital) para a medição de ambos os eixos (dianteiro e traseiro). Facilidade de uso com ou sem computador."
        },
        {
          title: "KMC 18P FLEX",
          img: kmcFlexStd,
          content:
            "Com o 18P FLEX, você pode alinhar veículos diretamente em um elevador automotivo. Solução ideal para oficinas mecânicas, com fácil manuseio otimiza espaço e processo de alinhamento."
        }
      ]
    };
  }

  render() {
    const { id } = this.props.match.params;
    return (
      <div>
        <Row>
          <Col offset="" s={12} m={12} l={12}>
            <h1>{id}</h1>
            {id === "KMC 3D" ? <ProductItem itens={this.state.kmc3d} /> : ""}
            {id === "KMC CCD" ? <ProductItem itens={this.state.kmcccd} /> : ""}
            {id === "KMC FLEX" ? (
              <ProductItem itens={this.state.kmcflex} />
            ) : (
              ""
            )}
          </Col>
        </Row>
      </div>
    );
  }
}
