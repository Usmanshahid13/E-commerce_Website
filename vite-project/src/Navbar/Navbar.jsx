// import React from 'react';
import { AppBar, Badge, Box, Button, CardMedia, Container, Grid, Typography } from "@mui/material";
import logo from '../assets/Images/logo.png';
import { useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from '../Feature/cartSlice'; // Assuming the path to cartSlice is correct
// import { toast } from 'react-toastify';

// import SearchIcon from "@mui/icons-material/Search";

const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Function to handle adding items to the cart
  // const handleAddToCart = (item) => {
  //   dispatch(addToCart(item));
  // };

  // Function to handle removing items from the cart
  const handleRemoveFromCart = (itemId) => {
    // Implement the logic to remove the item with the given ID from the cart
    // Here, you will need to use dispatch to trigger the remove action in the Redux store.
   dispatch(removeFromCart(itemId));
    // Don't forget to update the localStorage as well.
  };
  // console.log(cart.Quantity)

  return (
    <AppBar sx={{ backgroundColor: "white", height: "80px" }} elevation={0}>
      <Container sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}>
        <Box sx={{ mt: 2 }} >
          <img src={logo} alt="Logo"></img>
        </Box>
        <Box sx={{display:"flex",justifyContent:"center"}}>
          <Button sx={{color:"black"}} onClick={()=>{navigate("/")}}>
            Home
          </Button>
          <Button sx={{color:"black"}} onClick={()=>{navigate("/shop")}}>
            Shop
          </Button>
          <Button sx={{color:"black"}}>
            Portfolio
          </Button>
          <Button sx={{color:"black"}} >
      About
          </Button>
          <Button sx={{color:"black",  }}>
            Contact
          </Button>
                  </Box>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <FormControl sx={{ width: "80px" }}>
            <InputLabel id="demo-simple-select-label" >
              <Badge badgeContent={cart.cartitems.length} color="primary" sx={{ mt: 1, mr: 2 }}>
                <ShoppingCartIcon sx={{ color: "black" }} />
              </Badge>
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              
              // value={age}
              // label="Age"
              // onChange={handleChange}
            >
              {cart.cartitems.length === 0 ? (
                <MenuItem  value={10}>Cart is Empty</MenuItem>
              ) : (
                cart.cartitems.map((cartItem) => (
                  <MenuItem  sx={{width:"500px"}}
key={cartItem.id}>
                    <Grid container md={12} >
                      <Grid sx={{display:"flex"}} item   md={12}>
                      <Box sx={{width:"20%"}} > 
                        <CardMedia>
                          <img style={{height:"100%",width:"100%"}} src={cartItem.Image} alt="Cart item" />
                        </CardMedia>
                      </Box>
                    
                        <Box sx={{width:"90%",ml:2}} >      
                          <Typography>{cartItem.text}</Typography>
                          <Typography>{cartItem.Price}</Typography>
                          <Typography>Quantity: {cartItem.Quantity}</Typography>
                          <button onClick={() => handleRemoveFromCart(cartItem)}>
                            Remove
                          </button>
                        </Box>
                      </Grid>
                    </Grid>
                  </MenuItem>
                ))
              )}
<MenuItem sx={{width:"500px"}}>

               <Button variant="contained" onClick={()=>{navigate('/Cart')}}>View Cart</Button>
</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Container>
    </AppBar>
  )
}

export default Navbar;
