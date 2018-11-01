import React from "react";
import PropTypes from "prop-types";
import { Row, Col, Tabs, Tab, Modal, Button } from "react-materialize";

export default class CategoryItem extends React.Component {
  render() {
    return (
      <div>
        {Object.keys(this.props.itens).map((item, i) => {
          return (
            <Col key={i} className="item" s={10} m={3} l={3}>
              <div style={{ width: "13em" }}>
                <img
                  className="thumbnail"
                  src={this.props.itens[item].img}
                  alt={this.props.itens[item].title}
                />
              </div>
              <div className="text-title">
                <h5>{this.props.itens[item].title}</h5>
              </div>
            </Col>
          );
        })}
      </div>
    );
  }
}

CategoryItem.propTypes = {
  itens: PropTypes.array
};
