import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import TypoGraphy from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import {Router} from "@reach/router";

import Root from "./Root";
import NavBar from "./NavBar";
import Home from "./Home";
import Items from "./Items";
import About from "./About";

function App() {
  return (
    <Root>
      <AppBar color="primary" position="static">
        <Toolbar variant="dense">
          <TypoGraphy variant="h5" color="inherit">
            CRA template
          </TypoGraphy>
          <NavBar />
        </Toolbar>
      </AppBar>
      <Container style={{backgroundColor: "coral"}} maxWidth="md" component="main">
        <Router>
          <Home path="/" />
          <Items path="/items" />
          <About path="/about" />
        </Router>
      </Container>
    </Root>
  );
}

export default App;
