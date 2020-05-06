import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./App/Pages/HomePage/HomePage.component";
import Navbar from "./App/Components/Molecules/Navbar/Navbar.component";
import Footer from "./App/Components/Molecules/Footer/Footer.component";
import PastTrials from "./App/Pages/PastTrials/PastTrials.component";
import ContactUs from "./App/Pages/ContactUs/ContactUs.component";
import HowItWorks from "./App/Pages/HowItWorks/HowItWorks.component";
import Login from "./App/Pages/Login/Login.component";
import Privacy from "./App/Pages/Privacy/Privacy.component";
import TermsAndConditions from "./App/Pages/TermsAndConditions/TermsAndConditions.component";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/past-trials' exact component={PastTrials} />
        <Route path='/contact-us' exact component={ContactUs} />
        <Route path='/how-it-works' exact component={HowItWorks} />
        <Route path='/login' exact component={Login} />
        <Route path='/privacy' exact component={Privacy} />
        <Route
          path='/terms-and-conditions'
          exact
          component={TermsAndConditions}
        />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
