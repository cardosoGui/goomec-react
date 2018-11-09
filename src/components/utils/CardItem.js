import React from "react";
import {
  Col,
  Row,
  Button,
  Input,
  Preloader,
  Icon,
  Modal
} from "react-materialize";
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

          <Modal
            header="Alinhadores"
            fixedFooter
            trigger={
              <a className="btn-floating halfway-fab waves-effect waves-light red">
                <i className="material-icons">add</i>
              </a>
            }
          >
            Aqui e um modal
          </Modal>
        </div>
        <div className="card-content">
          <span className="card-title">
            <h5 style={{ color: "#000" }}>{this.props.title}</h5>
          </span>
          <p>{this.props.content}</p>
        </div>
      </div>
    );
  }
}

CardItem.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default CardItem;
