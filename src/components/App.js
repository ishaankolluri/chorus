import React from "react";
import { Route, Switch } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { fetchAllData } from "../modules/counter";
import Dashboard from "./Dashboard";
import Results from "./Results";

import { Copyright } from "../containerStyles";

import Navbar from "./Navbar";

class App extends React.Component {
  componentWillMount() {
    this.props.fetchAllData(["topic", "decision", "contact", "result"]);
  }

  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" render={() => <Dashboard {...this.props} />} />
          <Route
            path="/results"
            render={({ match }) => <Results {...this.props} match={match} />}
          />
        </Switch>
        <Copyright>
          © 2018 Allscripts Healthcare, LLC and/or its affiliates. All Rights
          Reserved.
        </Copyright>
      </div>
    );
  }
}

const mapStateToProps = state => state.counter;

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchAllData
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

// export default App;
