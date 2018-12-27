import React, { Component } from "react";
import "./App.css";
import MainPage from "../src/components/js/main";
import ButtonAppBar from "../src/components/js/home";
import Navbar from "../src/components/js/icon";
import SignUp from "../src/components/js/signUp";
import Login from "../src/components/js/login_page";
import ChildDetailCard from "../src/components/js/childernData";

import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <ButtonAppBar />
        <Router>
          <div>
            <Route exact path="/" component={MainPage}/>
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/child_detail" component={ChildDetailCard}/>
          </div>
        </Router>

      </div>
    );
  }
}

export default App;
