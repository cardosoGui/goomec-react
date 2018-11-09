import React from "react";
import CategoriesPage from "../pages/CategoriesPage";
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
      }
    };
  }
  // componentDidMount() {
  //   const { id } = this.props.match.params;
  //   console.log(id);
  // }

  handleCategories() {
    const { id } = this.props.match.params;
    if (id === "alinhadores") {
      this.setState({
        alinhadores: {
          categories: [
            { title: "KMC 3D", img: kmc3D },
            { title: "KMC CCD", img: kmcCCD },
            { title: "KMC FLEX", img: kmcFLEX }
          ]
        }
      });
    }
  }
  render() {
    const { id } = this.props.match.params;
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
          <CategoriesPage itensArray={this.state.rampas.categories} />
        ) : (
          ""
        )}
      </div>
    );
  }
}
