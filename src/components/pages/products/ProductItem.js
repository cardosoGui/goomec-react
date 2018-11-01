import React from "react";
import { Col, Row, Button, Input, Preloader, Icon } from "react-materialize";
import CardItem from "../../utils/CardItem";

import PropTypes from "prop-types";

export default class ProductItem extends React.Component {
  render() {
    return (
      <div>
        <Col offset="" s={10} m={3} l={3}>
          <CardItem image={this.props.img} title={this.props.title} />
        </Col>
      </div>
    );
  }
}

ProductItem.propTypes = {
  title: PropTypes.any,
  img: PropTypes.any
};
