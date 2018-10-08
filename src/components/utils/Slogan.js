/* eslint-disable*/
import React from "react";
import { Col, Parallax } from "react-materialize";
import PropTypes from "prop-types";
import "../../css/Slogan.css";

const Slogan = ({ title, content, image }) => (
  <div>
    {!content ? (
      <div className="bg-gradient">
        <div className="capa-site">
          <Parallax alt={title} imageSrc={image} />
        </div>
        <Col
          className="center-align slogan text-shadown "
          offset="s1"
          s={10}
          m={12}
          l={12}
        >
          <h1>{title}</h1>
        </Col>
      </div>
    ) : (
      <div className="bg-gradient">
        <div className="capa-site">
          <Parallax alt={title} imageSrc={image} />
        </div>

        <Col
          offset="s1 m2 l2"
          s={10}
          m={8}
          l={8}
          className="slogan center-align"
        >
          <div className="josefin-font sub-slogan">
            <h3 className="white-text text-shadown">{title}</h3>
          </div>
          <div className="josefin-font text-about">
            <p className="white-text">{content}</p>
          </div>
        </Col>
      </div>
    )}
  </div>
);

Slogan.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  image: PropTypes.string.isRequired
};

export default Slogan;
