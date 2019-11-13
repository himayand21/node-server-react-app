import React from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";
import "./App.css";
import { Home } from "./Home";
import { About } from "./About";
import { NotFound } from "./NotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <NavLink to="/">Home</NavLink>
		<br/>
        <NavLink to="/about">About</NavLink>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
