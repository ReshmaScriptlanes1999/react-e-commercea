import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface Products {
  _id: string;
  product_name: string;
  product_price: string;
  product_image: string;
  product_details: string;
}
const initalState :Products[]=[]
const ProductsState = createSlice({
  name: "Products",
  initialState: {
    products:initalState
  },
  reducers: {
    add_product_list: (state, action: PayloadAction<any>) => {
      console.log(action);
      
      state.products=[...action.payload]
    },
  },
});
export const { add_product_list } = ProductsState.actions;
export default ProductsState.reducer;
