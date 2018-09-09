import React from 'react';
import Grid from '@material-ui/core/Grid';
import BasicCard from '../components/BasicCard';
import {LeaderService} from '../services/LeaderService';

class Leaders extends React.Component {
  constructor() {
    super();
    this.state = {leaders: []};
  }

  async getItems() {
    return {leaders: await LeaderService.fetchAll()};
  }

  async componentDidMount() {
    this.setState(await this.getItems());
  }

  render() {
    const {leaders} = this.state;

    return (
      <main>
        <Grid container spacing={8} alignItems="stretch">
          {leaders.map(leader =>
            <BasicCard
              key={leader.id}
              title={leader.title}
              content={leader.contents}
            />
          )}
        </Grid>
      </main>
    );
  }
}

export default Leaders;
