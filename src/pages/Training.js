import React from 'react';
import Grid from '@material-ui/core/Grid';
import ContentTable from '../components/ContentTable';
import {TrainingService} from '../services/TrainingService';

class Training extends React.Component {
  constructor() {
    super();
    this.state = {training: []};
  }

  async getItems() {
    return {training: await TrainingService.fetchAll()};
  }

  async componentDidMount() {
    this.setState(await this.getItems());
  }

  render() {
    const {training} = this.state;
    return (
      <main>
        <Grid container spacing={8} alignItems="stretch" justify="center">
          {training.map(train =>
            <ContentTable
              key={train.id}
              title={train.title}
              headers={train.headers}
              contents={train.contents}
            />
          )}
        </Grid>
      </main>
    );
  }
}

export default Training;
