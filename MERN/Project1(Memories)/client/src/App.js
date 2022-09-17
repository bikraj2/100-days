import React from "react";

import { Container, AppBar, Typhography, Grow, Grid } from "@material-ui/core";

import memories from "./images/memories.png";

const App = () => {
  return (
    <Container maxwidth="lg">
      <AppBar postion="static" color="inherit">
        <Typhography variant="h2" align="center">
          Memories
        </Typhography>
        <img src={memories} alt="memories" height="60" />
      </AppBar>
    </Container>
  );
};

export default App;
