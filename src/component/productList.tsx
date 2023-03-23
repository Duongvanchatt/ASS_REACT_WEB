import React, { Dispatch, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  changeProduct, deleteProduct, fetchProducts } from "../action/product";
import { IProduct } from "../interface/product";
import { RootState } from "../reducer";

const ProductsList = () => {
const { value: products, isLoading } = useSelector((state: RootState) => state.product);
const dispatch: Dispatch<any> = useDispatch();
const [value, setValue] = useState({});
useEffect(() => {
    dispatch(fetchProducts());
}, [dispatch]);
if (isLoading) return <div>Loading...</div>;
    return (
        <div>

            {products.map((product: IProduct) => {
                return (
                    <div>
                        {product.name}
                    </div>
                );
            })}
        </div>
    );
};
export default ProductsList;