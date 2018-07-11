import React from "react";

import { Title } from "../styles";

class Dashboard extends React.Component {
  renderTopicRow(i, topic) {
    return <p key={i}>{topic}</p>;
  }

  render() {
    const topics = this.props.topic.records;
    console.log(topics);

    if (!this.props.topic) {
      return <p>Loading...</p>;
    }
    return (
      <div>
        <Title>Welcome to Chorus</Title>
        <p>This is the dashboard.</p>
        {/* {this.topics.map((i, topic) => this.renderTopicRow(i, topic))} */}
      </div>
    );
  }
}

export default Dashboard;
