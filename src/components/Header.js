import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AppBar from "@material-ui/core/AppBar";
import MenuLink from './MenuLink';

const Header = () =>
  <AppBar position="static" color="default">
    <Toolbar>
      <Typography variant="title" color="inherit" noWrap>
        MasterGlaive
      </Typography>
      <MenuLink link="/" message="Birthplace status" />
      <MenuLink link="/leaders" message="City leaders" />
      <MenuLink link="/chocobos" message="Chocobos" />
    </Toolbar>
  </AppBar>;

export default Header;
