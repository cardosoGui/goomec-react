import React from "react";
import { Col } from "react-materialize";

import PropTypes from "prop-types";
import "../../css/SlideItem.css";

const SlideItem = ({ thumbnail, title }) => (
  <div>
    <Col className="item" m={14}>
      <div style={{ width: "13em" }}>
        <img className="thumbnail" src={thumbnail} alt={title} />
      </div>
      <div className="text-title">
        <h5>{title}</h5>
      </div>
    </Col>
  </div>
);

SlideItem.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default SlideItem;
