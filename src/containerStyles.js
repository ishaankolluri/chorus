import styled from "styled-components";

// App level CSS

export const Page = styled.div`
  background: #f4f6f8;
  padding-bottom: 100px;
`;

export const Nav = styled.div`
  background-color: #1c496d;
  margin-bottom: 10px;
  height: 72px;
`;

// Nav level CSS

export const NavContent = styled.div`
  width: 870px;
  height: 72px;
  margin: auto;
  font-family: "Inter UI";
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  color: #829bae;
`;

export const NavItem = styled.div`
  width: 130px;
  height: 72px;
  line-height: 72px;
  font-weight: 400;
  color: #829bae;
  text-align: center;
  float: left;
  &.active {
    color: #ffffff;
    background-color: #a6defa;
  }
  &:hover {
    color: #ffffff;
    cursor: pointer;
  }
`;

export const ExpandedNav = NavItem.extend`
  margin-left: 140px;
  width: 150px;
`;

export const NavProfile = NavItem.extend`
  margin-top: 5px;
`;

export const Container = styled.div`
  width: 830px;
  margin: auto;
  background-color: #fafafa;
  box-shadow: 2px 4px 2px 2px #d8d8d8;
  border-radius: 4px;
  padding: 20px;
`;

export const QueryDiv = styled.div`
  width: 90%;
  margin: auto;
  padding-bottom: 50px;
`;

// Stats CSS

export const StatisticsContainer = styled.div`
  width: 90%;
  margin: auto;
`;

export const Header = styled.div`
  padding: 50px 44px 150px 44px;
  margin: auto;
`;

export const TitleDiv = styled.div`
  width: 50%;
  float: left;
`;
export const RightTitleDiv = TitleDiv.extend`
  padding-top: 20px;
`;

export const Table = styled.table`
  padding: 0px;
  width: 90%;
  margin: auto;
  border: 1px solid #d8d8d8;
  border-collapse: collapse;
  background-color: #ffffff;
  box-shadow: 1px 1px 1px 1px #d8d8d8;
`;

export const TableHeader = styled.thead`
  background-color: #f3f3f3;
  border-radius: 4px 4px 0px 0px;
  width: 100%;
`;

export const TableRow = styled.tr`
  font-family: "Inter UI";
  font-weight: 400px;
`;

export const HeaderRow = TableRow.extend`
  padding: 10px 0px 10px 0px;
`;

export const ContentRow = TableRow.extend`
  &:hover {
    cursor: pointer;
    transition: 0.2s;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }
`;

export const TableColumn = styled.td`
  font-family: "Inter UI";
  font-weight: 400;
  font-size: 12px;
  color: #464646;
  line-height: 16px;
  width: 100%;
  padding: 16px 30px 16px 30px;
  border-bottom: 1px solid #f3f3f3;
`;

export const NamedColumn = TableColumn.extend`
  padding: 16px 10px 16px 25px;
`;

export const NotificationColumn = TableColumn.extend`
  width: 5px;
  padding: 16px 5px 16px 20px;
`;

export const ProgressBar = styled.div`
  border: 1px solid #d8d8d8;
  border-radius: 5px;
  width: 56px;
  height: 10px;
  > div {
    background-color: #acc0ef;
    width: ${props => props.percentage}%;
    height: 10px;
    border-radius: ${props =>
      props.percentage === 100 ? "5px" : "5px 0px 0px 5px"};
  }
`;

export const ContactIcon = styled.div`
  float: right;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  font-size: 12px;
  color: #ffffff;
  line-height: 24px;
  text-align: center;
  background: #86c7d2;
`;

export const ContactNav = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  font-size: 12px;
  color: #ffffff;
  line-height: 24px;
  text-align: center;
  background: #86c7d2;
`;

export const Notification = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #a8c0f3;
  margin: auto;
`;

export const Copyright = styled.div`
  text-align: center;
  font-size: 12px;
  line-height: 16px;
  padding-top: 30px;
  font-family: "Inter UI";
  font-weight: 400;
  color: #777677;
`;
