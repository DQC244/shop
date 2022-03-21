import styled from "styled-components";
import { useState, useContext, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Delete, Edit } from "@material-ui/icons";
import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";
import { UserContext } from "../context/userContext/UserContext";
import { getUsers, deleteUser } from "../context/userContext/apiCalls";
import { Link } from "react-router-dom";

const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
`;
const Content = styled.div`
  flex: 4;
  display: flex;
  flex-direction: column;
`;
const TableContainer = styled.div`
  flex: 1;
`;
const Action = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background-color: lightgray;
  }
`;

const Button = styled.button`
  width: 70px;
  height: 30px;
  font-size: 1.4rem;
  background-color: darkblue;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
const UserList = () => {
  const { users, dispatch } = useContext(UserContext);

  const [columns, setColumns] = useState([
    { field: "_id", headerName: "_id", width: 150 },
    { field: "username", headerName: "Username", width: 150 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "isAdmin", headerName: "IsAdmin", width: 150 },
    { field: "createdAt", headerName: "createdAt", width: 150 },
    {
      field: "Action",
      headerName: "Action",
      width: 150,
      type: "actions",
      getActions: (params) => [
        <Action>
          <Edit />
        </Action>,
        <Action onClick={(e) => handleDelete(params.row._id)}>
         <Delete />
        </Action>,
      ],
    },
  ]);
  useEffect(() => {
    !users.length && getUsers(dispatch);
  }, [dispatch]);
  const handleDelete = (id) => {
    // deleteUser(dispatch, id);
  };
  return (
    <Container>
      <Topbar />
      <Wrapper>
        <Sidebar active="users" />
        <Content>
          <Link to="/newuser">
            <Button>Create</Button>
          </Link>
          <TableContainer>
            {users && (
              <DataGrid
                disableSelectionOnClick
                pageSize={10}
                checkboxSelection
                getRowId={(users) => users._id}
                rows={users}
                columns={columns}
                style={{ fontSize: "1.4rem" }}
              />
            )}
          </TableContainer>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default UserList;
