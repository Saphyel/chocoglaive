import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import Title from './Title';
import TableHeader from './TableHeader';
import TableContent from './TableContent';

const ChocoboList = (props) =>
  <Grid item xs={12} sm={12} md={12}>
    <Paper>
      <Title message="Stable of Chocobos"/>
      <Table>
        <TableHeader
          values={['HP', 'Attack', 'Speed', 'Colour', 'Value', 'Manage']}
        />
        <TableContent name="stable-list" list={props.items}/>
      </Table>
    </Paper>
  </Grid>

export default ChocoboList;
