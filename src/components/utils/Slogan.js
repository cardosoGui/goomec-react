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
          className="center-align slogan white-text"
          offset="s1"
          s={10}
          m={12}
          l={12}
        >
          <h1>{title}</h1>
        </Col>
      </div>
    ) : (
      <div>
        <div className="capa-site">
          <Parallax alt={title} imageSrc={image} />
        </div>
        <div style={{ width: "90%", paddingLeft: "10%" }}>
          <Col className="slogan center-align">
            <div className="sub-slogan">
              <h3>{title}</h3>
            </div>
            <div className="josefin-font text-about">
              <p>{content}</p>
            </div>
          </Col>
        </div>
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
