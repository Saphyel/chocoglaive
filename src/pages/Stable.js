import React from 'react';
import Grid from '@material-ui/core/Grid';
import ChocoboNew from '../components/ChocoboNew';
import ChocoboList from '../components/ChocoboList';
import { get, keys, set, del } from "idb-keyval";

const uuidv1 = require('uuid/v1');

class Stable extends React.Component {

  constructor() {
    super();
    this.state = {stable: []};
  }

  async getItems() {
    let payload = [];
    const Ids = await keys();
    for (var i = 0; i < Ids.length; i++) {
      payload.push({id: Ids[i], chocobo: await get(Ids[i])})
    }
    return {stable: payload};
  }

  async componentDidMount() {
    this.setState(await this.getItems());
  }

  addNewItem = (hp, attack, colour, speed) => {
    const payload = {
      hp: hp,
      attack: attack,
      speed: speed,
      colour: colour
    };

    let id = uuidv1();
    let item = {id: id, chocobo: payload};
    set(id, payload);

    this.setState(prevState => {
      prevState.stable.push(item);
      return {stable: prevState.stable};
    });
  };

  DeleteItem = (id) => {
    del(id);

    this.setState(prevState => {
      prevState.stable = prevState.stable.filter(chocobo => chocobo.id !== id);
      return {stable: prevState.stable};
    });
  };

  render() {
    const {stable} = this.state;

    return (
      <main>
        <Grid
          container
          spacing={8}
          direction="column"
          alignItems="stretch"
        >
          <ChocoboList
            items={stable}
            DeleteItem={this.DeleteItem}
            header={['HP', 'Attack', 'Speed', 'Colour', 'Value', 'Manage']}
          />
          <ChocoboNew addNewItem={this.addNewItem}/>
        </Grid>
      </main>
    )
  }
}

export default Stable;
