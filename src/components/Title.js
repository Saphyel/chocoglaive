import React from "react";
import PropTypes from "prop-types";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const Title = props =>
  <Toolbar variant="dense">
    <Typography variant="h6">{props.children}</Typography>
  </Toolbar>;

Title.propTypes = {
  children: PropTypes.string.isRequired
};

export default Title;
