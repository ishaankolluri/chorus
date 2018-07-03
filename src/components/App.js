import React from "react";
import { Route, Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { fetchData } from "../modules/counter";
import Dashboard from "./Dashboard";
import SingleView from "./SingleView";

class App extends React.Component {
  componentWillMount() {
    console.log("mounting");
    const items = this.props.fetchData("item");
    const sessions = this.props.fetchData("session");
    const responses = this.props.fetchData("response");
    const contact = this.props.fetchData("contact");
  }

  render() {
    return (
      <div>
        <header>
          <Link to="/">Home</Link>
          <Link to="/about-us">About</Link>
        </header>
        <main>
          <Route exact path="/" render={() => <Dashboard {...this.props} />} />
          <Route
            exact
            path="/:itemId"
            render={() => <SingleView {...this.props} />}
          />
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => state.counter;

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchData
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

// export default App;
