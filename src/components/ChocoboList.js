import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import Title from './Title';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableContent from './TableContent';

const ChocoboList = (props) =>
  <Grid item xs={12} sm={12} md={12}>
    <Paper>
      <Title message="Stable of Chocobos"/>
      <Table>
        <TableHead>
          <TableRow>
          {props.header.map(header => {
            return (
              <TableCell key={header}>{header}</TableCell>
            );
          })}
          </TableRow>
        </TableHead>
        <TableContent name="stable-list" list={props.items}/>
      </Table>
    </Paper>
  </Grid>;

ChocoboList.propTypes = {
  header: PropTypes.array.isRequired,
  items: PropTypes.array.isRequired,
};

export default ChocoboList;
