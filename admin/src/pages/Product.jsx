import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { Publish } from "@material-ui/icons";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext, useState, useRef } from "react";
import { updateProduct } from "../context/productContext/apiCalls";
import { ProductContext } from "../context/productContext/ProductContext";
import uploadFile from "../uploadFile";

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
      color: #333;
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
`;
const ProductInfoDesc = styled.textarea`
  width: 400px;
  height: 200px;
  outline: none;
  border: 1px solid lightgray;
`;
const ProductInfoSelect = styled.select`
  display: block;
  padding: 5px;
  font-size: 1.4rem;
  color: gray;

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
const Product = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state.product;
  const { dispatch, isFetching, error } = useContext(ProductContext);
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const imgRef = useRef();
  const handleInputs = (e) => {
    setInputs((pre) => {
      return { ...pre, [e.target.name]: e.target.value };
    });
  };
  const handleFile = (e) => {
    imgRef.current.src = URL.createObjectURL(e.target.files[0]);
    setFile(e.target.files[0]);
  };
  const handleUpdate = async (e) => {
    if (file) {
      const urlFile = await uploadFile(file);
      updateProduct(dispatch, {
        ...product,
        ...inputs,
        categories: product.categories.split(","),
        color: product.color.split(","),
        img: urlFile,
      }).then(() => {
        navigate("/products");
      });
    } else {
      updateProduct(dispatch, {
        ...product,
        ...inputs,
        categories: product.categories.split(","),
        color: product.color.split(","),
      }).then(() => {
        navigate("/products");
      });
    }
  };
  return (
    <Container>
      <Topbar />
      <Wrapper>
        <Sidebar active="products" />
        <Body>
          <Title>Product</Title>
          {product && (
            <>
              <ProductInfo>
                <ProductInfoItem>
                  <ProductInfoKey>Product Name</ProductInfoKey>
                  <ProductInfoValue
                    name="title"
                    placeholder={product.title}
                    onChange={handleInputs}
                  />
                </ProductInfoItem>

                <ProductInfoItem>
                  <ProductInfoKey>Price</ProductInfoKey>
                  <ProductInfoValue
                    name="price"
                    type="number"
                    placeholder={product.price}
                    onChange={handleInputs}
                  />
                </ProductInfoItem>
                <ProductInfoItem>
                  <ProductInfoKey>Description</ProductInfoKey>
                  <ProductInfoDesc
                    name="desc"
                    placeholder={product.desc}
                    onChange={handleInputs}
                  />
                </ProductInfoItem>
                <ProductInfoItem>
                  <ProductInfoKey htmlFor="file">
                    <Publish style={{ fontSize: "2rem" }} />
                  </ProductInfoKey>
                  <ProductInfoFile
                    id="file"
                    type="file"
                    onChange={handleFile}
                  />
                  <ProductInfoImg ref={imgRef} src={product.img || ""} />
                </ProductInfoItem>
                <ProductInfoItem>
                  <ProductInfoKey>Stock</ProductInfoKey>
                  <ProductInfoSelect
                    name="inStock"
                    defaultValue={product.inStock}
                    onChange={handleInputs}
                  >
                    <ProductInfoOption value="true">True</ProductInfoOption>
                    <ProductInfoOption value="false">False</ProductInfoOption>
                  </ProductInfoSelect>
                </ProductInfoItem>
              </ProductInfo>
              {error && (
                <ErrorUpdate>Wrong something, please try again</ErrorUpdate>
              )}
              <Button onClick={handleUpdate} isFetching={isFetching}>
                Update
              </Button>
            </>
          )}
        </Body>
      </Wrapper>
    </Container>
  );
};
export default Product;
