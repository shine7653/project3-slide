import React from "react";
import styled from "styled-components";
import SimpleSlider from "./Slider";


const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export default function App() {
  return (
    <AppWrapper>
      <SimpleSlider />
    </AppWrapper>
  );
}
