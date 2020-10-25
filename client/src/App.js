import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Navbar from "./components/layout/Navbar";
import Home from "./components/layout/Home";

import SearchPlant from "./components/searchPlant/SearchPlant";
import SearchId from "./components/searchPlant/SearchId";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />

        <Fragment>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/search" component={SearchPlant} />
            <Route exact path="/plant/:id" component={SearchId} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
