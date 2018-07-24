import styled from "styled-components";

export const Title = styled.h1`
  font-family: "Inter UI";
  color: #464646;
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
`;

export const Subtitle = styled.h2`
  font-family: "Inter UI";
  color: #777677;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
`;

export const TitleRight = Title.extend`
  text-align: right;
  font-weight: 700;
  font-size: 20px;
  line-height: 22px;
`;

export const SubtitleRight = Subtitle.extend`
  text-align: right;
  font-size: 14px;
  line-height: 18px;
  color: #464646;
`;

export const Text = styled.p`
  font-family: "Inter UI";
  color: #171717;
  font-weight: 400;
  font-size: 16px;
`;

export const TableHeaderText = styled.th`
  font-family: "Inter UI";
  font-weight: 700;
  font-size: 12px;
  color: #464646;
  line-height: 16px;
  padding: 10px 10px;
  text-align: left;
  padding-left: 30px;
`;

export const ExpansionText = styled.td`
  font-family: "Inter UI";
  font-weight: 400;
  font-size: 12px;
  color: #777677;
  line-height: 16px;
  text-align: center;
  padding: 15px;
  background-color: #f9f9f9;
`;

export const OverdueText = styled.span`
  color: #e62325;
  font-weight: 700;
  &:hover {
    color: #f1f1f1;
    transition: 0.4s;
    background-color: red;
    cursor: pointer;
  }
`;

export const CountText = styled.div`
  text-align: center;
  margin: auto;
  padding-top: 5px;
  font-size: 11px;
`;
