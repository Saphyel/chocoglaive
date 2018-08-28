import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import Title from './Title';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import Button from '@material-ui/core/Button';

class ChocoboList extends React.Component {

  calcSpeed(value) {
    if (value === 'C') {
      return 110;
    }
    else if (value === 'B') {
      return 120;
    }
    else if (value === 'A') {
      return 130;
    }
    else if (value === 'A+') {
      return 140;
    }
    return 100;
  }

  calculator(chocobo) {
    const hp = parseInt(chocobo.hp);
    const attack = parseInt(chocobo.attack);
    const speed = this.calcSpeed(chocobo.speed)
    return Math.round((hp / 20) + (attack / 10) + speed);
  }

  render() {
    return (
      <Grid item xs={12} sm={12} md={12}>
        <Paper>
          <Title message="Stable of Chocobos"/>
          <Table>
            <TableHead>
              <TableRow>
              {this.props.header.map(header => {
                return (
                  <TableCell key={header}>{header}</TableCell>
                );
              })}
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.items.map(opt => {
                return (
                  <TableRow key={opt.id}>
                    <TableCell>{opt.chocobo.hp}</TableCell>
                    <TableCell>{opt.chocobo.attack}</TableCell>
                    <TableCell>{opt.chocobo.speed}</TableCell>
                    <TableCell>{opt.chocobo.colour}</TableCell>
                    <TableCell>{this.calculator(opt.chocobo)}</TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => this.props.DeleteItem(opt.id)}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>
      </Grid>
    );
  }
}

ChocoboList.propTypes = {
  header: PropTypes.array.isRequired,
  items: PropTypes.array.isRequired,
};

export default ChocoboList;
