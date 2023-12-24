import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { __ProductState } from './constants';
import productsApi from '../../utils/apis/products-api';

const initialState: __ProductState = {
    products: [],
    selectedProduct: null,
};

export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
    const response = await productsApi.get("/products");
    return response.data;
})

export const fetchProductById = createAsyncThunk("products/fetchProductById", async ({id}: {id: string}) => {
    const response = await productsApi.get(`/products/${id}`);
    return response.data;
})

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        removeSelectedProduct(state) {
            state.selectedProduct = null;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.products = action.payload;
        }),
        builder.addCase(fetchProductById.fulfilled, (state, action) => {
            state.selectedProduct = action.payload
        })
    }
})

export const { removeSelectedProduct } = productSlice.actions;

export default productSlice.reducer;