import React from "react";

import Decision from "./Decision";
import { Text } from "../textStyles";

import StatusBar from "./StatusBar";
import {
  ResultsPage,
  ProposalContainer,
  Section
} from "../resultContainerStyles";
import { Header, BHeader, CHeader, Body } from "../resultTextStyles";

import Overlay from "../img/Overlay.png";

class Results extends React.Component {
  sortById(decisions) {
    return decisions.sort(function(a, b) {
      return a.fields.id - b.fields.id;
    });
  }

  decisions = () => {
    const topic = this.props.topic.records.find(
      record => record.fields.id === 3
    ); // Patient Timeline
    const decisions = this.props.decision.records.filter(decision => {
      return decision.fields.topic_id === topic.fields.id;
    });
    const results = this.props.result.records.filter(result => {
      return result.fields.topic_id === topic.fields.id;
    });
    const contacts = this.props.contact.records;
    return this.sortById(decisions).map((decision, index) => {
      // Create [{decision}, [{result},{result}...]] array for each decision
      const feedback = results.filter(result => {
        return result.fields.decision_id === decision.fields.id;
      });
      const response = [decision, feedback];
      // console.log(response);
      return <Decision key={index} response={response} contacts={contacts} />;
    });
  };

  render() {
    const isLoading =
      !this.props.topic ||
      !this.props.decision ||
      !this.props.contact ||
      !this.props.result;
    if (isLoading) {
      return <Text>Loading...</Text>;
    }
    return (
      <div>
        <ResultsPage color="#495050">
          <StatusBar />
          <ProposalContainer>
            <Section>
              <Header>Decision Summary</Header>
            </Section>
            <Detail contacts={this.props.contact.records} />
            <Section>
              <BHeader>Scenario</BHeader>
              <Body>
                You are a primary care physician who has arrived at the clinic
                in the morning. You want to review your patient’s visit history
                before seeing him/her.
              </Body>
            </Section>
            <Section>
              <BHeader>Feature Overview</BHeader>
              <Body>
                The Patient Timeline is a high-level overview of a patient’s
                past and upcoming visits. You can use it to quickly see a
                patient’s history, such as specific Health Issues and Providers
                who treated, within your healthcare network.
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
            <Section>
              <Header>Decision Overview</Header>
              {this.decisions()}
            </Section>
          </ProposalContainer>
        </ResultsPage>
      </div>
    );
  }
}

class Detail extends React.Component {
  participants = () => {
    const contacts = this.props.contacts.slice(0, 3);
    const participants = contacts.map((contact, index) => {
      return <Body key={index}>{contact.fields.name}</Body>;
    });
    return participants;
  };

  render() {
    return (
      <div>
        <div
          style={{ paddingLeft: "120px", paddingRight: "120px", width: "100%" }}
        />
        <Section>
          <div>
            <BHeader>Responses</BHeader>
          </div>
          <div style={{ width: "30%", float: "left" }}>
            <Body>
              <b>4/6 responses</b>
            </Body>
          </div>
          <div style={{ width: "30%", float: "left" }}>
            <CHeader>DATE SUBMITTED</CHeader>
            <Body>7/12/2018</Body>
          </div>
          <div style={{ width: "40%", float: "left" }}>
            <CHeader>RESPONDENTS</CHeader>
            {this.participants()}
          </div>
        </Section>
        <Section>
          <div>
            <BHeader>Background</BHeader>
          </div>
          <div style={{ width: "30%", float: "left" }}>
            <CHeader>MEETING TOPIC</CHeader>
            <Body>Patient Timeline</Body>
          </div>
          <div style={{ width: "30%", float: "left" }}>
            <CHeader>MEETING DATE</CHeader>
            <Body>7/15/2018</Body>
          </div>
          <div style={{ width: "40%", float: "left" }}>
            <CHeader>RESPONDENTS</CHeader>
            {this.participants()}
          </div>
        </Section>
      </div>
    );
  }
}

export default Results;
