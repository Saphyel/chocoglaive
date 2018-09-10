import React from "react";
import PropTypes from "prop-types";
import {NavLink} from "react-router-dom";
import Button from "@material-ui/core/Button";

const MenuLink = props =>
  <NavLink className="nav-link" activeClassName="active" to={props.link}>
    <Button color="inherit">{props.message}</Button>
  </NavLink>;

MenuLink.propTypes = {
  link: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
};

export default MenuLink;
