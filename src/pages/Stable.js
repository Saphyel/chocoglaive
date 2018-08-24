import React from 'react';
import Grid from '@material-ui/core/Grid';
import ChocoboNew from '../components/ChocoboNew';
import ChocoboList from '../components/ChocoboList';

const Stable = () =>
  <main>
    <Grid container spacing={40} alignItems="flex-end">
      <ChocoboList />
      <ChocoboNew />
    </Grid>
  </main>;

export default Stable;
