import React from "react";
import PropTypes from "prop-types";
import { Input } from "react-materialize";

const Checkbox = ({
  type = "checkbox",
  name,

  checked = false,
  onChange
}) => (
  <Input
    s={10}
    m={10}
    l={6}
    type={type}
    name={name}
    label={name}
    checked={checked}
    onChange={onChange}
  />
);

Checkbox.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired
};

export default Checkbox;
