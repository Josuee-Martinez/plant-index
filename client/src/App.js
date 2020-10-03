import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Navbar from "./components/layout/Navbar";
import "./App.css";
import SearchPlant from "./components/searchPlant/SearchPlant";
import SearchId from "./components/searchPlant/SearchId";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <div className="container">
          <Fragment>
            <Switch>
              <Route exact path="/" component={SearchPlant} />
              <Route exact path="/plant/:id" component={SearchId} />
            </Switch>
          </Fragment>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
