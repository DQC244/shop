import { useContext, useState, useRef } from "react";
import styled from "styled-components";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Navbar from "../component/Navbar";
import { register, login } from "../context/authContext/apiCalls";
import { AuthContext } from "../context/authContext/AuthContext";
import { mobile } from "../reponsive";


const Container = styled.div``;
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
const Error = styled.span`
  color: red;
  font-size: 1.2rem;
`;
const Button = styled.button`
  padding: 10px 0;
  font-size: 1.4rem;
  background-color: #af9666;
  color: white;
  border: none;

  cursor: pointer;
`;
const Agreement = styled.span`
  font-size: 1.2rem;
  margin: 20px 0;
`;
const Register = () => {
  const { user, dispatch, error } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const confirmPassword = useRef();

  const handeCreate = (e) => {
    e.preventDefault();
    if (username && email && confirmPassword.current.value === password) {
      register(dispatch, { username, email, password }).then((res) => {
        login(dispatch, { username, password });
      });
    }
  };
  return (
    <Container>
      <Navbar />
      <Header title="CREATE AN ACCOUNT" />
      <Wrapper>
        <Form>
          <Input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            type="password"
            placeholder="confirm password"
            ref={confirmPassword}
          />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Error>{error && "Registration failed"}</Error>
          <Button onClick={handeCreate}>CREATE</Button>
        </Form>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Register;
