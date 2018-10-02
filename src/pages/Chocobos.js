import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import ContentTable from "../components/ContentTable";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import ChocoboList from "../components/ChocoboList";
import {TrainingService} from "../services/TrainingService";
import {ChocoboService} from "../services/ChocoboService";

function Stable(props) {
  return (
    <Grid container spacing={8} alignItems="stretch" direction="column">
      <ChocoboList
        DeleteItem={props.delete}
        addNewItem={props.add}
        header={["HP", "Attack", "Speed", "Colour", "Value", "Manage"]}
        items={props.children}
      />
    </Grid>
  );
}

function Training(props) {
  return (
    <Grid container spacing={8} alignItems="stretch" justify="center">
      {props.children.map(train =>
        <ContentTable
          key={train.id}
          title={train.title}
          headers={train.headers}
          contents={train.contents}
        />
      )}
    </Grid>
  );
}

class Chocobos extends React.Component {

  constructor() {
    super();
    this.state = {
      value: "stable",
      stable: [],
      training: []
    };
  }

  async getItems() {
    return {
      stable: await ChocoboService.fetchAll(),
      training: await TrainingService.fetchAll()
    };
  }

  async componentDidMount() {
    this.setState(await this.getItems());
  }

  addNewItem = (hp, attack, colour, speed) => {
    const item = ChocoboService.insert(hp, attack, colour, speed);
    this.setState(prevState => {
      prevState.stable.push(item);
      return {stable: prevState.stable};
    });
  };

  DeleteItem = (id) => {
    ChocoboService.remove(id);

    this.setState(prevState => {
      prevState.stable = prevState.stable.filter(chocobo => chocobo.id !== id);
      return {stable: prevState.stable};
    });
  };

  handleChange = (event, value) => this.setState({value});

  render() {
    const {value, stable, training} = this.state;

    return (
      <main>
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange} fullWidth>
            <Tab value="stable" label="Stable" />
            <Tab value="training" label="Training" />
          </Tabs>
        </AppBar>
        {value === "stable" && <Stable delete={this.DeleteItem} add={this.addNewItem}>{stable}</Stable>}
        {value === "training" && <Training>{training}</Training>}
      </main>
    );
  }
}

export default Chocobos;
