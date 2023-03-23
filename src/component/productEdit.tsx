import React, { useEffect } from "react";
import {useForm, SubmitHandler} from "react-hook-form";
import { IProduct } from "../interface/product";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hook";
import {  fetchProduct, updateProducts } from "../slice/product";
import { RootState } from "../store";



const ProductEdit = () => {
    const {id} = useParams();
    const {value} = useAppSelector((state: RootState) => state.product);
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<IProduct>();


const navigate = useNavigate();
const dispatch = useAppDispatch();

const onhandleSubmit:SubmitHandler<IProduct> = (data) =>{
    dispatch(updateProducts({id: value.id, ...data}));
};

useEffect (() =>{
    dispatch(fetchProduct(id));
}, []);


return (
    <div>
        <form onSubmit={handleSubmit(onhandleSubmit)}>
            <input type="text" defaultValue={value.name}
             {...register("name", {required: true})} />
            {errors.name && <span>required</span>}
             <button>Sửa</button>
        </form>
    </div>
)

};

export default ProductEdit;