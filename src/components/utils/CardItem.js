import React from "react";
import { Col, Row, Button, Input, Preloader, Icon } from "react-materialize";
import PropTypes from "prop-types";

class CardItem extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="card">
        <div className="card-image">
          <img src={this.props.image} alt={this.props.title} />
          <span className="card-title">
            <h2 style={{ color: "#000" }}>{this.props.title}</h2>
          </span>
          <a className="btn-floating halfway-fab waves-effect waves-light red">
            <i className="material-icons">add</i>
          </a>
        </div>
        <div className="card-content">
          <p>
            I am a very simple card. I am good at containing small bits of
            information. I am convenient because I require little markup to use
            effectively.
          </p>
        </div>
      </div>
    );
  }
}

CardItem.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  image: PropTypes.string.isRequired
};

export default CardItem;
