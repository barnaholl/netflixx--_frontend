import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Main from "./Main";
import VideoDetails from "./VideoDetails";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Main} />
      <Route path="/details/:videoId" component={VideoDetails} />
    </Router>
  );
};

export default App;
