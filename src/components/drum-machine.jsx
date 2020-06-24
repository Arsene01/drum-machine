import React from "react";
import styled from "styled-components";

const bankOne = [
  "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
];

const bankTwo = [
  "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"
];
const DrumStyle = styled.div`
  margin: 10% auto 0;
  background-color: #bbbbbb;
  border: 4px solid #cc3333;
  max-width: 600px;
  min-height: 360px;
`;
const Logo = styled.p`
  margin: 0;
  padding: 5px;
  height: 30px;
  text-align: right;
`;
const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Pads = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 330px;
  height: 100%;
  background-color: #33dd33;
`;
const ConfigPanel = styled.div`
  width: 210px;
  height: 100%;
  background-color: #3333dd;
`;
const DrumPad = styled.div`
  width: 100px;
  height: 100px;
  margin: 5px 0;
  border-radius: 4px;
  background-color: #777777;
`;
const Switch = styled.div`
  width: 60px;
  height: 25px;
  background-color: black;
`;
const Display = styled.div`
  width: 210px;
  height: 50px;
  background-color: #gray;
`;
const Range = styled.div`
  background-color: #3333dd;
`;
export function DrumMachine() {
  return (
    <DrumStyle>
      <Logo>FCC</Logo>
      <FlexContainer>
        <Pads>
          {["Q", "W", "E", "A", "S", "D", "Z", "X", "C"].map(l => {
            return <DrumPad id={l}>{l}</DrumPad>;
          })}
        </Pads>
        <ConfigPanel>
          <Switch />
          <Display />
          <Range />
          <Switch />
        </ConfigPanel>
      </FlexContainer>
    </DrumStyle>
  );
}
