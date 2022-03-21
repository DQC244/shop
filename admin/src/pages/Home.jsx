import styled from "styled-components";
import Featured from "../components/Featured";
import NewMembers from "../components/NewMembers";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
`;
const TableContainer = styled.div`
  flex: 4;
`;
const Home = () => {
  return (
    <Container>
      <Topbar />
      <Wrapper>
        <Sidebar active="home"/>
        <TableContainer>
          <Featured/>
          <NewMembers />
        </TableContainer>
      </Wrapper>
    </Container>
  );
};

export default Home;
