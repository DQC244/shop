import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Delete, Edit } from "@material-ui/icons";
import { ProductContext } from "../context/productContext/ProductContext";
import { Link } from "react-router-dom";
import { getProducts, deleteProduct } from "../context/productContext/apiCalls";
import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";

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
const ColorList = styled.div`
  display: flex;
`;
const Color = styled.div`
  margin-right: 2px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid lightgray;
  background-color: ${(props) => props.color};
`;
const Img = styled.img`
  width: 45px;
  height: 45px;
  object-fit: cover;
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
const ProductList = () => {
  const { dispatch, products } = useContext(ProductContext);
  const [detailsRows, setDetailsRows] = useState([]);
  const [columns, setColumns] = useState([
    { field: "title", headerName: "Title", width: 200 },
    {
      field: "img",
      headerName: "Image",
      width: 100,
      renderCell: (params) => <Img src={params.value} />,
    },
    { field: "categories", headerName: "Categories", width: 200 },
    {
      field: "color",
      headerName: "Color",
      width: 200,
      renderCell: (params) => (
        <ColorList>
          {params.value.split(",").map((c, id) => (
            <Color key={id} color={c} />
          ))}
        </ColorList>
      ),
    },
    { field: "price", headerName: "Price", width: 100 },
    { field: "inStock", headerName: "Stock", width: 100 },
    {
      field: "Action",
      width: 100,
      type: "actions",
      getActions: (params) => [
        <Action>
          <Link
            to={"/product/" + params.row._id}
            state={{ product: params.row }}
          >
            <Edit />
          </Link>
        </Action>,
        <Action onClick={(e) => handleDelete(params.row._id)}>
          <Delete />
        </Action>,
      ],
    },
  ]);
  useEffect(() => {
    !products.length && getProducts(dispatch);
  }, [dispatch]);

  useEffect(() => {
    setDetailsRows(
      products.map((row) => {
        return {
          _id: row._id,
          title: row.title,
          desc: row.desc,
          img: row.img,
          categories: row.categories.toString(),
          color: row.color.toString(),
          price: row.price,
          inStock: row.inStock,
        };
      })
    );
  }, [products]);

  const handleDelete = (id) => {
    deleteProduct(dispatch, id);
  };
  return (
    <Container>
      <Topbar />
      <Wrapper>
        <Sidebar active="products" />
        <Content>
          <Link to="/newproduct">
            <Button>Create</Button>
          </Link>
          <TableContainer>
            {detailsRows && (
              <DataGrid
                disableSelectionOnClick
                pageSize={10}
                checkboxSelection
                rows={detailsRows}
                columns={columns}
                getRowId={(detailsRows) => detailsRows._id}
                style={{ fontSize: "1.4rem" }}
              />
            )}
          </TableContainer>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default ProductList;
