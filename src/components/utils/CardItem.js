import React from "react";
import { Modal, Col } from "react-materialize";
import PropTypes from "prop-types";
import ReactGA from "react-ga";

class CardItem extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  handleEvent(action) {
    ReactGA.event({
      category: "Produto",
      action: `Clicou no produto ${action}`
    });
  }

  render() {
    return (
      <div className="card">
        <div className="card-image">
          <img src={this.props.image} alt={this.props.title} />

          <Modal
            header={this.props.title}
            fixedFooter
            trigger={
              <a className="btn-floating halfway-fab waves-effect waves-light red">
                <i
                  className="material-icons"
                  onClick={() => {
                    this.handleEvent(this.props.title);
                  }}
                >
                  add
                </i>
              </a>
            }
          >
            <Col s={12} m={12} l={12}>
              <div
                className={`products ${
                  this.props.modal
                } no-repeat-background materialboxed`}
              />
            </Col>
          </Modal>
        </div>
        {this.props.content.length >= 230 ? (
          <div className="card-content" style={{ padding: "10px" }}>
            <span className="card-title">
              <h5 style={{ color: "#000" }}>{this.props.title}</h5>
            </span>
            <p>{this.props.content}</p>
          </div>
        ) : (
          <div className="card-content">
            <span className="card-title">
              <h5 style={{ color: "#000" }}>{this.props.title}</h5>
            </span>
            <p>{this.props.content}</p>
          </div>
        )}
      </div>
    );
  }
}

CardItem.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  modal: PropTypes.string.isRequired
};

export default CardItem;
