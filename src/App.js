import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import MedicineDetails from "./components/MedicineDetails";
import GenericAlternatives from "./components/GenericAlternatives";
import FAQs from "./components/FAQs";
import Rating from "./components/Rating";
import Description from "./components/Description";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/Description" components={Description} />
          <Route exact path="/FAQs" components={FAQs} />
          <Route exact path="/Footer" components={Footer} />
          <Route
            exact
            path="/GenericAlternatives"
            components={GenericAlternatives}
          />
          <Route exact path="/Header" components={Header} />
          <Route exact path="/MedicineDetails" components={MedicineDetails} />
          <Route exact path="/Rating" components={Rating} />
          <Route exact path="/Contact" components={Contact} />
        </Switch>
      </Router>
      <div className="app">
        <Header />
        <main>
          <MedicineDetails />
          <GenericAlternatives />
          <FAQs />
          <Rating />
          <Description />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;
