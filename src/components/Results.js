import React from "react";
import { Subtitle, Text, Title } from "../textStyles";

class Results extends React.Component {
  generateResultsContext() {
    // take Airtable data and create chart objects for each decision
  }
  render() {
    if (!this.props.topic) {
      return <Text>Loading...</Text>;
    }
    // console.log(this.match.params.topicId);
    return (
      <div>
        <Title>About Us</Title>
        <Subtitle>Hello Medium!</Subtitle>
      </div>
    );
  }
}

export default Results;
