import React from "react";
import PropTypes from "prop-types";

export default class CategoryItem extends React.Component {
  render() {
    return (
      <div>
        <span className="red-text">{this.props.title}</span>
        <img src={this.props.img} alt={this.props.title} />
      </div>
    );
  }
}

CategoryItem.propTypes = {
  title: PropTypes.any,
  img: PropTypes.any
};
