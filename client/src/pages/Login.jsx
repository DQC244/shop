import { useState } from "react";
import styled from "styled-components";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Navbar from "../component/Navbar";
import { login } from "../context/authContext/apiCalls";
import { useContext } from "react";
import { AuthContext } from "../context/authContext/AuthContext";
import { Link } from "react-router-dom";
import { mobile } from "../reponsive";

const Container = styled.div`
`;
const Wrapper = styled.div`
  margin-top: 50px;
  margin-bottom: -50px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({ marginBottom: "0"})}

`;
const Form = styled.form`
  padding: 25px;
  width: 35vw;
  border: 1px solid lightgray;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  ${mobile({ width: "90vw" })}
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

  cursor: ${(props) => (props.fetching ?  "not-allowed":"pointer")};
`;
const A = styled.p`
  margin: 5px 0;
  font-size: 1.2rem;
  text-decoration: underline;
  cursor: pointer;
`;

const Error = styled.span`
font-size:1.4rem ;
  color: red;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch, isFetching,error } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(username, password);
    login(dispatch, { username, password });
  };

  return (
    <Container>
      <Navbar />
      <Header title="Login" />
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
          <A>DO NOT YOU REMEMBER THE PASSWORD?</A>
          <Link to="/register">
            <A>CREATE A NEW ACCOUNT</A>
          </Link>
        </Form>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Login;
