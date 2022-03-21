import AddIcon from "@mui/icons-material/Add";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RemoveIcon from "@mui/icons-material/Remove";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import axios from "axios";
import { useEffect, useState, useContext, useRef } from "react";
import { useLocation, Link } from "react-router-dom";
import styled from "styled-components";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import Products from "../component/Products";
import Reviews from "../component/Reviews";
import { CartContext } from "../context/cartContext/CartContext";
import { addCart } from "../context/cartContext/CartAction";
import CloseIcon from "@mui/icons-material/Close";
import { mobile } from "../reponsive";


const Container = styled.div`
  margin-top: 200px;
${mobile({ marginTop: "150px" })}

`;

const Wrapper = styled.div`
  padding: 0 40px 50px 40px;
  display: flex;
${mobile({ flexDirection: "column",padding:"0 15px 50px 15px" })}

`;
const ImgContainer = styled.div`
  flex:1;
  height: 70vh;
  padding-right: 20px;
${mobile({ flexDirection: "column",padding:"0" })}

  `;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
  border: 1px solid lightgray;
`;
const InforContainer = styled.div`
  padding-left: 20px;
 flex:1;
  color: #333;
${mobile({ padding: "0",marginTop: "20px"})}

`;
const Name = styled.h1`
  font-family: "Redressed", cursive;
  font-size: 3.6rem;
  font-weight: 300;
${mobile({ fontSize: "2.4rem" })}

`;
const Time = styled.p`
  margin-top: 10px;
  font-size: 1.6rem;
  font-weight: 400;
  color: gray;
`;
const Evaluate = styled.div`
  margin-top: 10px;
  color: yellow;
`;

const Price = styled.p`
  margin-top: 10px;
  font-size: 2.4rem;
  font-weight: 700;
  color: red;
`;
const Desc = styled.p`
  margin-top: 10px;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2rem;
  color: gray;
`;
const Filter = styled.div`
  display: flex;
`;
const FilterColor = styled.div`
  margin-top: 10px;
  margin-right: 10px;
  width: 30px;
  height: 30px;
  border: 4px solid
    ${(props) => (props.focus === props.colorFocus ? "black" : "lightgray")};
  background-color: ${(props) => props.color};
  cursor: pointer;
  transition: all 0.25s linear;
  &:hover {
    border: 4px solid black;
  }
`;

const Action = styled.div`
  margin-top: 10px;
  display: flex;
`;
const AmountContainer = styled.div`
  height: 40px;
  font-size: 1.6rem;
  font-weight: 600;
  display: flex;
`;
const Amount = styled.div`
  margin: 0 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  border: 1px solid lightgray;
`;
const Remove = styled.div`
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  border: 1px solid lightgray;
  cursor: pointer;
`;
const Add = styled.div`
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  border: 1px solid lightgray;
  cursor: pointer;
`;
const ButtonAdd = styled.button`
  margin-left: 20px;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 1.6rem;
  font-weight: 500;
  color: white;
  background-color: #af9666;
  border: none;
  cursor: pointer;
  transition: all 0.25s linear;
  &:hover {
    background-color: black;
  }
`;
const Like = styled.div`
  margin-left: 20px;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  border: 1px solid lightgray;
  cursor: pointer;
`;
const Title = styled.p`
  font-family: "Nunito Sans", sans-serif;
  margin-top: 100px;
  margin-bottom: 20px;
  font-size: 3.6rem;
  color: #af9666;
  text-align: center;
`;
const Error = styled.p`
  margin-top: 10px;
  color: red;
  font-size: 1.6rem;
`;
const Categories = styled.p`
  margin-top: 10px;
  font-size: 1.6rem;
  font-weight: 600;
  color: #333;
`;
const Category = styled.span`
  color: gray;
  margin-left: 5px;
  font-weight: 400;
`;

const Alert = styled.div`
  display: ${(props) => (props.display ? "flex" : "none")};
  position: fixed;
  top: 50%;
  right: 50%;
  transform: translate(50%);
  width: 350px;
  height: 80px;
  background-color: white;
  box-shadow: 0 0 15px rgb(0 0 0 / 50%);
  border-radius: 5px;
  flex-direction: column;
  align-items: center;
  justify-content: Space-around;
  z-index: 10000;
  animation: fadeIn 0.5s;
`;

const TitleAlert = styled.span`
  font-size: 1.6rem;
  font-weight: 300;
`;
const IconAlert = styled.span`
  position: absolute;
  top: 5px;
  right: 5px;
  color: lightgray;
  font-size: 2rem;
  cursor: pointer;
  &:hover {
    color: #af9666;
  }
`;

const ButtonAlert = styled.button`
  background: black;
  border: none;
  border-radius: 5px;
  color: white;
  height: 34px;
  line-height: 34px;
  padding: 0 20px;
  cursor: pointer;
`;

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const { dispatch } = useContext(CartContext);
  const error = useRef(0);
  const [statusAlert, setStatusAlert] = useState(0);

  const handleClick = () => {
    if (color) {
      dispatch(addCart({ ...product, color, quantity }));
      error.current.textContent = "";
      setStatusAlert(1);
    } else {
      error.current.textContent = "OOPS PLEASE SELECT A COLOR !!!";
    }
  };
  const handleQuantity = (action) => {
    if (action === "remove") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(`/product/find/${id}`);
        setProduct(res.data);
      } catch (e) {
        console.log(e);
      }
    };
    getProduct();
  }, [id]);

  const handleAlert = () => {
    setStatusAlert(0);
  };
  return (
    <Container>
      <Alert display={statusAlert}>
        <TitleAlert>PRODUCT IS ADDED TO CART</TitleAlert>
        <IconAlert onClick={handleAlert}>
          <CloseIcon fontSize="inherit" />
        </IconAlert>
        <Link to="/cart">
          <ButtonAlert>VIEW</ButtonAlert>
        </Link>
      </Alert>
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src={product?.img} />
        </ImgContainer>
        <InforContainer>
          <Name>{product?.title}</Name>
          <Time>{new Date(product?.createdAt).toDateString()}</Time>
          <Evaluate>
            <StarOutlinedIcon />
            <StarOutlinedIcon />
            <StarOutlinedIcon />
            <StarOutlinedIcon />
          </Evaluate>
          <Price>$ {product?.price}</Price>
          <Desc>{product?.desc}</Desc>
          <Filter>
            {product?.color?.map((c, id) => (
              <FilterColor
                focus={c}
                colorFocus={color}
                onClick={() => setColor(c)}
                key={id}
                color={c}
              />
            ))}
          </Filter>

          <Action>
            <AmountContainer>
              <Remove onClick={() => handleQuantity("remove")}>
                <RemoveIcon fontSize="inherit" />
              </Remove>
              <Amount>{quantity}</Amount>
              <Add onClick={() => handleQuantity("add")}>
                <AddIcon fontSize="inherit" />
              </Add>
            </AmountContainer>
            <ButtonAdd onClick={handleClick}>ADD TO CART</ButtonAdd>
            <Like>
              <FavoriteBorderIcon fontSize="inherit" />
            </Like>
          </Action>
          <Error ref={error}></Error>
          <Categories>
            Categories:
            {product?.categories?.map((item, id) => (
              <Category key={id}>{item},</Category>
            ))}
          </Categories>
        </InforContainer>
      </Wrapper>
      <Reviews />
      <Title>Related Products</Title>
      <Products cat={product?.categories?.[0]} />
      <Footer />
    </Container>
  );
};

export default Product;
