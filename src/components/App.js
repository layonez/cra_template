import React from "react";
import {Route, Switch} from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import TypoGraphy from "@material-ui/core/Typography";

import Root from "./Root";

function App() {
  return (
    <Root>
      <AppBar color="primary" position="static">
        <Toolbar>
          <TypoGraphy variant="h5" color="inherit">
            CRA template
          </TypoGraphy>
        </Toolbar>
      </AppBar>
      <Switch>
        <Route path="/" exact component={() => "home"} />
        <Route path="/courses" exact component={() => "1"} />
      </Switch>
    </Root>
  );
}

export default App;
