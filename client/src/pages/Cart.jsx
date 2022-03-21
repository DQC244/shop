import React, { useContext } from "react";
import styled from "styled-components";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import CloseIcon from "@mui/icons-material/Close";
import Header from "../component/Header";
import { CartContext } from "../context/cartContext/CartContext";
import { deteleCart } from "../context/cartContext/CartAction";
import { Link } from "react-router-dom";
import { mobile,tablet } from "../reponsive";

const Container = styled.div``;
const Wrapper = styled.div`
  margin: 40px 200px;
  display: flex;
  ${mobile({ margin: "20px 5px", flexDirection: "column" })}
  ${tablet({ margin: "20px 5px", flexDirection: "column" })}
`;
const TableContainer = styled.div`
  flex: 1;
`;
const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  border: 1px solid lightgray;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
`;
const Row = styled.tr`
  border-bottom: 1px solid lightgray;
`;
const HeadWrapper = styled.thead`
`;
const BodyWrapper = styled.tbody`
  border-top: 1px solid lightgray;
`;
const Head = styled.th`
  padding: 8px;
  font-size: 2rem;
  font-weight: 400;
  text-align: center;
  ${mobile({ fontSize: "1.4rem" })}
`;
const TableItem = styled.td`
  width: 15%;
  padding: 8px;
  font-size: 1.6rem;
  font-weight: 300;
  text-align: center;
  ${mobile({ fontSize: "1.4rem" })}

  &:first-child {
    width: 50%;
  }
`;
const DetailContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const ProductImg = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  ${mobile({ width: "50px", height: "50px" })}
`;
const ProductNameContainer = styled.div`
  flex: 1;
`;
const ProductName = styled.div`
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  flex: 1;
  &:hover {
    color: #af9666;
  }
`;
const Color = styled.span`
  margin-top: 10px;
  width: 20px;
  height: 20px;
  display: inline-block;
  border: 1px solid black;
  background-color: ${(props) => props.color};
`;
const ProductPrice = styled.span`
  color: red;
  font-weight: 500;
`;

const Amount = styled.span``;

const Total = styled.span`
  color: red;
  font-weight: 500;
`;
const Clear = styled.span`
  font-size: 2.4rem;
  cursor: pointer;
  &:hover {
    color: #af9666;
  }
`;
const Button = styled.button`
  margin-top: 10px;
  width: ${(props) => props.checkout && "100%"};
  padding: 10px 30px;
  font-size: 1.6rem;
  background-color: black;
  color: white;
  font-weight: 500;
  border: none;
  border-radius: 20px;
  cursor: pointer;
`;
const Summary = styled.div`
  margin-left: 40px;
  padding: 0 10px 10px 10px;
  width: 300px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  ${mobile({ margin: "50px 0 0 0", width: "100%" })}
  ${tablet({ margin: "50px 0 0 0", width: "100%" })}
`;
const SummaryTitle = styled.h2`
  font-size: 2rem;
  line-height: 4.6rem;
  font-weight: 400;
  border-bottom: 0.5px solid lightgray;
`;
const SummaryItem = styled.div`
  padding-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: ${(props) => (props.type === "total" ? "500" : "400")};
  font-size: ${(props) => (props.type === "total" ? "2rem" : "1.6rem")};
`;
const Nothing = styled.h3`
  font-weight: 300;
  margin-top: 100px;
  font-size: 1.4rem;
  text-align: center;
`;
const SummaryItemText = styled.p``;
const SummaryItemPrice = styled.span``;
const Cart = () => {
  const { cart, total, dispatch, quantity } = useContext(CartContext);
  const handleDelete = (productCart) => {
    dispatch(deteleCart({ ...productCart }));
  };
  return (
    <Container>
      <Navbar />
      <Header title={`Cart (${quantity})`} />
      {cart.length ? (
        <Wrapper>
          <TableContainer>
            <Table>
              <HeadWrapper>
                <Row>
                  <Head>Product detail</Head>
                  <Head>Price</Head>
                  <Head>Quantity</Head>
                  <Head>Total</Head>
                  <Head></Head>
                </Row>
              </HeadWrapper>
              <BodyWrapper>
                {cart.map((c, id) => (
                  <Row key={id}>
                    <TableItem>
                      <DetailContainer>
                        <ProductImg src={c.img} />
                        <ProductNameContainer>
                          <Link to={`/product/${c._id}`}>
                            <ProductName>{c.title}</ProductName>
                          </Link>
                          <Color color={c.color} />
                        </ProductNameContainer>
                      </DetailContainer>
                    </TableItem>
                    <TableItem>
                      <ProductPrice>${c.price}</ProductPrice>
                    </TableItem>
                    <TableItem>
                      <Amount>{c.quantity}</Amount>
                    </TableItem>
                    <TableItem>
                      <Total>${c.price * c.quantity}</Total>
                    </TableItem>
                    <TableItem>
                      <Clear onClick={() => handleDelete(c)}>
                        <CloseIcon fontSize="inherit" />
                      </Clear>
                    </TableItem>
                  </Row>
                ))}
              </BodyWrapper>
            </Table>
            <Link to="/products/all">
              <Button>Continue Shopping</Button>
            </Link>
          </TableContainer>
          <Summary>
            <SummaryTitle>Summary</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>${total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Tax</SummaryItemText>
              <SummaryItemPrice>$0</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Order Total</SummaryItemText>
              <SummaryItemPrice>${total}</SummaryItemPrice>
            </SummaryItem>
            <Button checkout={true}>PROCEED TO CHECKOUT</Button>
          </Summary>
        </Wrapper>
      ) : (
        <>
          <Nothing>Your cart is currently empty.</Nothing>
          <Link to="/products/all">
            <Button>RETURN TO SHOP</Button>
          </Link>
        </>
      )}
      <Footer />
    </Container>
  );
};

export default Cart;
