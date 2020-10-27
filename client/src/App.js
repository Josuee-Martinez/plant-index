import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Navbar from "./components/layout/Navbar";
import Home from "./components/layout/Home";

import SearchSpecies from "./components/searchSpecies/SearchSpecies";
import SearchId from "./components/searchSpecies/SearchId";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />

        <Fragment>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/search" component={SearchSpecies} />
            <Route exact path="/species/:id" component={SearchId} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
