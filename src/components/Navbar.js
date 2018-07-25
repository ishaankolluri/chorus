import React from "react";

import {
  Nav,
  NavContent,
  NavItem,
  ExpandedNav,
  NavProfile
} from "../containerStyles";

import { LogoIcon, ChevronDownIcon, FemaleIcon } from "./Icons";

class Navbar extends React.Component {
  render() {
    return (
      <Nav>
        <NavContent>
          <LogoIcon />
          <NavItem>Tracker</NavItem>
          <NavItem>Sessions</NavItem>
          <NavItem>
            Resources <ChevronDownIcon color="ffffff" />
          </NavItem>
          <ExpandedNav>
            North Hills Clinic <ChevronDownIcon color="ffffff" />
          </ExpandedNav>
          <NavProfile>
            <FemaleIcon />
          </NavProfile>
        </NavContent>
      </Nav>
    );
  }
}

export default Navbar;
