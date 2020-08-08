import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Main from "./Main";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Main} />
    </Router>
  );
};

export default App;
