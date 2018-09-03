import React from 'react';
import Grid from '@material-ui/core/Grid';
import BasicCard from '../components/BasicCard';
import {LeaderService} from '../services/LeaderService';

const Leaders = () => (
  <main>
    <Grid
      container
      spacing={8}
      direction="column"
      alignItems="stretch"
      justify="center"
    >
      {LeaderService.fetchAll().map(leader =>
        <BasicCard
          key={leader.id}
          title={leader.title}
          content={leader.contents}
        />
      )}
    </Grid>
  </main>
)

export default Leaders;
