import styled from "styled-components";

export const ButtonDefault = styled.button`
  width: 90px;
  height: 20px;
  font-family: "Inter UI";
  font-size: 12px;
  line-height: 16px;
  background-color: #f2f4f7;
  border: 1px solid #919eab;
  border-radius: 12px;
  color: #464646;
`;

export const ButtonProgress = ButtonDefault.extend`
  border: 1px solid #edc200;
  background-color: #fdf3d7;
`;

export const ButtonApproved = ButtonDefault.extend`
  border: 1px solid #2eb363;
  background-color: #60b975;
  color: #ffffff;
`;

export const ButtonOverdue = ButtonDefault.extend`
  border: 1px solid #fb5a47;
  background-color: #fb5a47;
  color: #ffffff;
`;

export const ButtonReviewing = ButtonDefault.extend`
  border: 1px solid #60b975;
  background-color: #f9f9f9;
  color: #2eb363;
`;
