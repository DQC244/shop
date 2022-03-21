import React from "react";
import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import { mobile } from "../reponsive";


const Container = styled.div`
  margin-top: 150px;
  height: 300px;
  background-color: #695245;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
${mobile({ height: "250px",marginTop:"50px" })}

`;
const Logo = styled.p`
  font-family: "Nunito Sans", sans-serif;
  font-size: 4.8rem;
  font-weight: 700;
  color: white;
`;
const List = styled.ul`
  margin-top: 30px;
  color: white;
  list-style: none;
  display: flex;
  align-items: center;
`;
const ListItem = styled.li`
  font-size: 1.6rem;
  font-weight: 300;
  margin-left: 20px;
  cursor: pointer;
  transition: all 0.25s linear;
  &:hover {
    color: #af9666;
  }
`;
const Social = styled.div`
  margin-top: 40px;
  display: flex;
`;
const Icon = styled.span`
  margin-right: 25px;
  font-size: 2.4rem;
  color: white;
  cursor:pointer;
  transition: all 0.25s linear;
  &:hover {
    color: #af9666;
  }
`;

const Footer = () => {
  return (
    <Container>
      <Logo>DQC</Logo>
      <List>
        <ListItem>Shipping & Delivery</ListItem>
        <ListItem>Policy</ListItem>
        <ListItem>Track Your Order</ListItem>
      </List>
      <Social>
        <Icon>
          <FacebookIcon fontSize="inherit"/>
        </Icon>
        <Icon>
          <TwitterIcon fontSize="inherit"/>
        </Icon>
        <Icon>
          <InstagramIcon fontSize="inherit"/>
        </Icon>
        <Icon>
          <PinterestIcon fontSize="inherit"/>
        </Icon>
      </Social>
    </Container>
  );
};

export default Footer;
