import React, { useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import '../App.css'
import { setProducts } from "../redux/actions/productsActions";
import ProductComponent from "./ProductComponent";
import ImageComponent from "./ImageComponent";

const ProductPage = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("Products :", products);
  return (
    <div >
      <ImageComponent/>
      <ProductComponent />
    </div>
  );
};

export default ProductPage;
