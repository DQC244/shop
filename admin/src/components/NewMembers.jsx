import { useEffect, useState } from "react";
import styled from "styled-components";
import { Visibility } from "@material-ui/icons";
import axios from "axios";

const Container = styled.div`
  padding: 20px;
`;
const Wrapper = styled.div`
  padding: 15px;
  width: 40%;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`;
const Title = styled.h3`
  font-size: 2rem;
`;
const MemberContainer = styled.div`
  padding: 10px;
`;
const MemberItem = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Img = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;
const Name = styled.span`
  font-size: 1.4rem;
`;
const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 10px;
  font-size: 1.2rem;
  color: #555;
  background-color: rgb(238, 238, 247);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: lightgray;
  }
`;

const NewMembers = () => {
  const [newUsers, setNewUsers] = useState([]);
  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const res = await axios.get("/user?new=true", {
          headers: {
            token:
              "Bearer " + JSON.parse(localStorage.getItem("root")).accessToken,
          },
        });
        setNewUsers(res.data);
      } catch (e) {
        console.log(e);
      }
    };
    getNewUsers();
  }, []);
  return (
    <Container>
      <Wrapper>
        <Title>New Join Members</Title>
        <MemberContainer>
          {newUsers.length &&
            newUsers.map((item, id) => (
              <MemberItem key={id}>
                <Img src="https://i.ibb.co/SmST0tm/pd3.jpg" />
                <Name>{item.username}</Name>
                <Button>
                  <Visibility style={{ marginRight: "5px", color: "gray" }} />
                  Display
                </Button>
              </MemberItem>
            ))}
        </MemberContainer>
      </Wrapper>
    </Container>
  );
};

export default NewMembers;
