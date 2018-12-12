/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";
import { Modal, Col, Button, Icon } from "react-materialize";
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
          <img
            className="materialboxed"
            src={this.props.image}
            alt={this.props.title}
            data-caption={this.props.title}
          />

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
              <Col s={8} m={5} l={5}>
                <Button
                  large
                  node="a"
                  href={`/contato/${this.props.title}`}
                  className="button-market red"
                  waves="light"
                >
                  Orçamento
                  <Icon right>add_shopping_cart</Icon>
                </Button>
              </Col>
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
