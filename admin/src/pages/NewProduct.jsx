import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { Publish } from "@material-ui/icons";
import { useContext, useState, useRef } from "react";
import { createProduct } from "../context/productContext/apiCalls";
import { ProductContext } from "../context/productContext/ProductContext";
import uploadFile from "../uploadFile";
import { useNavigate } from "react-router-dom";

const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
`;
const Body = styled.div`
  flex: 4;
  padding: 0 20px;
`;
const Title = styled.h3`
  font-size: 3.6rem;
`;
const ProductInfo = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;
const ProductInfoItem = styled.div`
  width: 400px;
  margin-bottom: 40px;
  font-size: 1.4rem;

  &:last-child {
    margin-bottom: 0px;
  }
`;
const ProductInfoKey = styled.label`
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
const ProductInfoValue = styled.input`
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
const ProductInfoDesc = styled.textarea`
  width: 400px;
  height: 200px;
  outline: none;
  border: 1px solid lightgray;
  &::placeholder {
    color: lightgray;
  }
`;
const ProductInfoSelect = styled.select`
  display: block;
  padding: 5px;
  font-size: 1.4rem;
  color: #333;
  outline: none;
  border: none;
  border-bottom: 1px solid lightgray;
`;
const ProductInfoOption = styled.option``;
const ProductInfoImg = styled.img`
  display: block;
  height: 200px;
  width: 200px;
  object-fit: cover;
  border: 1px solid lightgray;
  border-radius: 5px;
`;
const ProductInfoFile = styled.input`
  display: none;
`;
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
const NewProduct = () => {
  const { dispatch, error, isFetching,products} = useContext(ProductContext);
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [input, setInput] = useState({ });
  const [array, setArray] = useState({});
  const imgRef = useRef();

  const handleFile = (e) => {
    setFile(e.target.files[0]);
    imgRef.current.src = URL.createObjectURL(e.target.files[0]);
  };
  const handleInput = (e) => {
    setInput((pre) => {
      return {
        ...pre,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleArray = (e) => {
    setArray((arr) => {
      return {
        ...arr,
        [e.target.name]: e.target.value.split(","),
      };
    });
  };
  const handleClick = async () => {
    if (file) {
      const urlFile = await uploadFile(file);
      createProduct(dispatch, {
        ...input,
        ...array,
        img: urlFile,
      }).then(() => {
        navigate("/products")
      });
    }
  };
  console.log(products)
  return (
    <Container>
      <Topbar />
      <Wrapper>
        <Sidebar active="products" />
        <Body>
          <Title>New Product</Title>

          <ProductInfo>
            <ProductInfoItem>
              <ProductInfoKey>Product Name</ProductInfoKey>
              <ProductInfoValue
                name="title"
                placeholder="Title"
                onChange={handleInput}
              />
            </ProductInfoItem>

            <ProductInfoItem>
              <ProductInfoKey>Price</ProductInfoKey>
              <ProductInfoValue
                name="price"
                type="number"
                placeholder="789"
                onChange={handleInput}
              />
            </ProductInfoItem>
            <ProductInfoItem>
              <ProductInfoKey>Categories</ProductInfoKey>
              <ProductInfoValue
                name="categories"
                placeholder="Kids,Funny Gifts"
                onChange={handleArray}
              />
            </ProductInfoItem>
            <ProductInfoItem>
              <ProductInfoKey>Color</ProductInfoKey>
              <ProductInfoValue
                name="color"
                placeholder="red,..."
                onChange={handleArray}
              />
            </ProductInfoItem>
            <ProductInfoItem>
              <ProductInfoKey>Description</ProductInfoKey>
              <ProductInfoDesc name="desc" onChange={handleInput} />
            </ProductInfoItem>
            <ProductInfoItem>
              <ProductInfoKey htmlFor="file">
                <Publish style={{ fontSize: "2rem" }} />
              </ProductInfoKey>
              <ProductInfoFile id="file" type="file" onChange={handleFile} />
              <ProductInfoImg ref={imgRef} />
            </ProductInfoItem>
            <ProductInfoItem>
              <ProductInfoKey>Stock</ProductInfoKey>
              <ProductInfoSelect name="inStock" onChange={handleInput}>
                <ProductInfoOption value="true">True</ProductInfoOption>
                <ProductInfoOption value="false">False</ProductInfoOption>
              </ProductInfoSelect>
            </ProductInfoItem>
          </ProductInfo>
          {error && (
            <ErrorUpdate>Wrong something, please try again</ErrorUpdate>
          )}
          <Button onClick={handleClick} isFetching={isFetching}>
            Create
          </Button>
        </Body>
      </Wrapper>
    </Container>
  );
};
export default NewProduct;
