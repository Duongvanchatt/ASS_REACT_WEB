import React from "react";
import {useForm, SubmitHandler} from "react-hook-form";
import { IProduct } from "../interface/product";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../store/hook";
import { addProducts } from "../slice/product";



const ProductAdd = () => {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<IProduct>();


const navigate = useNavigate();
const dispatch = useAppDispatch();

const onhandleSubmit:SubmitHandler<IProduct> = (data) =>{
    dispatch(addProducts(data)).then(()=>{
             navigate("/")
    })
}
return (
    <div>
        <form onSubmit={handleSubmit(onhandleSubmit)}>
            <input type="text" {...register("name", {required: true})} />
            {errors.name && <span>required</span>}
             <button>Thêm</button>
        </form>
    </div>
)

};

export default ProductAdd;