import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Stable from './Stable';
import Training from './Training';

class Chocobos extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 'stable',
    };
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const {value} = this.state;

    return (
      <main>
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange} fullWidth>
            <Tab value="stable" label="Stable" />
            <Tab value="training" label="Training" />
          </Tabs>
        </AppBar>
        {value === 'stable' && <Stable/>}
        {value === 'training' && <Training/>}
      </main>
    );
  }
}

export default Chocobos;
