/* eslint-disable*/
import React from "react";
import { Col, Row, Button, Input, Preloader, Icon } from "react-materialize";
import CardItem from "../../utils/CardItem";

import PropTypes from "prop-types";

export default class ProductItem extends React.Component {
  render() {
    return (
      <div>
        {Object.keys(this.props.itens).map((item, i) => (
          <Col key={i} offset="" s={10} m={3} l={3}>
            <CardItem
              image={this.props.itens[item].img}
              title={this.props.itens[item].title}
              content={this.props.itens[item].content}
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
