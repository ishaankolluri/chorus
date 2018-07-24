import React from "react";
import { Route } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { fetchAllData } from "../modules/counter";
import Dashboard from "./Dashboard";
import Results from "./Results";

import {
  Container,
  Nav,
  NavContent,
  NavItem,
  ExpandedNav,
  Page,
  NavProfile,
  Copyright
} from "../containerStyles";
import { LogoIcon, ChevronDownIcon, FemaleIcon } from "./Icons";

class App extends React.Component {
  componentWillMount() {
    this.props.fetchAllData(["topic", "decision", "contact", "result"]);
  }

  render() {
    return (
      <Page>
        <Nav>
          <NavContent>
            <LogoIcon />
            <NavItem>Tracker</NavItem>
            <NavItem>Sessions</NavItem>
            <NavItem>
              Resources <ChevronDownIcon color="ffffff" />
            </NavItem>
            <ExpandedNav>
              North Hills Clinic <ChevronDownIcon color="ffffff" />
            </ExpandedNav>
            <NavProfile>
              <FemaleIcon />
            </NavProfile>
          </NavContent>
        </Nav>
        <Container>
          <Route exact path="/" render={() => <Dashboard {...this.props} />} />
          <Route
            path="/:topicId"
            render={({ match }) => <Results {...this.props} match={match} />}
          />
        </Container>
        <Copyright>
          © 2018 Allscripts Healthcare, LLC and/or its affiliates. All Rights
          Reserved.
        </Copyright>
      </Page>
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
