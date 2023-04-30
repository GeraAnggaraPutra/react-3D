import React from "react";
import styled from "styled-components";
import { Navbar } from "./Navbar";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

export const Hero = () => {
  return (
    <Section>
      <Navbar />
    </Section>
  );
};
