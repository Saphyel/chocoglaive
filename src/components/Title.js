import React from "react";
import PropTypes from "prop-types";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const Title = props =>
  <Toolbar variant="dense">
    <Typography variant="title">{props.message}</Typography>
  </Toolbar>;

Title.propTypes = {
  message: PropTypes.string.isRequired
};

export default Title;
