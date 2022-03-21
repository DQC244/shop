import React from "react";
import styled from "styled-components";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { mobile } from "../reponsive";


const Container = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  width: 33.333%;
${mobile({ width: "100%",marginBottom:"50px" })}

`;

const Image = styled.img`
  width: 100%;
  border-radius: 15px;
  cursor: pointer;
`;
const Date = styled.p`
  margin-top: 10px;
  font-size: 1.6rem;
  font-weight: 300;

`;
const Title = styled.p`
  margin-top: 10px;
  font-size: 2rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.25s linear;
${mobile({ fontSize: "1.8rem" })}

  &:hover {
    color: #af9666;
  }
`;
const Infor = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
`;
const Icon = styled.span`
  font-size: 2.2rem;
`;
const Author = styled.p`
  margin-left: 10px;
  font-size: 1.6rem;
  font-weight: 500;
  color: gray;
`;
const Blog = () => {
  return (
    <Container>
        <Image src="https://i.ibb.co/SwNNDQj/blog02-1170x780.jpg" />
        <Date>17.JUNE.2021</Date>
        <Title>Tile Tray With Brass Handles</Title>
        <Infor>
          <Icon>
            <PersonOutlineOutlinedIcon fontSize="inherit" />
          </Icon>
          <Author>suthemes</Author>
        </Infor>
    </Container>
  );
};

export default Blog;
