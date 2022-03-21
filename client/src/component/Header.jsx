import React from "react";
import styled from "styled-components";
import { mobile } from "../reponsive";


const Container = styled.div`
  margin-top: 100px;

`;
const Wrapper = styled.div`
  height: 150px;
  background-image: url("https://i.ibb.co/dQwDpFx/soap-slider-2-1536x832.jpg");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
${mobile({ height: "100px" })}

`;
const Overlay = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`;
const PageTitle = styled.h3`
  font-family: "Redressed", cursive;
  font-size: 4.8rem;
  font-weight: 300;
  color: white;
  z-index: 1;
  word-spacing: 15px;
${mobile({ fontSize: "2.4rem" })}

`;

const Header = ({ title }) => {
  return (
    <Container>
      <Wrapper>
        <Overlay></Overlay>
        <PageTitle>{title}</PageTitle>
      </Wrapper>
    </Container>
  );
};

export default Header;
