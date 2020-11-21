import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Home from "./components/layout/Home";
import About from "./components/layout/About";

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
                  <Route exact path="/about" component={About} />
                  <Route exact path="/species/:id" component={SearchId} />
               </Switch>
            </Fragment>
            <Footer />
         </Router>
      </Provider>
   );
}

export default App;
