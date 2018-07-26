import styled from "styled-components";
import Results from "./components/Results";

export const TextButton = styled.div`
  font-family: "Inter UI";
  font-size: 14px;
  line-height: 48px;
  font-weight: 700;
  float: left;
  color: #00a354;
`;

export const StatusButton = styled.div`
  border-radius: 15px;
  justify-content: center;
  position: relative;
  margin-top: 12px;
  color: #ffffff;
  background-color: #495050;
  text-align: center;
  line-height: 16px;
  font-weight: 400;
  padding: 2px 15px 2px 15px;
  border: 1px solid #919eab;
`;

export const Header = styled.p`
  font-family: "Inter UI";
  font-size: 28px;
  line-height: 32px;
  font-weight: 700;
  color: #464646;
`;

export const BHeader = styled.p`
  font-family: "Inter UI";
  font-size: 20px
  font-weight: 700;
  line-height: 28px
  color: #464646;
  margin-bottom: 5px;
`;

export const CHeader = styled.p`
  font-family: "Inter UI";
  font-size: 12px
  font-weight: 700;
  line-height:16px
  color: #777677;
`;

export const Body = styled.p`
  font-family: "Inter UI";
  font-size: 14px;
  line-height: 25px;
  font-weight: 300;
  color: #464646;
  margin: 0 auto;
`;

export const List = styled.ul`
  font-family: "Inter UI";
  font-size: 14px;
  line-height: 25px;
  color: #464646;
  font-weight: 300;
`;

export const GraphHeader = styled.div`
  font-family: "Inter UI";
  width: 100%;
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  color: #777677;
  margin-bottom: 30px;
`;

export const CommentHeader = GraphHeader.extend`
  margin-bottom: 10px;
`;

export const ResultsInfo = styled.div`
  text-align: right;
  font-family: "Inter UI";
  font-size: 14px;
  display: inline;
  font-weight: 400;
`;

export const Tally = ResultsInfo.extend`
  text-align: left;
  color: #464646;
`;

export const Commenter = styled.span`
  font-family: "Inter UI";
  font-size: 14px;
  font-weight: 700
  color: #5392FF;
`;
