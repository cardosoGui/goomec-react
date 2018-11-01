import React from "react";

import CategoryItem from "../pages/products/CategoryItem";

import img1 from "../../img/Cards/KMC-3D-EXPERT-1.png";
import img2 from "../../img/Cards/KMC-3D-EXPERT-1.png";
import img3 from "../../img/Cards/KMC-3D-EXPERT-1.png";
import CategoriesPage from "../pages/CategoriesPage";

export default class AllCategoryItem extends React.Component {
  constructor() {
    super();

    this.state = {
      alinhadores: {
        categories: [
          { title: "KMC3D", img: img1 },
          { title: "KMCCCD", img: img2 },
          { title: "KMCFLEX", img: img3 }
        ]
      }
    };
  }
  render() {
    return (
      <div>
        <h1>categoria</h1>
        <CategoriesPage itensArray={this.state.alinhadores.categories} />
      </div>
    );
  }
}
