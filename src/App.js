import React from "react";
import Header from "./Header";
import "./App.css";
import Home from "./Home";
import { BrowserRouter as Router , Switch , Route } from "react-router-dom";
import Checkout from "./Checkout";

function App() {
  return (
    // BEM

    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/checkout">
            <Checkout />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      
    </Router>
  );
}

export default App;
