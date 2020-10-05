import React from "react";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Panele from "./components/pages/Panele";
import Systemy from "./components/pages/Systemy";
import Pomiary from "./components/pages/Pomiary";
import Niskopradowe from "./components/pages/Niskopradowe";
import Wysokopradowe from "./components/pages/Wysokopradowe";
import Rozdzielnica from "./components/pages/Rozdzielnica";
import Kompensacja from "./components/pages/Kompensacja";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/panele" component={Panele} />
          <Route path="/ogrzewanie-elektryczne" component={Systemy} />
          <Route path="/pomiary-ochronne" component={Pomiary} />
          <Route path="/instalacje-niskopradowe" component={Niskopradowe} />
          <Route path="/instalacje-wysokopradowe" component={Wysokopradowe} />
          <Route path="/prefabrykacja-rozdzielnic" component={Rozdzielnica} />
          <Route path="/kompensacja-mocy" component={Kompensacja} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
