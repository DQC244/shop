import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/cartContext/CartContext";
import { AuthContext } from "../context/authContext/AuthContext";
import { useContext, useRef } from "react";
import { mobile } from "../reponsive";
const Container = styled.div`
  position: fixed;
  top: 0;
  z-index: 1000;
  width: 100vw;
  font-size: 1.4rem;
  background-color: white;
  box-shadow: 0 0px 5px rgba(0, 0, 0, 0.2);
`;
const Top = styled.div`
  height: 40px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #af9666;
  ${mobile({ padding: " 0 10px" })}
`;
const TopLeft = styled.div`
`;
const Logo = styled.h1`
  font-family: "Nunito Sans", sans-serif;
  height: 100%;
  color: white;
`;

const TopRight = styled.div`
  color: white;
  display: flex;
`;
const Icon = styled.span`
  position: relative;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  font-size: 1.8rem;
  margin-left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease-in;
  &:hover {
    background-color: black;
  }
  ${mobile({ marginLeft: "5px" })}
`;
const QuantityCart = styled.span`
  position: absolute;
  top: 2px;
  right: 0;
  padding: 0px 5px;
  border-radius: 10px;
  font-size: 1rem;
  color: black;
  background-color: white;
`;
const Bottom = styled.div`
  height: 60px;
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({ fontSize: "1.6rem" })}
  
`;
const SubMenu = styled.ul`
  display: none;
  position: absolute;
  top: 100%;
  left: 50%;
  width: 200px;
  transform: translateX(-50%);
  padding: 5px 10px;
  background-color: white;
  list-style: none;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  border-radius: 3px;
  z-index: 100;
  cursor: default;
  animation: fadeIn 0.3s;
`;
const SubMenuItem = styled.li`
  padding: 5px 0;
  text-align: center;
  text-transform: capitalize;
  color: gray;
  &:hover {
    color: #af9666;
  }
`;

const MenuItem = styled.span`
  position: relative;
  margin: 0 10px;
  padding: 5px;
  ${mobile({ margin: "0 5px",padding:"2px" })}

  
  font-weight: 300;
  text-transform: uppercase;
  cursor: pointer;
  position: relative;
  color: ${(props) => props.active && "#af9666"};
  &::after {
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 1px;
    background-color: ${(props) => props.active && "#af9666"};
  }
  &:hover {
    color: #af9666;
  }
  &:hover ${SubMenu} {
    display: block;
  }
`;
const SearchContainer = styled.form`
  display: flex;
`;
const Input = styled.input`
  padding: 0 5px;
  font-size: 1.4rem;
  outline: none;
  border: 1px solid lightgray;
  border-radius: 3px;
  ${mobile({ width: "120px" })}
`;

const Navbar = ({ navigation }) => {
  const { quantity } = useContext(CartContext);
  const { user } = useContext(AuthContext);
  const search = useRef();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.current.value.trim()) {
      return navigate(`/search/${search.current.value}`);
    }
  };
  return (
    <Container>
      <Top>
        <TopLeft>
          <Link to="/">
            <Logo>DQC</Logo>
          </Link>
        </TopLeft>
        <TopRight>
          <SearchContainer onSubmit={handleSearch}>
            <Input ref={search} placeholder="search" />
            <Icon onClick={handleSearch}>
              <SearchIcon fontSize="inherit" />
            </Icon>
          </SearchContainer>
          {!user && (
            <Link to="/login">
              <Icon>
                <AccountCircleIcon fontSize="inherit" />
              </Icon>
            </Link>
          )}
          <Link to="/cart">
            <Icon>
              <QuantityCart>{quantity}</QuantityCart>
              <ShoppingCartOutlinedIcon fontSize="inherit" />
            </Icon>
          </Link>
        </TopRight>
      </Top>
      <Bottom>
        <Link to="/">
          <MenuItem active={navigation === "home" && true}>Home</MenuItem>
        </Link>

        <MenuItem active={navigation === "categories" && true}>
          Categories
          <SubMenu>
            <Link to="/products/Funny Gifts">
              <SubMenuItem>Funny Gifts</SubMenuItem>
            </Link>
            <Link to="/products/Gift Bundle">
              <SubMenuItem>Gift Bundle</SubMenuItem>
            </Link>
            <Link to="/products/Home Decor">
              <SubMenuItem>Home Decor</SubMenuItem>
            </Link>
            <Link to="/products/Kids">
              <SubMenuItem>Kids</SubMenuItem>
            </Link>
          </SubMenu>
        </MenuItem>
        <Link to="/">
          <MenuItem>Blog</MenuItem>
        </Link>
        <Link to="/">
          <MenuItem>Contact</MenuItem>
        </Link>
      </Bottom>
    </Container>
  );
};

export default Navbar;
