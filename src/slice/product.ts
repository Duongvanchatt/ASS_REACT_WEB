import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../interface/product";

type StateProduct = {
    value: IProduct[];
    item: IProduct,
    loading: boolean
}
const initialState: StateProduct = {
    value: [],
    item: { name: "" },
    loading: false
};

export const fetchProduct = createAsyncThunk("product/fetchProduct", async(id: number) =>{
    const response = await fetch ("http://localhost:3000/products/"+id);
    const data = await response.json();
    return data
})

export const fetchProducts = createAsyncThunk("product/fetchProducts", async() =>{
    const response = await fetch ("http://localhost:3000/products");
    const data = await response.json();
    return data
})

export const addProducts = createAsyncThunk("product/create", async(product) =>{
    const response = await fetch ("http://localhost:3000/products", {
        method: "POST",
        headers: {
             "Content-type": "application/json"
        },
        body: JSON.stringify(product)
    });
    
    const data = await response.json();
    return data
})

export const updateProducts = createAsyncThunk("product/update", async(product: IProduct) =>{
    const response = await fetch ("http://localhost:3000/products/"+ product.id, {
        method: "PUT",
        headers: {
             "Content-type": "application/json"
        },
        body: JSON.stringify(product)
    });
    
    const data = await response.json();
    return data
})


const productSlice = createSlice({
    name: "product",
    initialState:{
       value : [],
       isLoading: false 
    },

    reducers: {},
    extraReducers: (builder) =>{
        //get product
        builder.addCase(fetchProducts.pending,(state,action) =>{
            state.isLoading = true
        })
        builder.addCase(fetchProducts.fulfilled,(state,action) =>{
            state.isLoading = false
        })
        builder.addCase(fetchProducts.rejected,(state,action) =>{
            state.isLoading = true
        })

        //addproduct
        builder.addCase(addProducts.pending,(state,action) =>{
            state.isLoading = true
        })
        builder.addCase(addProducts.fulfilled,(state,action) =>{
            state.value.push(product);
            state.isLoading = false

        })
        builder.addCase(addProducts.rejected,(state,action) =>{
            state.isLoading = true
        })
    }
})