import styled from "styled-components";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";
import { mobile,tablet } from "../reponsive";


const Container = styled.div`
  width: 25%;
  margin-bottom: 20px;
  padding-left: 12px;
  padding-right: 12px;
${mobile({ paddingLeft: "5px",paddingRight: "5px",width: "50%"})}


`;
const Overlay = styled.div`
  opacity: 0;
  position: absolute;
  top: 0;
  width: 100%;
  height: 75%;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(0, 0, 0, 0.5);
  transition: all 0.3s linear;
`;
const Wrapper = styled.div`
  flex: 1;
  width: 100%;
  height: 450px;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 5px;
  box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  &:hover ${Overlay} {
    opacity: 1;
  }
${mobile({ height: "300px" })}
${tablet({ height: "300px" })}

`;
const Image = styled.img`
  height: 75%;
  width: 100%;
`;
const Evaluate = styled.div`
  margin-top: 10px;
  color: yellow;
${mobile({ marginTop: "5px" })}
${tablet({ marginTop: "5px" })}


`;
const ProductName = styled.h3`
  margin-top: 10px;
  padding:0 5px;
  font-size: 1.6rem;
  font-weight: 300;
  text-align: center;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: black;
  cursor: pointer;
  transition: all 0.25s linear;
  &:hover {
    color: #af9666;
  }
${mobile({ marginTop: "5px" })}
${tablet({ marginTop: "5px" })}

`;

const ProductPrice = styled.p`
  margin-top: 10px;
  font-size: 1.6rem;
  font-weight: 500;
  color: red;
${mobile({ marginTop: "5px" })}
${tablet({ marginTop: "5px" })}

`;
const Actions = styled.div`
  display: flex;
  flex-direction: column;
`;
const Icon = styled.span`
  margin: 10px 0;
  font-size: 2.4rem;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.25s linear;
  &:hover {
    transform: scale(1.1);
  }
`;

const Product = ({ product }) => {
  return (
    <Container>
      <Wrapper>
        <Image src={product.img} />
        <Evaluate>
          <StarOutlinedIcon />
          <StarOutlinedIcon />
          <StarOutlinedIcon />
          <StarOutlinedIcon />
        </Evaluate>
        <Link style={{width:"100%"}} to={`/product/${product._id}`}>
          <ProductName>{product.title}</ProductName>
        </Link>
        <ProductPrice>${product.price}</ProductPrice>

        <Overlay>
          <Actions>
            <Icon>
              <FavoriteBorderOutlinedIcon fontSize="inherit" />
            </Icon>
            <Link to={`/product/${product._id}`}>
              <Icon>
                <SearchOutlinedIcon fontSize="inherit" />
              </Icon>
            </Link>
          </Actions>
        </Overlay>
      </Wrapper>
    </Container>
  );
};

export default Product;
