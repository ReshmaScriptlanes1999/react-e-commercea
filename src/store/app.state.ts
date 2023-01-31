import { configureStore } from "@reduxjs/toolkit";
import  ProductsState  from "../Pages/home/store/Products.store";

 const AppStore=configureStore({
    reducer:{
        products:ProductsState
    }
})
export default AppStore