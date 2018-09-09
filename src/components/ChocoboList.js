import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import SingleInput from './form/SingleInput';
import Dropdown from './form/Dropdown';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import Button from '@material-ui/core/Button';
import Title from './Title';

class ChocoboList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
      hp: '',
      attack: '',
      colour: 'Red',
      speed: 'D'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addNewItem(
      this.state.hp,
      this.state.attack,
      this.state.colour,
      this.state.speed,
    );
    this.handleClose();
  }

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
      <Grid item xs>
        <Paper>
          <Title message="Stable of Chocobos"/>
          <Table>
            <TableHead>
              <TableRow>
              {this.props.header.map(header =>
                <TableCell key={header}>{header}</TableCell>
              )}
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.items.map(opt =>
                <TableRow key={opt.id}>
                  <TableCell>{opt.chocobo.hp}</TableCell>
                  <TableCell>{opt.chocobo.attack}</TableCell>
                  <TableCell>{opt.chocobo.speed}</TableCell>
                  <TableCell>{opt.chocobo.colour}</TableCell>
                  <TableCell>{this.calculator(opt.chocobo)}</TableCell>
                  <TableCell>
                    <Button
                      size="small"
                      variant="contained"
                      color="secondary"
                      onClick={() => this.props.DeleteItem(opt.id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table><Button variant="raised" size="large" color="primary" onClick={this.handleClickOpen}>
            New chocobo
          </Button>
          <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle>Add a new chocobo</DialogTitle>
            <Grid
              container
              spacing={16}
              justify="center"
              alignItems="stretch"
              direction="row"
            >
              <SingleInput
                inputType={'number'}
                title={'HP'}
                name={'hp'}
                placeholder={'2000'}
                required={true}
                onChange={this.handleChange}
              />
              <SingleInput
                inputType={'number'}
                title={'Attack'}
                name={'attack'}
                placeholder={'1000'}
                required={true}
                onChange={this.handleChange}
              />
              <Dropdown
                title={'Colour'}
                name={'colour'}
                options={['Red', 'Blue', 'Yellow', 'Black', 'Green']}
                selectedOption={this.state.colour}
                onChange={this.handleChange}
              />
              <Dropdown
                title={'Speed'}
                name={'speed'}
                options={['D', 'C', 'B', 'A', 'A+']}
                onChange={this.handleChange}
                selectedOption={this.state.speed}
              />
              <Grid item xs={4}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.handleSubmit}
                >
                  Add
                </Button>
              </Grid>
              <Grid item xs={4}>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={this.handleClose}
                >
                  Cancel
                </Button>
              </Grid>
            </Grid>
          </Dialog>
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
