import React from "react";

import { Subtitle, Text, Title, TableHeaderText } from "../textStyles";
import {
  Header,
  Table,
  TableHeader,
  TableRow,
  TableColumn
} from "../containerStyles";

class DashboardRow extends React.Component {
  render() {
    const topic = this.props.topic;
    // calculate status and pass it to StatusButton
    // could be a styledComponent
    return (
      <TableRow>
        <TableColumn>{topic.fields.id}</TableColumn>
        <TableColumn>{topic.fields.name}</TableColumn>
        <TableColumn>{topic.fields.deadline}</TableColumn>
        <TableColumn>{topic.fields.deadline}</TableColumn>
        <TableColumn>{topic.fields.deadline}</TableColumn>
        <TableColumn>{topic.fields.deadline}</TableColumn>
      </TableRow>
    );
  }
}

export default DashboardRow;
