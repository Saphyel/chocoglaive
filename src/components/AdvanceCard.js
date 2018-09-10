import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Paragraph from "./Paragraph";

const AdvanceCard = props =>
  <Grid item sm={6} md={6} lg={6}>
    <Card>
      <CardHeader title={props.title} subheader={props.subtitle}/>
      <CardContent>
        {props.requirement ? (
        <Typography color="secondary">
          Requires: {props.requirement}
        </Typography> ) : null}
        <Paragraph sentences={props.content} />
      </CardContent>
    </Card>
  </Grid>;

AdvanceCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  requirement: PropTypes.string,
  content: PropTypes.array.isRequired
};

export default AdvanceCard;
