import React from "react";
import { Route, Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import SingleView from "./SingleView";

const App = () => (
  <div>
    <header>
      <Link to="/">Home</Link>
      <Link to="/about-us">About</Link>
    </header>

    <main>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/about-us" component={SingleView} />
    </main>
  </div>
);

export default App;
