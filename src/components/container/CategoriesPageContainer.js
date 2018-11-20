import React from "react";
import CategoriesPage from "../pages/CategoriesPage";

import ReactGA from "react-ga";
// Alinhadores
import kmc3D from "../../img/Cards/KMC-3D-EXPERT-1.png";
import kmcCCD from "../../img/Cards/KMC-CCD-4000-1.png";
import kmcFLEX from "../../img/Cards/KMC-FLEX-FULL-1.png";

// Rampas
import rampaHidraulica from "../../img/Cards/KMC-RAMPA-10P.png";
import rampaPneumatica from "../../img/Cards/KMC-RAMPA-20-HD.png";

// Elevadores
import elevadorEletroMecanico from "../../img/Cards/KMC-R4000-ER.png";
import elevadorPneumatico from "../../img/Cards/KMC-R3500TS.png";

// Linha Pesada
import kmcPesadaAlinhadores from "../../img/Cards/KMC-DEFINITY-FLEX-II-FULL-PESADA-CC.png";
import kmcPesadaBalanceadoras from "../../img/Cards/KMC-3090-TRUCK.png";
import kmcPesadaDesmontadoras from "../../img/Cards/KMC-3900T.png";

export default class CategoriesPageContainer extends React.Component {
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
          { title: "Elevadores Eletromecânicos", img: elevadorEletroMecanico },
          { title: "Elevadores Hidráulicos", img: elevadorPneumatico }
        ]
      },
      linhapesada: {
        categories: [
          { title: "Linha Pesada - Alinhadores", img: kmcPesadaAlinhadores },
          {
            title: "Linha Pesada - Balanceadoras",
            img: kmcPesadaBalanceadoras
          },
          { title: "Linha Pesada - Desmontadoras", img: kmcPesadaDesmontadoras }
        ]
      }
    };
  }
  // componentDidMount() {
  //   const { id } = this.props.match.params;
  //   console.log(id);
  // }

  render() {
    const { id } = this.props.match.params;

    ReactGA.pageview(`/categoria/${id}`);

    return (
      <div>
        {id === "alinhadores" ? (
          <CategoriesPage itensArray={this.state.alinhadores.categories} />
        ) : (
          ""
        )}
        {id === "rampas" ? (
          <CategoriesPage itensArray={this.state.rampas.categories} />
        ) : (
          ""
        )}
        {id === "elevadores" ? (
          <CategoriesPage itensArray={this.state.elevadores.categories} />
        ) : (
          ""
        )}
        {id === "linha-pesada" ? (
          <CategoriesPage itensArray={this.state.linhapesada.categories} />
        ) : (
          ""
        )}
      </div>
    );
  }
}
