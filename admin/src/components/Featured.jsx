import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div``;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const FeaturedItem = styled.div`
  flex: 1;
  margin: 0px 20px;
  padding: 30px;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;
const FeaturedTitle = styled.span`
  font-size: 20px;
`;
const FeaturedMoneyContainer = styled.div`
  margin: 10px 0px;
  display: flex;
  align-items: center;
`;
const FeaturedMoney = styled.span`
  font-size: 30px;
  font-weight: 600;
`;
const FeaturedMoneyRate = styled.span`
  display: flex;
  align-items: center;
  margin-left: 20px;
`;
const FeaturedSub = styled.span`
  font-size: 15px;
  color: gray;
`;
const Featured = () => {
  return (
    <Container>
      <Wrapper>
        <FeaturedItem>
          <FeaturedTitle>Revanue</FeaturedTitle>
          <FeaturedMoneyContainer>
            <FeaturedMoney>$15,415</FeaturedMoney>
            <FeaturedMoneyRate>
              -7.4 <ArrowDownward style={{color: 'red'}}/>
            </FeaturedMoneyRate>
          </FeaturedMoneyContainer>
          <FeaturedSub>Compared to last month</FeaturedSub>
        </FeaturedItem>
        <FeaturedItem>
          <FeaturedTitle>Sales</FeaturedTitle>
          <FeaturedMoneyContainer>
            <FeaturedMoney>$14,415</FeaturedMoney>
            <FeaturedMoneyRate>
              -2 <ArrowDownward style={{color: 'red'}}/>
            </FeaturedMoneyRate>
          </FeaturedMoneyContainer>
          <FeaturedSub>Compared to last month</FeaturedSub>
        </FeaturedItem>
        <FeaturedItem>
          <FeaturedTitle>Cost</FeaturedTitle>
          <FeaturedMoneyContainer>
            <FeaturedMoney>$9.998</FeaturedMoney>
            <FeaturedMoneyRate>
              +0.4 <ArrowUpward style={{color: 'green'}}/>
            </FeaturedMoneyRate>
          </FeaturedMoneyContainer>
          <FeaturedSub>Compared to last month</FeaturedSub>
        </FeaturedItem>
      </Wrapper>
    </Container>
  );
};

export default Featured;
