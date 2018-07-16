import React from "react";
import { Route, Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { fetchData } from "../modules/counter";
import Dashboard from "./Dashboard";
import Results from "./Results";

import { Container, Nav, Page } from "../containerStyles";

class App extends React.Component {
  componentWillMount() {
    const topic = this.props.fetchData("topic");
    // const sessions = this.props.fetchData("session");
    // const responses = this.props.fetchData("response");
    // const contact = this.props.fetchData("contact");
  }

  render() {
    return (
      <Page>
        <Nav>
          <Link to="/">Home</Link>
          <Link to="/about-us">About</Link>
        </Nav>
        <Container>
          <Route exact path="/" render={() => <Dashboard {...this.props} />} />
          <Route
            path="/:topicId"
            render={({ match }) => <Results {...this.props} match={match} />}
          />
        </Container>
      </Page>
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
