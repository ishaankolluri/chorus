import React from "react";
import { Link } from "react-router-dom";

import {
  TableColumn,
  NamedColumn,
  NotificationColumn,
  ContentRow,
  ProgressBar,
  ContactIcon,
  Notification
} from "../containerStyles";
import {
  ButtonDefault,
  ButtonProgress,
  ButtonApproved,
  ButtonReviewing
} from "../buttonStyles";

import { OverdueText, CountText } from "../textStyles";

import { FemaleIcon } from "./Icons";

const moment = require("moment");

class DashboardRow extends React.Component {
  status = () => {
    const topic = this.props.topic;
    let response = <span />;
    if (topic.fields.is_done === "True") {
      response = <ButtonApproved>Approved</ButtonApproved>;
    } else if (this.props.decisions.length === 0) {
      response = <ButtonDefault>Not Started</ButtonDefault>;
    } else if (
      this.props.decisions.every(
        decision => decision.fields.is_complete === "True"
      )
    ) {
      response = <ButtonReviewing>Proposed</ButtonReviewing>;
    } else if (
      this.props.decisions.every(
        decision => decision.fields.is_complete === "False"
      )
    ) {
      response = <ButtonDefault>Not Started</ButtonDefault>;
    } else {
      response = <ButtonProgress>Survey Sent</ButtonProgress>;
    }
    return response;
  };

  progress = () => {
    let response = <span />;
    let count = <span />;
    const len = this.props.decisions.length;
    if (len === 0) {
      return (
        <ProgressBar percentage={0}>
          <div />
        </ProgressBar>
      );
    }
    let numCompletions = 0;
    for (let i = 0; i < len; i++) {
      if (this.props.decisions[i].fields.is_complete === "True") {
        numCompletions++;
      }
    }
    const percentage = (numCompletions / len) * 100;
    response = (
      <ProgressBar percentage={percentage}>
        <div />
      </ProgressBar>
    );

    if (this.props.decisions.length !== 0) {
      const len = this.props.decisions.length;
      const complete = this.props.decisions.filter(
        decision => decision.fields.is_complete === "True"
      ).length;
      count = (
        <CountText>
          {complete} out of {len}
        </CountText>
      );
    }
    return (
      <div>
        {response}
        {count}
      </div>
    );
  };

  notification = () => {
    if (this.props.results.length === 0) {
      return <div />;
    }
    const unseenResult = this.props.results.find(
      result => result.fields.seen === "False"
    );
    if (unseenResult) {
      return <Notification />;
    }
    return <div />;
  };

  contactInfo = () => {
    const [first, last] = this.props.contact.fields.name.split(" ");
    const initials = `${first.charAt(0)}${last.charAt(0)}`.toUpperCase();
    return <ContactIcon>{initials}</ContactIcon>;
  };

  deadline = () => {
    const deadlineDate = new Date(this.props.topic.fields.deadline);
    const formattedDate = moment(deadlineDate).format("MM/DD/YYYY");
    if (new Date() > deadlineDate) {
      return (
        <OverdueText>
          {moment(new Date()).diff(moment(deadlineDate), "days")} days overdue
        </OverdueText>
      );
    } else {
      return formattedDate;
    }
  };

  render() {
    const topic = this.props.topic;
    return (
      <ContentRow>
        <NotificationColumn>{this.notification()}</NotificationColumn>
        <NamedColumn> {topic.fields.name}</NamedColumn>
        <TableColumn>{this.deadline()}</TableColumn>
        <TableColumn>
          <Link
            to="/results"
            style={{ textDecoration: "none", position: "relative" }}
          >
            {this.status()}
          </Link>
        </TableColumn>
        <TableColumn>{this.progress()}</TableColumn>
        <TableColumn>
          <FemaleIcon />
        </TableColumn>
      </ContentRow>
    );
  }
}

export default DashboardRow;
