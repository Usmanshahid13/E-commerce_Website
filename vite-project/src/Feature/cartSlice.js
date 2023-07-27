import { createSlice } from "@reduxjs/toolkit";
import {toast} from 'react-toastify'


const initialState={
    cartitems:localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem("cartItems")):[],
    cartQuantity:0,
    cartTotalAmount:0
}

const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
     addToCart(state,action){
        // state.cartitems.push(action.payload);
        const existingIndex=state.cartitems.findIndex((item)=>item.id===action.payload.id)
        if (existingIndex >= 0) {
            state.cartitems[existingIndex] = {
              ...state.cartitems[existingIndex],
              Quantity: state.cartitems[existingIndex].Quantity+action.payload.Quantity,
            };
            toast.info("Increased product quantity", {
              position: "bottom-left",
            });}
        else{
            const tempProduct={...action.payload}
            state.cartitems.push(tempProduct);
            toast.success("add cart item",{
                position:"bottom-left"
            }) ;
        }
        localStorage.setItem("cartItems",JSON.stringify(state.cartitems))
     },
     removeFromCart(state, action) {
       
         
            const nextCartItems = state.cartitems.filter(
              (item) => item.id !== action.payload.id
            );
  
            state.cartitems = nextCartItems;
  
            toast.error("Product removed from cart", {
              position: "bottom-left",
            });
          
          localStorage.setItem("cartItems", JSON.stringify(state.cartitems));
          return state;

      },
      clearCart(state, action) {
        state.cartitems = [];
        localStorage.setItem("cartItems", JSON.stringify(state.cartitems));
        toast.error("Cart cleared", { position: "bottom-left" });
      },
      getTotals(state, action) {
        let { total, quantity } = state.cartitems.reduce(
          (cartTotal, cartItem) => {
            const { P, Quantity } = cartItem;
            const itemTotal = P * Quantity;
  
            cartTotal.total += itemTotal;
            cartTotal.quantity += Quantity;
  
            return cartTotal;
          },
          {
            total: 0,
            quantity: 0,
          }
        );
        total = parseFloat(total.toFixed(2));
        state.cartTotalQuantity = quantity;
        state.cartTotalAmount = total;
      },
    },

});

export const {addToCart,removeFromCart,clearCart,getTotals}=cartSlice.actions; 
export default cartSlice.reducer;