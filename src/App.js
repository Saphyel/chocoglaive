import React from 'react';
import { Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Birthplaces from './pages/Birthplaces';
import Leaders from './pages/Leaders';
import Chocobos from './pages/Chocobos';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AppBar from "@material-ui/core/AppBar";
import MenuLink from './components/MenuLink';

const App = () =>
  <div id="main">
    <CssBaseline />
    <AppBar position="static" color="default">
      <Toolbar>
        <Typography variant="title" color="inherit" noWrap>
          MasterGlaive
        </Typography>
        <MenuLink link="/" message="Birthplace status" />
        <MenuLink link="/leaders" message="City leaders" />
        <MenuLink link="/chocobos" message="Chocobos" />
      </Toolbar>
    </AppBar>
    <Route exact path="/" component={Birthplaces}/>
    <Route path="/leaders" component={Leaders}/>
    <Route path="/chocobos" component={Chocobos}/>
  </div>;

export default App;
