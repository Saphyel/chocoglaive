import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import ContentTable from '../components/ContentTable';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Stable from './Stable';
import {TrainingService} from '../services/TrainingService';

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
      value: 'stable',
      training: []
    };
  }

    async getItems() {
      return {training: await TrainingService.fetchAll()};
    }

    async componentDidMount() {
      this.setState(await this.getItems());
    }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const {value, training} = this.state;

    return (
      <main>
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange} fullWidth>
            <Tab value="stable" label="Stable" />
            <Tab value="training" label="Training" />
          </Tabs>
        </AppBar>
        {value === 'stable' && <Stable/>}
        {value === 'training' && <Training>{training}</Training>}
      </main>
    );
  }
}

export default Chocobos;
