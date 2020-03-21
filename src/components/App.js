import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "./App.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import TypoGraphy from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Router>
        <AppBar color="primary" position="static">
          <Toolbar>
            <TypoGraphy variant="h5" color="inherit">
              My header
            </TypoGraphy>
          </Toolbar>
        </AppBar>
        <Switch>
          <Route path="/" exact component={() => "home"} />
          <Route path="/courses" exact component={() => "1"} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
