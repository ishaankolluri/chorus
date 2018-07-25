import React from "react";

import DashboardRow from "./DashboardRow";

import {
  Subtitle,
  SubtitleRight,
  Text,
  Title,
  TitleRight,
  TableHeaderText,
  ExpansionText
} from "../textStyles";
import {
  Page,
  Container,
  Header,
  HeaderRow,
  Table,
  TableHeader,
  TableRow,
  TitleDiv,
  RightTitleDiv,
  StatisticsContainer,
  QueryDiv
} from "../containerStyles";

import { ArrowBothIcon } from "./Icons";
import Statistics from "./Statistics";
import { FilterButton, SearchBar, HelpButton, ExportButton } from "./Views";

class Dashboard extends React.Component {
  sortById(topics) {
    return topics.sort(function(a, b) {
      return a.fields.id - b.fields.id;
    });
  }

  renderTopicRow(topic, index) {
    const decisions = this.props.decision.records;
    const topicDecisions = decisions.filter(
      decision => decision.fields.topic_id === topic.fields.id
    );
    const topicResults = this.props.result.records.filter(
      result => result.fields.topic_id === topic.fields.id
    );
    const contact = this.props.contact.records.find(
      contact => contact.fields.id === topic.fields.poc
    );
    return (
      <DashboardRow
        key={index}
        topic={topic}
        decisions={topicDecisions}
        results={topicResults}
        contact={contact}
      />
    );
  }

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
      <Page color="#f4f6f8">
        <Container>
          <Header>
            <TitleDiv>
              <Title>Project Dashboard</Title>
              <Subtitle>UHS Implementation</Subtitle>
            </TitleDiv>
            <RightTitleDiv>
              <TitleRight>79 days</TitleRight>
              <SubtitleRight>until go live</SubtitleRight>
            </RightTitleDiv>
          </Header>
          <StatisticsContainer>
            <Statistics
              type="Negative"
              info="2"
              metric="DECISION TOPICS"
              status="overdue"
            />
            <Statistics
              type="Neutral"
              info="13"
              metric="OUT OF 24 RESPONSES"
              status="received"
            />
            <Statistics
              type="Positive"
              info="11%"
              metric="DECISION TOPICS"
              status="started"
            />
            <FilterButton />
            <SearchBar />
            <ExportButton />
            <HelpButton />
          </StatisticsContainer>
          <Table>
            <TableHeader>
              <HeaderRow>
                <TableHeaderText> </TableHeaderText>
                <TableHeaderText>TOPIC</TableHeaderText>
                <TableHeaderText>
                  DUE DATE <ArrowBothIcon />
                </TableHeaderText>
                <TableHeaderText>STATUS</TableHeaderText>
                <TableHeaderText>RESPONSES</TableHeaderText>
                <TableHeaderText>TEAM OWNER</TableHeaderText>
              </HeaderRow>
            </TableHeader>
            <tbody>
              {this.sortById(this.props.topic.records).map((topic, index) =>
                this.renderTopicRow(topic, index)
              )}
              <TableRow>
                <ExpansionText colSpan={6}>
                  Showing 19 of 19 items
                </ExpansionText>
              </TableRow>
            </tbody>
          </Table>
        </Container>
      </Page>
    );
  }
}

export default Dashboard;
