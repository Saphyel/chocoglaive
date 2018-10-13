import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";

const RaisedButton = props =>
  <Button
    variant="contained"
    color={props.color}
    size={props.size}
    type={props.type}
    onClick={props.onClick}
    disabled={props.disabled}
  >
    {props.children}
  </Button>;

RaisedButton.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool
};

export default RaisedButton;
