import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";

const uuidv1 = require("uuid/v1");

const Paragraph = props =>
  <Typography component="p">
    {props.sentences.map(text =>
      <span key={uuidv1()}>{text}<br/></span>
    )}
  </Typography>;

Paragraph.propTypes = {
  sentences: PropTypes.array.isRequired
};

export default Paragraph;
