import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Title from "./Title";

const ContentTable = props =>
  <Grid item sm={6} md={6} lg={6}>
    <Paper>
      <Title message={props.title} />
      <Table>
        <TableBody>
          {props.headers.map((value, index) => {
            return (
              <TableRow key={value}>
                <TableCell component="th" scope="row">{value}</TableCell>
                <TableCell>{props.contents[index]}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  </Grid>;

ContentTable.propTypes = {
  title: PropTypes.string.isRequired,
  headers: PropTypes.array.isRequired,
  contents: PropTypes.array.isRequired,
};

export default ContentTable;
