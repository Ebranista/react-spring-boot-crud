import logo from './logo.svg';
import './App.css';
import react from 'react';
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';
import React , {Component} from 'react';
import { BrowserRouter as Router , Route, Switch} from 'react-router-dom'



function App() {
  return (
<div>
  <Router>
    <HeaderComponent/>
    <div className="container">
      <Switch>
        <Route path="/" exact component={ListEmployeeComponent}></Route>
        <Route path="/employee" exact component={ListEmployeeComponent}></Route>
        <Route path="/add-employee/:id" exact component={CreateEmployeeComponent}></Route>
        <Route path="/view-employee/:id" exact component={ViewEmployeeComponent}></Route>
      </Switch>
    </div>
  </Router>
</div>

  );
}

export default App;
