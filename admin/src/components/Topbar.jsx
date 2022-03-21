import styled from "styled-components";
import { AccountCircleOutlined, NotificationsNone } from "@material-ui/icons";
import {Link} from "react-router-dom"
const Container = styled.div`
  padding: 0 20px;
  background-color: white;
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const TopLeft = styled.div``;
const Logo = styled.span`
  font-size: 3rem;
  font-weight: 700;
`;
const TopRight = styled.div`
  display: flex;
  align-items: center;
`;
const Icon = styled.span`
  margin-left: 20px;
  font-size: 2rem;
  position: relative;
  cursor: pointer;
`;
const NotifCount = styled.span`
  width: 15px;
  height: 15px;
  font-size: 1rem;
  background-color: red;
  color: white;
  border-radius: 50%;
  position: absolute;
  top: -5px;
  right: 0px;
  text-align: center;
`;

const Topbar = () => {
  return (
    <Container>
      <TopLeft>
        <Logo>DQC</Logo>
      </TopLeft>
      <TopRight>
        <Icon>
          <NotificationsNone fontSize="inherit" />
          <NotifCount>2</NotifCount>
        </Icon>
        <Link to="/login">
          <Icon>
            <AccountCircleOutlined fontSize="inherit" />
          </Icon>
        </Link>
      </TopRight>
    </Container>
  );
};

export default Topbar;
