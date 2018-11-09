import React from "react";
import { Col, Row, Button, Input, Preloader, Icon } from "react-materialize";
import ProductItem from "../pages/products/ProductItem";

import img1 from "../../img/Cards/KMC-3D-EXPERT-1.png";
import img2 from "../../img/Cards/KMC-3D-EXPERT-1.png";
import img3 from "../../img/Cards/KMC-3D-EXPERT-1.png";

export default class AllProductsContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      categories: [
        { title: "KMC3D", img: img1 },
        { title: "KMCCCD", img: img2 },
        { title: "KMCFLEX", img: img3 }
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
            <Row>
              {Object.keys(this.state.categories).map((item, i) => {
                return (
                  <span key={i}>
                    <ProductItem
                      img={this.state.categories[item].img}
                      title={this.state.categories[item].title}
                    />
                  </span>
                );
              })}
              {/* <ProductItem img={alinhadorCard} /> */}
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}
