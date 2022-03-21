import React from "react";
import styled from "styled-components";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import { mobile } from "../reponsive";

const Container = styled.div`
  margin-top: 40px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const Item = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
${mobile({ padding: "5px" })}

`;
const Icon = styled.div`
  color: #af9666;
  font-size: 4.8rem;
  line-height: 5.4rem;
`;
const Title = styled.h1`
  font-family: "Redressed", cursive;
  text-align: center;
  font-size: 2.6rem;
  font-weight: 400;
  color: #252525;
  ${mobile({ fontSize: "1.8rem" })}
`;
const Desc = styled.p`
  font-size: 1.6rem;
  ${mobile({ fontSize: "1.4rem" })}

  color: gray;
  text-align: center;
`;

const Category = () => {
  return (
    <Container>
      <Item>
        <Icon>
          <FavoriteBorderOutlinedIcon fontSize="inherit" />
        </Icon>
        <Title>Find something you love</Title>
        <Desc>Our marketplace is a world of vintage and handmade goods</Desc>
      </Item>
      <Item>
        <Icon>
          <StarBorderOutlinedIcon fontSize="inherit" />
        </Icon>
        <Title>Meet talented artisans</Title>
        <Desc>Our marketplace is a world of vintage and handmade goods</Desc>
      </Item>
      <Item>
        <Icon>
          <StorefrontOutlinedIcon fontSize="inherit" />
        </Icon>
        <Title>Buy and sell with confidence</Title>
        <Desc>Our marketplace is a world of vintage and handmade goods</Desc>
      </Item>
    </Container>
  );
};

export default Category;
