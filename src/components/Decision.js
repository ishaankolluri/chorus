import React from "react";

// import Graph from "./Graph";
import Overlay from "../img/Overlay.png";

import {
  CHeader,
  Body,
  List,
  GraphHeader,
  CommentHeader,
  ResultsInfo,
  Tally,
  Commenter
} from "../resultTextStyles";
import { Section, ResultsBar } from "../resultContainerStyles";

class Decision extends React.Component {
  generateQuestion() {
    const decision = this.props.response[0];
    const answer = decision.fields.answer;
    if (decision.fields.question_type === "markup") {
      return (
        <Section>
          <CHeader>QUESTION {decision.fields.order}</CHeader>
          <Body>
            <b>{decision.fields.question}</b>
          </Body>
          <div style={{ margin: "auto" }}>
            <img
              style={{
                paddingTop: "20px",
                display: "block",
                margin: "auto",
                width: "780px"
              }}
              src={Overlay}
              alt="Feature Walkthrough"
            />
          </div>
        </Section>
      );
    } else {
      const answers = answer.split(",").map(answer => answer.trim());
      return (
        <div>
          <CHeader>QUESTION {decision.fields.order}</CHeader>
          <Body>
            <b>{decision.fields.question}</b>
          </Body>
          <List>
            {answers.map((answer, index) => {
              return <li key={index}>{answer}</li>;
            })}
          </List>
        </div>
      );
    }
  }

  generateComments = () => {
    const responses = this.props.response[1];
    console.log(responses);
    // const hasComment = responses.every(response => {
    //   response.fields.comment != undefined;
    // });
    // if (!hasComment) {
    //   return;
    // }
    const comments = responses.map((response, index) => {
      if (response.fields.comment === undefined) {
        return;
      }
      const respondent = this.props.contacts.find(contact => {
        return contact.fields.id === response.fields.contact_id;
      });
      return (
        <Body key={index}>
          <Commenter>@{respondent.fields.name}</Commenter> &nbsp;
          {response.fields.comment}
        </Body>
      );
    });
    return (
      <div>
        <br />
        <CommentHeader>COMMENTS</CommentHeader>
        {comments}
      </div>
    );
  };

  generateResults = () => {
    const decision = this.props.response[0];
    if (decision.fields.question_type === "markup") {
      return (
        <Section style={{ backgroundColor: "#f2f0f0" }}>
          <GraphHeader>
            <div style={{ width: "80%", textAlign: "left", float: "left" }}>
              RESULTS
            </div>
            <div style={{ width: "10%", textAlign: "left", float: "left" }}>
              INPUT
            </div>
            <div style={{ width: "10%", textAlign: "left", float: "left" }}>
              <u>APPROVAL</u>
            </div>
          </GraphHeader>
          <div>{this.generateComments()}</div>
        </Section>
      );
    }
    const responses = this.props.response[1];
    const contacts = this.props.contacts;
    const overall = responses.length;
    const numApproved = responses.filter(
      response => response.fields.response === "Approve"
    ).length;
    const numDisapproved = responses.filter(
      response => response.fields.response === "Disapprove"
    ).length;
    const numNotSure = responses.filter(
      response => response.fields.response === "Not sure"
    ).length;
    return (
      <Section>
        <div
          style={{
            backgroundColor: "#f2f0f0",
            padding: "20px"
          }}
        >
          <GraphHeader>
            <div style={{ width: "80%", textAlign: "left", float: "left" }}>
              RESULTS
            </div>
            <div style={{ width: "10%", textAlign: "left", float: "left" }}>
              INPUT
            </div>
            <div style={{ width: "10%", textAlign: "left", float: "left" }}>
              <u>APPROVAL</u>
            </div>
          </GraphHeader>
          <div style={{ paddingBottom: "5px" }}>
            <ResultsInfo>
              Approve &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            </ResultsInfo>
            <ResultsBar
              color="#2eb363"
              percentage={(numApproved / overall) * 100}
            />
            <Tally>
              &nbsp; {numApproved}/{overall}
            </Tally>
          </div>
          <div style={{ paddingBottom: "5px" }}>
            <ResultsInfo>Disapprove &nbsp; &nbsp;</ResultsInfo>
            <ResultsBar
              color="#ff7461"
              percentage={(numDisapproved / overall) * 100}
            />
            <Tally>
              &nbsp; {numDisapproved}/{overall}
            </Tally>
          </div>
          <div style={{ paddingBottom: "5px" }}>
            <ResultsInfo>Not sure &nbsp; &nbsp; &nbsp; &nbsp;</ResultsInfo>
            <ResultsBar
              color="#afb4ba"
              percentage={(numNotSure / overall) * 100}
            />
            <Tally>
              &nbsp; {numNotSure}/{overall}
            </Tally>
          </div>
          {this.generateComments()}
        </div>
        {/* End background grey div */}
      </Section>
    );
  };

  render() {
    return (
      <div>
        {this.generateQuestion()}
        {this.generateResults()}
      </div>
    );
  }
}

export default Decision;
