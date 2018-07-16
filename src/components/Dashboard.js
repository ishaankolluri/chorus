import React from "react";

import DashboardRow from "./DashboardRow";

import { Subtitle, Text, Title, TableHeaderText } from "../textStyles";
import {
  Header,
  Table,
  TableHeader,
  TableRow,
  TableColumn
} from "../containerStyles";

class Dashboard extends React.Component {
  sortById(topics) {
    return topics.sort(function(a, b) {
      return a.fields.id - b.fields.id;
    });
  }
  renderTopicRow(topic, index) {
    return <DashboardRow key={index} topic={topic} />;
  }

  render() {
    if (!this.props.topic) {
      return <Text>Loading...</Text>;
    }
    return (
      <div>
        <Header>
          <Title>Project Dashboard</Title>
          <Subtitle>UHS Implementation</Subtitle>
        </Header>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderText>ALARMS</TableHeaderText>
              <TableHeaderText>TOPIC</TableHeaderText>
              <TableHeaderText>DUE DATE</TableHeaderText>
              <TableHeaderText>STATUS</TableHeaderText>
              <TableHeaderText>RESPONSES</TableHeaderText>
              <TableHeaderText>TEAM OWNER</TableHeaderText>
            </TableRow>
          </TableHeader>
          <tbody>
            {this.sortById(this.props.topic.records).map((topic, index) =>
              this.renderTopicRow(topic, index)
            )}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Dashboard;
