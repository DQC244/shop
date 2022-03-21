import { useState } from "react";
import styled from "styled-components";
import { login } from "../context/authContext/apiCalls";
import { useContext } from "react";
import { AuthContext } from "../context/authContext/AuthContext";

const Container = styled.div``;

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Form = styled.form`
  padding: 25px;
  width: 20vw;
  border: 1px solid lightgray;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  margin-bottom: 20px;
  padding: 10px 5px;
  font-size: 1.4rem;
  outline: none;
  border: none;
  border-bottom: 1px solid lightgray;
`;
const Button = styled.button`
  padding: 10px 0;
  font-size: 1.4rem;
  background-color: #af9666;
  color: white;
  border: none;

  cursor: ${(props) => (props.fetching ? "not-allowed" : "pointer")};
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: red;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch, isFetching, error } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  console.log(isFetching);
  return (
    <Container>
      <Wrapper>
        <Form>
          <Input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <Error>Something went wrong ...</Error>}
          <Button fetching={isFetching} onClick={handleLogin}>
            Login
          </Button>
          
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
