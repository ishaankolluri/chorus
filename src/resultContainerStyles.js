import styled from "styled-components";

import { Page } from "./containerStyles";

export const ResultsPage = Page.extend`
  padding-top: 200px;
`;
export const Status = styled.div`
  background-color: #ffffff;
  height: 48px;
  width: 100%;
  position: fixed;
  top: 72px;
  font-family: "Inter UI";
  font-size: 14px;
  color: #6f7378;
  font-weight: 700;
  line-height: 48px;
  padding: 0px 210px 0px 210px;
  text-align: center;
`;

export const StatusDiv = styled.div`
  float: left;
  margin-right: 32px;
`;

export const ActionDiv = StatusDiv.extend`
  margin-left: 10px;
`;

export const StatusAction = StatusDiv.extend`
  background-color: #00aa5e;
  color: white;
  padding: 0px 10px 0px 10px;
  font-weight: 400;
  margin-left: 400px;
`;

export const ProposalContainer = styled.div`
  width: 992px;
  height: 5194px;
  background-color: #ebf0f6;
  margin: auto;
  padding: 56px 104px;
`;

export const Section = styled.div`
  padding: 20px 0px 60px 0px;
  width: 100%;
`;
