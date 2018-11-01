import React from "react";
import { Row, Col, Tabs, Tab, Modal, Button } from "react-materialize";
import CategoryItem from "./products/CategoryItem";
import PropTypes from "prop-types";

export default class CategoriesPage extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col offset="" s={10} m={12} l={12}>
            <CategoryItem itens={this.props.itensArray} />
          </Col>
        </Row>
      </div>
    );
  }
}

CategoriesPage.propTypes = {
  itensArray: PropTypes.array
};
