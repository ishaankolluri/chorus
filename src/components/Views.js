import React from "react";
import styled from "styled-components";

import { FilterIcon, SearchIcon, HelpIcon, DownloadIcon } from "./Icons";

export class FilterButton extends React.Component {
  render() {
    return (
      <FilterContainer>
        <FilterIcon /> &nbsp;View
      </FilterContainer>
    );
  }
}

export class ExportButton extends React.Component {
  render() {
    return (
      <RightContainer>
        <DownloadIcon /> &nbsp;Export
      </RightContainer>
    );
  }
}

export class HelpButton extends React.Component {
  render() {
    return (
      <RightContainer>
        <HelpIcon /> &nbsp;Help
      </RightContainer>
    );
  }
}

export class SearchBar extends React.Component {
  render() {
    return (
      <SearchContainer>
        <SearchIcon />
        &nbsp;Search
      </SearchContainer>
    );
  }
}

const FilterContainer = styled.button`
  width: 90px;
  height: 40px;
  margin-bottom: 15px;
  float: left;
  font-family: "Inter UI";
  font-size: 14px;
  line-height: 40ox;
  font-weight: 500;
  color: #464646;
  background-color: #ffffff;
  box-shadow: 0px 3px 3px 0px #c7cfda;
  border: 1px solid #c7cfda;
  border-radius: 4px;
  margin-right: 10px;
  text-align: center;
  display: table-cell;
  vertical-align: middle;
  &:hover {
    box-shadow: 1px 5px 5px 0px #c7cfda;
    transition: 0.7s;
  }
`;

const RightContainer = FilterContainer.extend`
  float: right;
  margin-left: 10px;
  margin-right: 0px;
`;

const SearchContainer = styled.button`
  text-align: left;
  float: left;
  font-size: 14px;
  width: 400px;
  height: 40px;
  font-family: "Inter UI";
  font-weight: 400;
  color: #777677;
  background-color: #ffffff;
  border-radius: 4px;
`;
