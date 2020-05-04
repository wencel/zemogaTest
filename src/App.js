import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./App/Pages/HomePage/HomePage.component";

function App() {
  return (
    <Switch>
      <Route path="/" exact component={HomePage}></Route>
    </Switch>
  );
}

export default App;
