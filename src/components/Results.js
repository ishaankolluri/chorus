import React from "react";

import { Text } from "../textStyles";

import StatusBar from "./StatusBar";
import {
  ResultsPage,
  ProposalContainer,
  Section
} from "../resultContainerStyles";
import { Header, BHeader, CHeader, Body } from "../resultTextStyles";

class Results extends React.Component {
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
    console.log(contacts);
    const participants = contacts.map((contact, index) => {
      return <Body key={index}>{contact.fields.name}</Body>;
    });
    console.log(participants);
    return participants;
  };

  render() {
    return (
      <div>
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
