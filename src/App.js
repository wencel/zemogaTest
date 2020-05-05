import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./App/Pages/HomePage/HomePage.component";
import Navbar from "./App/Components/Molecules/Navbar/Navbar.component";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact component={HomePage}></Route>
      </Switch>
    </>
  );
}

export default App;
