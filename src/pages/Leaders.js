import React from 'react';
import Grid from '@material-ui/core/Grid';
import BasicCard from '../components/BasicCard';

const Leaders = () => (
  <main>
    <Grid container spacing={40} alignItems="flex-end">
    <BasicCard
      title='Lestallum'
      content={[
        'Marcia Lythe – Treasure Donations',
        'Finnegan Parton – Gil Donations',
        'Torben Talum – 20% Munitions Discount'
      ]}/>
      <BasicCard
        title='Old Lestallum'
        content={[
          'Ernie Sypert – Treasure Donations',
          'Camilla Mescall – Gil Donations',
          'Russel Springs – Meteorshard Donations'
        ]}/>
      <BasicCard
        title='Old Lestallum 2'
        content={[
          'Elyria Ostis – Treasure Donations',
          'Harper Flint – Meteorshard Donations',
          'Matteo Marchesi – Gil Donations'
        ]}/>
      <BasicCard
        title='Meldacio Hunter HQ'
        content={[
          'Devon Elkton – Trading Post Opening',
          'Biggs Callux – Gil Donations',
          'Wedge Kincaid – 20% Imperial Discount'
        ]}/>
      <BasicCard
        title='Meldacio Hunter HQ 2'
        content={[
          'Todd Portabello – Treasure Donations',
          'Olga Boore – Meteorshard Donations',
          'Norris Dweller – 20% Munitions Discount'
        ]}/>
    </Grid>
  </main>
)

export default Leaders;
