import React from "react";
import PropTypes from "prop-types";
import CategoryItem from "../pages/products/CategoryItem";

import img1 from "../../img/Cards/KMC-3D-EXPERT-1.png";
import img2 from "../../img/Cards/KMC-3D-EXPERT-1.png";
import img3 from "../../img/Cards/KMC-3D-EXPERT-1.png";

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
        {Object.keys(this.state.alinhadores.categories).map((item, i) => {
          return (
            <span key={i}>
              <CategoryItem
                img={this.state.categories[item].img}
                title={this.state.categories[item].title}
              />
            </span>
          );
        })}
      </div>
    );
  }
}

AllCategoryItem.PropTypes = {
  type: PropTypes.string
};
