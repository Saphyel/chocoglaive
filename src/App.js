import React from 'react';
import { Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Birthplaces from './pages/Birthplaces';
import Leaders from './pages/Leaders';
import Chocobos from './pages/Chocobos';
import Header from "./components/Header";

const App = () =>
  <div id="main">
    <CssBaseline />
    <Header/>
    <Route exact path="/" component={Birthplaces}/>
    <Route path="/leaders" component={Leaders}/>
    <Route path="/chocobos" component={Chocobos}/>
  </div>;

export default App;
