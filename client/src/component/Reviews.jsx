import React from "react";
import styled from "styled-components";
import StarIcon from "@mui/icons-material/Star";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import { mobile } from "../reponsive";


const Container = styled.div`
  margin: 0 40px;
  font-size: 1.4rem;
${mobile({ margin: "0px 15px" })}

`;
const Title = styled.h1`
  font-size: 2.4rem;
  color: #333;
  font-weight: 500;
  text-align: center;
  text-decoration: underline;
`;
const Wrapper = styled.div`
  height: 450px;
  margin-top: 20px;
  padding: 20px;
  border: 1px solid lightgray;
  border-radius: 5px;
  display: flex;
${mobile({ flexDirection: "column",height:"unset",padding:"0",border:"none" })}

  
`;
const ItemContainer = styled.div`
  height: 100%;
  overflow: auto;
  flex: 3;
  box-shadow: inset 0 -10px 5px -10px #000000;
${mobile({ boxShadow: "none" })}

`;
const ReviewItem = styled.div`
  margin-bottom: 20px;
  margin-right: 20px;
  padding:15px 0 15px 15px;
  display: flex;
  align-items: center;
${mobile({ padding: "0",marginRight: "0"})}

  `;
const Avatar = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
  `;
const DescContainer = styled.div`
  flex: 1;
  margin-left: 15px;
  padding: 15px;
  background-color: rgb(245,245,245);
  border-radius:15px;
${mobile({ marginLeft: "5px" })}

`;
const Evaluated = styled.p``;
const Name = styled.span`
  font-size: 1.6rem;
  font-weight: 500;
  color: #333;
`;
const Time = styled.span`
  margin-left: 5px;
  color: lightgray;
  font-weight: 400;
`;
const Desc = styled.p`
  margin-top: 10px;
  color: gray;
`;
const WriteReview = styled.div`
  height: 100%;
  padding-left: 20px;
  flex: 1;
${mobile({ padding: "0" })}

`;
const WriteReviewTitle = styled.p`
  font-size: 2.4rem;
  font-weight: 300;
`;

const Label = styled.p`
  margin-top: 20px;
  font-size: 1.6rem;
  font-weight: 400;
  color: #333;
`;
const Input = styled.input`
  padding: 10px;
  width: 100%;
  color: gray;

  outline: none;
  border: 0.5px solid lightgray;
  border-radius: 5px;
`;
const ReviewInput = styled.textarea`
  padding: 5px 10px;
  width: 100%;
  min-height: 80px;
  color: gray;
  outline: none;
  border-radius: 5px;
  border: 0.5px solid lightgray;
`;
const Button = styled.button`
  padding: 10px 20px;
  background-color: #af9666;
  color: white;
  border: none;
  cursor: pointer;
