import React from "react";
import styled from "styled-components";
import SendIcon from "@mui/icons-material/Send";
import { mobile } from "../reponsive";


const Container = styled.div`
  margin-top: 150px;
  padding:100px;
  width: 100%;
  background-color: linen;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
${mobile({ marginTop: "50px",padding:"50px" })}

`;
const Title = styled.h1`
  font-size: 4.8rem;
  font-weight: 300;
  color: #333;
${mobile({ fontSize: "2.4rem" })}

`;
const Desc = styled.p`
  margin-top: 10px;
  font-size: 1.6rem;
  text-align: center;
  color: gray;
${mobile({ fontSize: "1.4rem" })}

`;
const Form = styled.form`
  margin-top: 40px;
  width: 40%;
  display: flex;
  border-bottom: 2px solid black;
${mobile({ width: "100%" })}

`;
const Input = styled.input`
  padding: 10px 0;
  flex: 1;
  border: none;
  outline: none;
  background-color: linen;
  font-size: 1.4rem;
  font-weight: 600;
  text-align: center;
  color: gray;
`;
const Button = styled.button`
  border: none;
  padding: 5px 0px 5px 5px;
  color: black;
  font-size: 2.4rem;
  font-weight: 400;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    color: teal;
  }
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Let's Be Friends</Title>
      <Desc>
        Subscribe to receive updates, access to exclusive deals, and more
      </Desc>
      <Form>
        <Input />
        <Button>
          <SendIcon fontSize="inherit" />
        </Button>
      </Form>
    </Container>
  );
};

export default Newsletter;
