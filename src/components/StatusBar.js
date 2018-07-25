import React from "react";

import { BackIcon, ChevronDownIcon } from "./Icons";

import { TextButton, StatusButton } from "../resultTextStyles";
import {
  Status,
  StatusDiv,
  ActionDiv,
  StatusAction
} from "../resultContainerStyles";

class StatusBar extends React.Component {
  render() {
    return (
      <Status>
        <StatusDiv>
          <BackIcon />
        </StatusDiv>
        <StatusDiv>Decision Summary</StatusDiv>
        <StatusDiv>
          <StatusButton>Published</StatusButton>
        </StatusDiv>
        <ActionDiv>
          <TextButton>Edit</TextButton>
        </ActionDiv>
        <ActionDiv>
          <TextButton>Share</TextButton> &nbsp;&nbsp;<ChevronDownIcon />
        </ActionDiv>
        <StatusAction>Finalize</StatusAction>
      </Status>
    );
  }
}

export default StatusBar;
