import React from "react";
import styled from "styled-components";
import Blog from "./Blog";
import { mobile } from "../reponsive";


const Container = styled.div`
  margin: 0 40px;
${mobile({ margin: "0px 15px" })}
  
`;

const Wrapper = styled.div`
  margin-left: -15px;
  margin-right: -15px;
  display: flex;
  flex-wrap: wrap;
`;

const Blogs = () => {
  return (
    <Container>
      <Wrapper>
        <Blog />
        <Blog />
        <Blog />
      </Wrapper>
    </Container>
  );
};

export default Blogs;
