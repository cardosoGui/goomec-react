/* eslint-disable*/
import React from "react";
import { Col } from "react-materialize";
import CardItem from "../../utils/CardItem";

import PropTypes from "prop-types";

export default class ProductItem extends React.Component {
  render() {
    return (
      <div>
        {Object.keys(this.props.itens).map((item, i) => (
          <Col key={i} offset="s1 " s={10} m={4} l={3}>
            <CardItem
              image={this.props.itens[item].img}
              title={this.props.itens[item].title}
              content={this.props.itens[item].content}
              modal={this.props.itens[item].modal}
            />
          </Col>
        ))}
      </div>
    );
  }
}

ProductItem.propTypes = {
  itens: PropTypes.array
};
