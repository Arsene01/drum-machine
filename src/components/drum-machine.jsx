import React from "react";
import styled from "styled-components";

const DrumStyle = styled.div`
  margin: 10% auto 0;
  background-color: #bbbbbb;
  border: 4px solid #cc3333;
  max-width: 600px;
  min-height: 360px;
`;
const Logo = styled.p`
  margin: 0;
  padding: 0;
  text-align: right;
`;
const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Pads = styled.div`
  display: flex;
  justify-content: space-between;
`;
export function DrumMachine() {
  return (
    <DrumStyle>
      <Logo>FCC</Logo>
      <FlexContainer>
        <div></div>
        <div></div>
      </FlexContainer>
    </DrumStyle>
  );
}