`;
const Reviews = () => {
  return (
    <Container>
      <Title>Reviews</Title>
      <Wrapper>
        <ItemContainer>
          <ReviewItem>
            <Avatar src="https://i.ibb.co/SwNNDQj/blog02-1170x780.jpg" />
            <DescContainer>
              <Evaluated>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </Evaluated>
              <Name>Cristiano Ronaldo</Name>
              <Time>- November 10, 2017</Time>
              <Desc>
                Coupling a blended linen construction with tailored style, the
                River Island HR Jasper Blazer will imprint a touch of dapper
                charm into your after dark wardrobe.
              </Desc>
            </DescContainer>
          </ReviewItem>
          <ReviewItem>
            <Avatar src="https://i.ibb.co/SwNNDQj/blog02-1170x780.jpg" />
            <DescContainer>
              <Evaluated>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </Evaluated>
              <Name>Cristiano Ronaldo</Name>
              <Time>- November 10, 2017</Time>
              <Desc>
                Coupling a blended linen construction with tailored style, the
                River Island HR Jasper Blazer will imprint a touch of dapper
                charm into your after dark wardrobe.
              </Desc>
            </DescContainer>
          </ReviewItem>
          <ReviewItem>
            <Avatar src="https://i.ibb.co/SwNNDQj/blog02-1170x780.jpg" />
            <DescContainer>
              <Evaluated>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </Evaluated>
              <Name>Cristiano Ronaldo</Name>
              <Time>- November 10, 2017</Time>
              <Desc>
                Coupling a blended linen construction with tailored style, the
                River Island HR Jasper Blazer will imprint a touch of dapper
                charm into your after dark wardrobe.
              </Desc>
            </DescContainer>
          </ReviewItem>
          <ReviewItem>
            <Avatar src="https://i.ibb.co/SwNNDQj/blog02-1170x780.jpg" />
            <DescContainer>
              <Evaluated>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </Evaluated>
              <Name>Cristiano Ronaldo</Name>
              <Time>- November 10, 2017</Time>
              <Desc>
                Coupling a blended linen construction with tailored style, the
                River Island HR Jasper Blazer will imprint a touch of dapper
                charm into your after dark wardrobe.
              </Desc>
            </DescContainer>
          </ReviewItem>
          <ReviewItem>
            <Avatar src="https://i.ibb.co/SwNNDQj/blog02-1170x780.jpg" />
            <DescContainer>
              <Evaluated>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </Evaluated>
              <Name>Cristiano Ronaldo</Name>
              <Time>- November 10, 2017</Time>
              <Desc>
                Coupling a blended linen construction with tailored style, the
                River Island HR Jasper Blazer will imprint a touch of dapper
                charm into your after dark wardrobe.
              </Desc>
            </DescContainer>
          </ReviewItem>
          <ReviewItem>
            <Avatar src="https://i.ibb.co/SwNNDQj/blog02-1170x780.jpg" />
            <DescContainer>
              <Evaluated>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </Evaluated>
              <Name>Cristiano Ronaldo</Name>
              <Time>- November 10, 2017</Time>
              <Desc>
                Coupling a blended linen construction with tailored style, the
                River Island HR Jasper Blazer will imprint a touch of dapper
                charm into your after dark wardrobe.
              </Desc>
            </DescContainer>
          </ReviewItem>
          <ReviewItem>
            <Avatar src="https://i.ibb.co/SwNNDQj/blog02-1170x780.jpg" />
            <DescContainer>
              <Evaluated>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </Evaluated>
              <Name>Cristiano Ronaldo</Name>
              <Time>- November 10, 2017</Time>
              <Desc>
                Coupling a blended linen construction with tailored style, the
                River Island HR Jasper Blazer will imprint a touch of dapper
                charm into your after dark wardrobe.
              </Desc>
            </DescContainer>
          </ReviewItem>
          <ReviewItem>
            <Avatar src="https://i.ibb.co/SwNNDQj/blog02-1170x780.jpg" />
            <DescContainer>
              <Evaluated>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </Evaluated>
              <Name>Cristiano Ronaldo</Name>
              <Time>- November 10, 2017</Time>
              <Desc>
                Coupling a blended linen construction with tailored style, the
                River Island HR Jasper Blazer will imprint a touch of dapper
                charm into your after dark wardrobe.
              </Desc>
            </DescContainer>
          </ReviewItem>
          <ReviewItem>
            <Avatar src="https://i.ibb.co/SwNNDQj/blog02-1170x780.jpg" />
            <DescContainer>
              <Evaluated>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </Evaluated>
              <Name>Cristiano Ronaldo</Name>
              <Time>- November 10, 2017</Time>
              <Desc>
                Coupling a blended linen construction with tailored style, the
                River Island HR Jasper Blazer will imprint a touch of dapper
                charm into your after dark wardrobe.
              </Desc>
            </DescContainer>
          </ReviewItem>
          <ReviewItem>
            <Avatar src="https://i.ibb.co/SwNNDQj/blog02-1170x780.jpg" />
            <DescContainer>
              <Evaluated>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </Evaluated>
              <Name>Cristiano Ronaldo</Name>
              <Time>- November 10, 2017</Time>
              <Desc>
                Coupling a blended linen construction with tailored style, the
                River Island HR Jasper Blazer will imprint a touch of dapper
                charm into your after dark wardrobe.
              </Desc>
            </DescContainer>
          </ReviewItem>
        </ItemContainer>
        <WriteReview>
          <WriteReviewTitle>ADD A REVIEW</WriteReviewTitle>
          <Label>Name:</Label>
          <Input />
          <Label>Email:</Label>
          <Input />
          <Label>Your Rating:</Label>
          <Evaluated>
            <StarOutlineIcon />
            <StarOutlineIcon />
            <StarOutlineIcon />
            <StarOutlineIcon />
            <StarOutlineIcon />
          </Evaluated>
          <Label>Your Review</Label>
          <ReviewInput />
          <Button>Submit</Button>
        </WriteReview>
      </Wrapper>
    </Container>
  );
};

export default Reviews;
