import React from "react";
import styled from "styled-components";

import ArrowBoth from "../img/arrow-both.svg";
import ArrowDown from "../img/arrow-down.svg";
import ChevronDown from "../img/chevron-down.svg";
import Download from "../img/download.svg";
import Filter from "../img/filter.png";
import Help from "../img/help.svg";
import Logo from "../img/logo.svg";
import Search from "../img/search.svg";
import Male from "../img/Male.png";
import Female from "../img/Female.png";
import Back from "../img/back.svg";

export const ArrowBothIcon = () => {
  return <IconSmall src={ArrowBoth} />;
};

export const BackIcon = () => {
  return <IconLarge src={Back} />;
};

export const ArrowDownIcon = () => {
  return <IconSmall src={ArrowDown} />;
};

export const ChevronDownIcon = props => {
  return <IconSmall src={ChevronDown} {...props} />;
};

export const DownloadIcon = () => {
  return <IconLarge src={Download} />;
};

export const FilterIcon = () => {
  return <IconLarge src={Filter} />;
};

export const HelpIcon = () => {
  return <IconLarge src={Help} />;
};

export const LogoIcon = () => {
  return (
    <LogoContainer>
      <IconLogo src={Logo} />
    </LogoContainer>
  );
};

export const SearchIcon = () => {
  return <IconLarge src={Search} />;
};

export const MaleIcon = () => {
  return <IconLarge src={Male} />;
};

export const FemaleIcon = () => {
  return <IconLarge src={Female} />;
};

const IconSmall = styled.img`
  width: 12px;
  height: 12px;
  color: white;
  &.nav {
    color: #829bae;
  }
`;

// const IconMedium = IconSmall.extend`
//   width: 15px;
//   height: 20px;
// `;

const IconLarge = IconSmall.extend`
  width: 20px;
  height: 20px;
  justify-content: center;
`;

const IconLogo = IconSmall.extend`
  width: 36px;
  height: 36px;
  margin: auto;
`;

const LogoContainer = styled.div`
  float: left;
  padding-top: 15px;
  padding-right: 20px;
`;
