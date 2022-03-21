import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  LineStyle,
  PersonOutline,
  Storefront,
  MailOutline,
  ChatBubbleOutlineOutlined,
  WorkOutline,
  ListAlt,
} from "@material-ui/icons";

const Container = styled.div`
  flex: 1;
  height: calc(100vh - 50px);
  background-color: rgb(251, 251, 255);
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`;
const Wrapper = styled.div`
  padding: 20px;
  color: #555;
`;
const Menu = styled.div`
  margin-bottom: 20px;
`;
const MenuTitle = styled.h3`
  color: rgb(160, 160, 160);
  font-size: 1.6rem;
  font-weight: 600;
`;
const MenuList = styled.ul`
  list-style: none;
  padding: 5px;
`;
const MenuItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  margin: 0 10px;
  padding: 5px;
  border-radius: 4px;
  color: #333;
  background-color: ${(props) => props.focus && "rgb(240,240,255)"};
  cursor: pointer;
  &:hover {
    background-color: rgb(240, 240, 255);
  }
`;

const Sidebar = ({ active }) => {
 
  return (
    <Container>
      <Wrapper>
        <Menu>
          <MenuTitle>Dashboard</MenuTitle>
          <MenuList>
            <Link to="/">
              <MenuItem focus={active === "home" && true}>
                <LineStyle />
                Home
              </MenuItem>
            </Link>
          </MenuList>
        </Menu>
        <Menu>
          <MenuTitle>Quick Menu</MenuTitle>
          <MenuList >
            <Link to="/users">
              <MenuItem focus={active === "users" && true}>
                <PersonOutline />
                Users
              </MenuItem>
            </Link>
            <Link to="/products">
              <MenuItem focus={active === "products" && true}>
                <Storefront />
                Products
              </MenuItem>
            </Link>
            <MenuItem focus={active === "orders" && true}>
              <ListAlt />
              Oders
            </MenuItem>
          </MenuList>
        </Menu>
        <Menu>
          <MenuTitle>Notifications</MenuTitle>
          <MenuList>
            <MenuItem focus={active === "mail" && true}>
              <MailOutline />
              Mail
            </MenuItem>
            <MenuItem focus={active === "feedback" && true}>
              <ChatBubbleOutlineOutlined />
              Feedback
            </MenuItem>
          </MenuList>
        </Menu>
        <Menu>
          <MenuTitle>Staff</MenuTitle>
          <MenuList>
            <MenuItem focus={active === "manage" && true}>
              <WorkOutline />
              Manage
            </MenuItem>
          </MenuList>
        </Menu>
      </Wrapper>
    </Container>
  );
};

export default Sidebar;
