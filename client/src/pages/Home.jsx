import React from 'react';
import styled from 'styled-components';
import Blogs from '../component/Blogs';
import Category from '../component/Category';
import Footer from '../component/Footer';
import Navbar from '../component/Navbar';
import Newsletter from '../component/Newsletter';
import Products from '../component/Products';
import Sale from '../component/Sale';
import Slider from '../component/Slider';
import { mobile } from "../reponsive";


const Container=styled.div`
    
`
const Title = styled.h1`
  font-family: "Nunito Sans", sans-serif;
  margin-top:150px;
  margin-bottom:20px;
  text-align: center;
  font-size: 4.8rem;
  line-height: 5.4rem;
  color: #af9666;
${mobile({ marginTop: "50px" ,fontSize: "2.4rem"})}

`;

const Home = () => {
  return (
    <Container>
        <Navbar navigation="home"/>
        <Slider/>
        <Category/>
        <Title>Handpicked For You</Title>
        <Products/>
        <Sale/>
        <Title>New Products</Title>
        <Products newProducts="true"/>
        <Newsletter/>
        <Title>Blog</Title>
        <Blogs/>
        <Footer/>
    </Container>
  )
}

export default Home