/* eslint-disable*/
import React from "react";
import PropTypes from "prop-types";
import { Col } from "react-materialize";
import { Link } from "react-router-dom";

export default class CategoryItem extends React.Component {
  render() {
    return (
      <div style={{ paddingTop: "2em" }}>
        {Object.keys(this.props.itens).map((item, i) => {
          return (
            <Col key={i} className="item" offset="s1 m1 l1" s={10} m={3} l={3}>
              <a href={`/todos-produtos/${this.props.itens[item].title}`}>
                <img
                  className="thumbnail"
                  src={this.props.itens[item].img}
                  alt={this.props.itens[item].title}
                />

                <h4 className="center-align">{this.props.itens[item].title}</h4>
              </a>
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
