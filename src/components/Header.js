import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AppBar from "@material-ui/core/AppBar";
import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";

const Header = () =>
  <AppBar position="static" color="default">
    <Toolbar>
      <Typography variant="title" color="inherit" noWrap>
        MasterGlaive
      </Typography>
      <NavLink className="nav-link" activeClassName="active" to="/">
        <Button color="inherit">
          Birthplace status
        </Button>
      </NavLink>
      <NavLink className="nav-link" activeClassName="active" to="/leaders">
        <Button color="inherit">
          City leaders
        </Button>
      </NavLink>
      <NavLink className="nav-link" activeClassName="active" to="/stable">
        <Button color="inherit">
          Stable
        </Button>
      </NavLink>
      <NavLink className="nav-link" activeClassName="active" to="/training">
        <Button color="inherit">
          Training
        </Button>
      </NavLink>
    </Toolbar>
  </AppBar>

export default Header;
