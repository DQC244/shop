import React, { useState } from "react";
import styled from "styled-components";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { mobile } from "../reponsive";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  ${mobile({ height: "50vh", marginTop: "100px" })}
  position: relative;
  overflow: hidden;

`;
const Arrow = styled.div`
  position: absolute;
  z-index: 10;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  left: ${(props) => props.direction === "left" && "20px"};
  right: ${(props) => props.direction === "right" && "20px"};
  transition: all 0.25s linear;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
`;
const Wrapper = styled.div`
  display: flex;
  height: 100%;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  transition: all 0.3s ease-in;
`;
const Slide = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
const Image = styled.img`
  width: 100vw;
  height: 100%;
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-family: "Redressed", cursive;
  font-size: 7rem;
  line-height: 7.5rem;
  ${mobile({ fontSize: "3.6rem", lineHeight: "4rem" })}

  text-transform: capitalize;
  color: white;
`;
const Desc = styled.p`
  font-size: 3rem;
  line-height: 3.5rem;
  ${mobile({ fontSize: "1.6rem", lineHeight: "1.6rem" })}

  color: white;
  margin-top: 20px;
`;
const Button = styled.button`
  margin-top: 40px;
  border: 1px solid white;
  border-radius: 5px;
  background-color: transparent;
  font-size: 2rem;
  font-weight: 400;
  color: white;
  width: 200px;
  height: 60px;
  ${mobile({ width: "150px", height: "40px", fontSize: "1.4rem" })}
  cursor: pointer;
`;
const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (dir) => {
    if (dir === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 1);
    } else {
      setSlideIndex(slideIndex < 1 ? slideIndex + 1 : 0);
    }
  };
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowBackIosOutlinedIcon />
      </Arrow>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowForwardIosOutlinedIcon />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        <Slide>
          <Image src="https://i.ibb.co/dQwDpFx/soap-slider-2-1536x832.jpg" />
          <Info>
            <Title>for friends & family</Title>
            <Desc>Made with love and passion</Desc>
            <Button>Shop Now</Button>
          </Info>
        </Slide>
        <Slide>
          <Image src="https://i.ibb.co/JKbWBqh/soap-slider-1-1536x832.jpg" />
          <Info>
            <Title>for friends & family</Title>
            <Desc>Made with love and passion</Desc>
            <Button>Shop Now</Button>
          </Info>
        </Slide>
      </Wrapper>
    </Container>
  );
};

export default Slider;
