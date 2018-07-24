import React from "react";

import styled from "styled-components";

class Statistics extends React.Component {
  render() {
    const info = <InfoText>{this.props.info}</InfoText>;
    const metric = <MetricText>{this.props.metric}</MetricText>;
    const status = <StatusText>{this.props.status}</StatusText>;
    if (this.props.type === "Positive") {
      return (
        <PositiveStat>
          {info}
          <br />
          {metric}
          <br />
          {status}
        </PositiveStat>
      );
    } else if (this.props.type === "Negative") {
      return (
        <NegativeStat>
          {info}
          <br />
          {metric}
          <br />
          {status}
        </NegativeStat>
      );
    } else {
      return (
        <NeutralStat>
          {info}
          <br />
          {metric}
          <br />
          {status}
        </NeutralStat>
      );
    }
  }
}

const StatBox = styled.div`
  width: 232px;
  height: 180px;
  padding-top: 30px;
  text-align: center;
  margin-bottom: 20px;
  cursor: pointer;
`;

const NegativeStat = StatBox.extend`
  float: left;
  border: 1px solid #e62325;
  background-color: #f6e2e2;
  margin-right: 20px;
`;

const NeutralStat = StatBox.extend`
  border: 1px solid #e3bc13;
  background-color: #fef7e0;
  float: left;
`;

const PositiveStat = StatBox.extend`
  border: 1px solid #00aa5e;
  background-color: #c7f1cb;
  float: right;
`;

const InfoText = styled.span`
  font-family: "Inter UI";
  font-weight: 700;
  color: #464646;
  font-size: 54px;
`;

const MetricText = styled.span`
  font-size: 12px;
  line-height: 25px;
  font-family: "Inter UI";
  font-weight: 700;
`;

const StatusText = styled.span`
  font-size: 28px;
  line-height: 32px;
  font-family: "Inter UI";
  font-weight: 700;
  color: #464646;
`;
export default Statistics;
