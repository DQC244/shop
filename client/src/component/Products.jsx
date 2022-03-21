import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Product from "./Product";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { mobile } from "../reponsive";


const Container = styled.div`
  margin: 0 40px;
  font-size: 1.6rem;
${mobile({ margin: "15px" })}

`;
const Wrapper = styled.div`
  margin-left: -12px;
  margin-right: -12px;
${mobile({ marginLeft: "-5px",marginRight: "-5px"})}

  display: flex;
  flex-wrap: wrap;
`;
const PaginationContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Products = ({ filter, sort, cat, newProducts, keySearch }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [page, setPage] = React.useState(1);
  //handle Pagination
  const handleChangePage = (event, value) => {
    setPage(value);
  };
  // get product
  useEffect(() => {
    const getProducts = async () => {
      try {
        if (cat && cat !== "all") {
          const res = await axios.get(`/product?category=${cat}`);
          setProducts(res.data);
        }
        //search
        else if (keySearch) {
          const res = await axios.get(`/product`);
          setProducts(
            res.data.filter((item) => {
              return item.title.toLowerCase().includes(keySearch.toLowerCase());
            })
          );
        } else {
          const res = await axios.get(
            `/product?${newProducts ? `new=true` : ""}`
          );
          setProducts(res.data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
    setPage(1);

  }, [cat, newProducts, keySearch]);
  // filter
  useEffect(() => {
    filter &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filter).every(([key, value]) => {
            if (value !== "--") {
              return item[key].includes(value);
            } else {
              return true;
            }
          })
        )
      );

    return () => {
      setFilteredProducts([]);
    };
  }, [filter, cat, products]);

  // sort
  useEffect(() => {
    if (sort === "new") {
      setFilteredProducts((pre) =>
        [...pre].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      );
    } else if (sort === "asc") {
      setFilteredProducts((pre) => [...pre].sort((a, b) => a.price - b.price));
    } else {
      setFilteredProducts((pre) => [...pre].sort((a, b) => b.price - a.price));
    }
  }, [sort, filter, products]);
  return (
    <Container>
      <Wrapper>
        {filter
          ? filteredProducts
              .slice((page - 1) * 16, page * 16)
              .map((item, index) => <Product key={index} product={item} />)
          : products
              .slice(0, 4)
              .map((item, index) => <Product key={index} product={item} />)}
      </Wrapper>
      {filter && (
        <PaginationContainer>
          <Stack spacing={2} fontSize="inherit">
            <Pagination
              count={Math.ceil(filteredProducts.length / 16)}
              page={page}
              onChange={handleChangePage}
              defaultPage={1}
            />
          </Stack>
        </PaginationContainer>
      )}
    </Container>
  );
};

export default Products;
