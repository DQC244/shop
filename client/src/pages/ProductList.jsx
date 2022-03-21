import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Navbar from "../component/Navbar";
import Products from "../component/Products";
import { mobile } from "../reponsive";

const Container = styled.div``;

const FilterContainer = styled.div`
  margin: 40px 0;
  padding: 20px 40px;
  background-color: #f7f7f7;
  display: flex;
  justify-content: space-between;
  ${mobile({ margin: "15px 0", padding: "10px 15px" })}
`;
const FilterLeft = styled.div`
  display: flex;
`;
const FilterRight = styled.div``;
const Filter = styled.div`
  display: flex;
  align-items: center;
  ${mobile({ flexDirection: "column", alignItems: "flex-start" })}

`;
const FilterText = styled.p`
  margin-right: 15px;
  font-size: 1.6rem;
  font-weight: 600;
  color: #333;
  ${mobile({ marginRight: "0px", fontSize: "1.4rem" })}
`;
const Select = styled.select`
  padding: 0 5px;
  height: 30px;
  min-width: 80px;
  color: #333;
  border-radius: 3px;
  outline: none;
`;
const Option = styled.option``;

const ProductList = () => {
  const [filter, setFilter] = useState({});
  const [sort, setSort] = useState("new");
  const { category, key } = useParams();
  const handleSelect = (e) => {
    setFilter({
      ...filter,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <Container>
      <Navbar navigation="categories" />
      <Header title={key ? `Search Results for "${key}"` : category} />
      <FilterContainer>
        <FilterLeft>
          <Filter>
            <FilterText>Color:</FilterText>
            <Select name="color" onChange={handleSelect}>
              <Option value="--">--</Option>
              <Option value="black">Black</Option>
              <Option value="green">Green</Option>
              <Option value="white">white</Option>
              <Option value="brown">Brown</Option>
              <Option value="red">Red</Option>
              <Option value="yellow">Yellow</Option>
            </Select>
          </Filter>
        </FilterLeft>
        <FilterRight>
          <Filter>
            <FilterText>Sort Products:</FilterText>
            <Select onChange={(e) => setSort(e.target.value)}>
              <Option defaultValue value="new">
                Default Sorting
              </Option>
              <Option value="asc">Sort By Price: Low To Hight</Option>
              <Option value="desc">Sort By Price: Hight To Low</Option>
            </Select>
          </Filter>
        </FilterRight>
      </FilterContainer>
      <Products filter={filter} sort={sort} cat={category} keySearch={key} />

      <Footer />
    </Container>
  );
};

export default ProductList;
