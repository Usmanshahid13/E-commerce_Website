import { useEffect } from "react";
import {  useSelector,useDispatch } from "react-redux";
import { removeFromCart,clearCart,getTotals } from '../Feature/cartSlice'; 
// // import {
// //   addToCart,
// //   clearCart,
// //   decreaseCart, 
// //   getTotals,
// //   removeFromCart,
// // } from "../slices/cartSlice";

import {  Box, Button, CardMedia, Container, Grid,  Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

const Cart = () => {
const navigate=useNavigate();
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
console.log(cart)
 

useEffect(() => {
    
    dispatch(getTotals());
  }, [cart, dispatch]);

  // const handleAddToCart = (product) => {
  //   dispatch(addToCart(product));
  // };
  const handleRemoveFromCart = (itemId) => {
    // Implement the logic to remove the item with the given ID from the cart
    // Here, you will need to use dispatch to trigger the remove action in the Redux store.
   dispatch(removeFromCart(itemId));
    // Don't forget to update the localStorage as well.
  };
  // const handleDecreaseCart = (product) => {
  //   dispatch(decreaseCart(product));
  // };
  // const handleRemoveFromCart = (product) => {
  //   dispatch(removeFromCart(product));
  // };
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <Container sx={{marginTop:"120px"}}>
      <Typography variant="h2">Shopping Cart</Typography>
                    <Box sx={{display:"flex",justifyContent:"space-around",width:"100%",mt:4}}>
                      <Typography variant="h6">
                          IMAGE
                      </Typography>
                      <Typography variant="h6">
                        PRODUCT NAME
                      </Typography>
                      <Typography variant="h6">
                          QTY
                      </Typography>
                      <Typography variant="h6">
                          SUB TOTAL
                      </Typography>
                      <Typography variant="h6">
                          ACTION
                      </Typography>
                    </Box>
      {cart.cartitems.length === 0 ? (
                <Typography>Cart is Empty</Typography>
              ) : (
                cart.cartitems.map((cartItem) => (
                    <Grid container key={cartItem.id} md={12}  sx={{width:"100%",height:"200px"}} >
     
                    <Grid  item  xs={12} md={12}  sx={{display:"flex",justifyContent:"space-around",width:"100%"}} >
                  
                      <Box sx={{display:"flex",justifyContent:"space-around",width:"100%",mt:4}}>
                        <CardMedia >
                          <img style={{height:"15%",width:"100%"}} src={cartItem.Image} alt="Cart item" />
                        </CardMedia>
{/* 
                      </Box>
                      <Box sx={{display:"flex",justifyContent:"space-around",width:"90%",mt:4}}> */}

                          <Typography >{cartItem.text}</Typography>
                          <Typography>{cartItem.Quantity}</Typography>
                          <Typography>{cartItem.P*cartItem.Quantity}</Typography>
                          
                          <Button sx={{height:"40px"}} variant="contained" onClick={() => handleRemoveFromCart(cartItem)}>
                            Remove
                          </Button>
                      </Box>
                       
                      </Grid>

                     </Grid>
                ))
              )}
                      <Box sx={{display:"flex",justifyContent:"space-between",width:"100%"}}>
                        <Button variant="contained" onClick={()=>{navigate('/shop')}}>Continue Shopping</Button>
                        <Button variant="contained" onClick={()=>{handleClearCart()}}>Clear Cart</Button>
                      </Box>
                      <Box sx={{display:"flex",justifyContent:"flex-end",mt:6}}>
                  <Typography variant="h5">CART TOTAL :</Typography>
                 <Typography variant="h6">{cart.cartTotalAmount}</Typography>
                      </Box>
    </Container>
  );
  
};

export default Cart;














