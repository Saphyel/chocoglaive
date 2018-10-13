import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import SingleInput from "./SingleInput";
import Dropdown from "./Dropdown";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import Typography from "@material-ui/core/Typography";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Title from "./Title";
import RaisedButton from "./RaisedButton";

class ChocoboList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      hp: "",
      attack: "",
      colour: "Red",
      speed: "D"
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClickOpen = () => this.setState({open: true});

  handleClose = () => this.setState({open: false});

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  invalidChocobo = () => {
    if (this.state.hp === "") return true;
    if (this.state.attack === "") return true;
    return false;
  };

  handleSubmit(event) {
    this.props.addNewItem(
      this.state.hp,
      this.state.attack,
      this.state.colour,
      this.state.speed
    );
    this.handleClose();
  }

  calcSpeed(value) {
    if (value === "C") {
      return 110;
    } else if (value === "B") {
      return 120;
    } else if (value === "A") {
      return 130;
    } else if (value === "A+") {
      return 140;
    }
    return 100;
  }

  calculator(chocobo) {
    const hp = parseInt(chocobo.hp);
    const attack = parseInt(chocobo.attack);
    const speed = this.calcSpeed(chocobo.speed);

    return Math.round(hp / 20 + attack / 10 + speed);
  }

  render() {
    return (
      <Grid item xs>
        <Paper>
          <Title>Stable of Chocobos</Title>
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
                    <RaisedButton
                      color="secondary"
                      size="small"
                      onClick={() => this.props.DeleteItem(opt.id)}
                    >
                      Delete
                    </RaisedButton>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
          {this.props.items.length ? null : (
            <Typography align="center" variant="subtitle1">
              Your stable is empty!
            </Typography>
          )}
          <RaisedButton
            color="primary"
            size="large"
            onClick={this.handleClickOpen}
          >
            New chocobo
          </RaisedButton>
          <Dialog open={this.state.open} onClose={this.handleClose} fullWidth>
            <DialogTitle>Add a new chocobo</DialogTitle>
            <form
              id="chocobo"
              name="chocobo"
              onSubmit={() => this.handleSubmit()}
            >
              <Grid
                container
                spacing={16}
                justify="center"
                alignItems="stretch"
                direction="row"
              >
                <SingleInput
                  type={"number"}
                  title={"HP"}
                  name={"hp"}
                  placeholder={"2000"}
                  onChange={this.handleChange}
                />
                <SingleInput
                  type={"number"}
                  title={"Attack"}
                  name={"attack"}
                  placeholder={"1000"}
                  onChange={this.handleChange}
                />
                <Dropdown
                  title={"Colour"}
                  name={"colour"}
                  options={["Red", "Blue", "Yellow", "Black", "Green"]}
                  selectedOption={this.state.colour}
                  onChange={this.handleChange}
                />
                <Dropdown
                  title={"Speed"}
                  name={"speed"}
                  options={["D", "C", "B", "A", "A+"]}
                  selectedOption={this.state.speed}
                  onChange={this.handleChange}
                />
                <Grid item xs={4}>
                  <RaisedButton
                    color="primary"
                    size="large"
                    type="submit"
                    disabled={this.invalidChocobo()}
                  >
                    Submit
                  </RaisedButton>
                </Grid>
                <Grid item xs={3}>
                  <RaisedButton
                    color="secondary"
                    size="large"
                    onClick={this.handleClose}
                  >
                    Cancel
                  </RaisedButton>
                </Grid>
              </Grid>
            </form>
          </Dialog>
        </Paper>
      </Grid>
    );
  }
}

ChocoboList.propTypes = {
  header: PropTypes.array.isRequired,
  items: PropTypes.array.isRequired
};

export default ChocoboList;
