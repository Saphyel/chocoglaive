import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";

const RaisedButton = props =>
  <Button
    variant="raised"
    color={props.color}
    size={props.size}
    onClick={props.click}
    type={props.type}
    disabled={props.disabled}
  >
    {props.children}
  </Button>;

RaisedButton.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  click: PropTypes.func,
  type: PropTypes.string,
  disabled: PropTypes.bool
};

export default RaisedButton;
