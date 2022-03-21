import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { useContext, useState } from "react";
import { UserContext } from "../context/userContext/UserContext";
import { useNavigate } from "react-router-dom";
import { createUser } from "../context/userContext/apiCalls";

const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
`;
const Body = styled.div`
  flex: 4;
  padding: 0 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.h3`
  font-size: 3.6rem;
`;
const UserInfo = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;
const UserInfoItem = styled.div`
  width: 400px;
  margin-bottom: 40px;
  font-size: 1.4rem;

  &:last-child {
    margin-bottom: 0px;
  }
`;
const UserInfoKey = styled.label`
  font-size: 1.6rem;
  color: gray;
  font-weight: 400;
  &[for="file"] {
    cursor: pointer;
    &:hover {
      color: black;
    }
  }
`;
const UserInfoValue = styled.input`
  width: 400px;
  color: #333;
  padding: 5px;
  border: none;
  outline: none;
  border-bottom: 1px solid lightgray;
  &::placeholder {
    color: lightgray;
  }
`;

const UserInfoSelect = styled.select`
  display: block;
  padding: 5px;
  font-size: 1.4rem;
  color: #333;
  outline: none;
  border: none;
  border-bottom: 1px solid lightgray;
`;
const UserInfoOption = styled.option``;

const ErrorUpdate = styled.p`
  padding: 5px 0px;
  color: red;
  font-size: 1.4rem;
`;
const Button = styled.button`
  padding: 7px 10px;
  font-size: 1.4rem;
  background-color: ${(props) => (props.isFetching ? "gray" : "darkblue")};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  pointer-events: ${(props) => (props.isFetching ? "none" : "auto")};
`;
const NewUser = () => {
  const { dispatch, error, isFetching, users } = useContext(UserContext);
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();

  const handleInput = (e) => {
    setInputs((pre) => {
      return {
        ...pre,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleClick = () => {
    createUser(dispatch, {
      ...inputs,
    }).then(() => {
      navigate("/users");
    });
  };
  console.log(users)
  return (
    <Container>
      <Topbar />
      <Wrapper>
        <Sidebar active="users"/>
        <Body>
          <Title>New User</Title>
          <UserInfo>
            <UserInfoItem>
              <UserInfoKey>Username</UserInfoKey>
              <UserInfoValue name="username" onChange={handleInput} />
            </UserInfoItem>

            <UserInfoItem>
              <UserInfoKey>Email</UserInfoKey>
              <UserInfoValue name="email" onChange={handleInput} />
            </UserInfoItem>
            <UserInfoItem>
              <UserInfoKey>Password</UserInfoKey>
              <UserInfoValue name="password" onChange={handleInput} />
            </UserInfoItem>
            <UserInfoItem>
              <UserInfoKey>IsAdmin</UserInfoKey>
              <UserInfoSelect name="isAdmin" onChange={handleInput}>
                <UserInfoOption value="false">False</UserInfoOption>
                <UserInfoOption value="true">True</UserInfoOption>
              </UserInfoSelect>
            </UserInfoItem>
          </UserInfo>
          {error && (
            <ErrorUpdate>Wrong something, please try again</ErrorUpdate>
          )}
          <Button isFetching={isFetching} onClick={handleClick}>
            Create
          </Button>
        </Body>
      </Wrapper>
    </Container>
  );
};
export default NewUser;
