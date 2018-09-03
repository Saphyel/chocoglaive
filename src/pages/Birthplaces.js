import React from 'react';
import Grid from '@material-ui/core/Grid';
import AdvanceCard from '../components/AdvanceCard';
import {BirthdayService} from '../services/BirthdayService';

const Birthplaces = () => (
  <main>
    <Grid
      container
      spacing={8}
      direction="column"
      alignItems="stretch"
      justify="center"
    >
      {BirthdayService.fetchAll().map(birthplace =>
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
)

export default Birthplaces;
