import React from 'react';
import SingleInput from './form/SingleInput';
import Dropdown from './form/Dropdown';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';

class ChocoboNew extends React.Component {

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

  render() {
    return (
      <Grid item xs>
        <Button variant="raised" size="large" color="primary" onClick={this.handleClickOpen}>
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
      </Grid>
    );
  }
}

export default ChocoboNew;
