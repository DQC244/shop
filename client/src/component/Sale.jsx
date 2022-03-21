import React from "react";
import styled from "styled-components";
import { mobile } from "../reponsive";

const Container = styled.div`
  margin-top: 150px;
  padding: 0 20px;
  width: 100%;
  background-color: linen;
  display: flex;
  align-items: center;
  ${mobile({ marginTop: "50px", flexDirection: "column" })}
`;
const Image = styled.img`
  width: 50%;
  padding: 30px;
  animation: upDown 5s infinite;
  ${mobile({ width: "100%" })}
`;
const Content = styled.div`
  width: 35%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  ${mobile({ width: "100%" })}
`;
const Title = styled.h1`
  margin-top: 20px;
  font-size: 3.6rem;
  font-weight: 400;
  line-height: 4rem;
  color: #333;
  ${mobile({ fontSize: "2.4rem", lineHeight: "2.4rem" })}
`;
const Desc = styled.p`
  margin-top: 20px;
  font-size: 1.6rem;
  color: gray;
  ${mobile({ fontSize: "1.4rem", marginTop: "10px" })}
`;
const Button = styled.button`
  margin-top: 20px;
  width: 200px;
  height: 40px;
  background-color: black;
  color: white;
  font-weight: 600;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.25s linear;
  &:hover {
    background-color: white;
    color: black;
  }
  ${mobile({ fontSize: "1.4rem", margin: "10px 0px" })}
`;

const Sale = () => {
  return (
    <Container>
      <Image src="https://i.ibb.co/N3JsvRf/countdown-img-600x339.png" />
      <Content>
        <Title>Deal Of The Day</Title>
        <Desc>
          Years of experience brought about by our skilled craftsmen could
          ensure that every piece produced is a work of art. Our focus is always
          the best quality possible.
        </Desc>
        <Button>SHOP NOW</Button>
      </Content>
    </Container>
  );
};

export default Sale;
