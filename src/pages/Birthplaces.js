import React from 'react';
import Grid from '@material-ui/core/Grid';
import AdvanceCard from '../components/AdvanceCard';
import {BirthdayService} from '../services/BirthdayService';

class Birthplaces extends React.Component {
  constructor() {
    super();
    this.state = {birthplaces: []};
  }

  async getItems() {
    return {birthplaces: BirthdayService.fetchAll()};
  }

  async componentDidMount() {
    this.setState(await this.getItems());
  }

  render() {
    return (
      <main>
        <Grid
          container
          spacing={8}
          direction="column"
          alignItems="stretch"
          justify="center"
        >
          {this.state.birthplaces.map(birthplace =>
            <AdvanceCard
              key={birthplace.id}
              title={birthplace.title}
              subtitle={birthplace.subtitle}
              requirement={birthplace.requirement}
              content={birthplace.content}
            />
          )}
        </Grid>
      </main>
    );
  }
}

export default Birthplaces;
