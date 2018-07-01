import React from "react";
import { push } from "react-router-redux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetchData } from "../modules/counter";

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to Chorus</h1>
        <p>
          <button onClick={() => this.props.fetchData()}>
            Try and fetch data
          </button>
        </p>
        <p>
          <button onClick={() => this.props.changePage()}>
            Go to about page via redux
          </button>
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => state.counter;

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchData,
      changePage: () => push("/about-us")
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
