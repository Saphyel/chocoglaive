import React from 'react';
import Grid from '@material-ui/core/Grid';
import ContentTable from '../components/ContentTable';

const Training = () =>
  <main>
    <Grid container spacing={40} alignItems="flex-end">
      <ContentTable
        description="Max level"
        head={["lvl 99","lvl 80","lvl 50","lvl 30","lvl 20"]}
        body={[
          "This bird roosts at the top of the pecking order!",
          "This bird's plumage exudes an air of prestige.",
          "This bird's feathers have a certain sheen about them.",
          "This bird is middle-of-the-flock in all regards.",
          "This bird does not stand out from the flock."
        ]} />
        <ContentTable
          description="Bonus for training attributes"
          head={["Any","stamina","fighter","speed","nothing"]}
          body={[
            "It appears to possess incredible attributes.",
            "Its sturdy musculature should make it more resillient.",
            "It looks ready and raring for a good fight.",
            "Its quick reflex should help it sprint to and fro. OR Its powerful wings should allow it to stay aloft longer.",
            "It seems to possess no notable attributes."
          ]} />
    </Grid>
  </main>;

export default Training;
