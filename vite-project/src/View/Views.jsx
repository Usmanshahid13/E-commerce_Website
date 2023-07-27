import { Box, Button, CardMedia, Container, Grid, StepLabel, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Rating from '@mui/material/Rating';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
// import {useHistory} from "react-router-dom";
import p1 from '../assets/Images/1.jpg'
import p2 from '../assets/Images/2.jpg'
import { useDispatch} from "react-redux";
import { addToCart } from "../Feature/cartSlice";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';




const Views = () => {
  // const cart = useSelector((state) => state.cart);
  
  const [count, setCount] = useState(1);
  
  const IncNum = ()=> {
   if (count > 0 && count < 3) {
      // cart.cartQuantity=count+1;
      const counts =count+1;

      // setCount(counts );
      selectedProduct.Quantity=counts
      setCount(selectedProduct.Quantity)

      
    } 
  };
  const DecNum = () => {
    if (count > 1) {setCount(count - 1);}
    else {
      setCount(1);
      console.log(count)
      alert("min limit reached");
    }
  };  
  
  
  const arr = [
    {
      id: '0',
      category: "Seller",
      Image: "/Images/c2.jpg",
      Image1: "./Images/c2.jpg",
      Quantity:0,
      text: "Lorem ipsum jacket",
      Price: "€10.47 -€17.45",
      P:10,
    },
    {
      id: '1',
        category: "Seller",
        Image: "/Images/c1.jpg",
        Image1: "/Images/c1.jpg",
        Quantity:0,
        text: "Lorem ipsum fashion coat",
        Price: "€15.5",
        P:15,
      },
        {
            id: "2",
            texts:"Buy now",
            category: "Best Seller",
            Image: "/Images/c3.jpg",
            Quantity:0,
            Image1: "./Images/c1.jpg",
            text: "Lorem ipsum jacket",
            Price: "€22.95- €25.5",
            P:10,
        },
        {
            id:"3",
            category: "Best Seller",
            Image: "/Images/c4.jpg",
            texts:"Buy now",
            Image1: "./Images/c1.jpg",
            Quantity:0,
            text: "Lorem ipsum fashion coat",
            Price: "€10.47 -€122.45",
            P:10,
        },
        {
            id:"4",
            category: "Best Seller",
            Image: "/Images/c5.jpg",
            texts:"Buy now",
            Quantity:0,
            Image1: "./Images/c1.jpg",
            text: "Lorem ipsum jacket",
            Price: "€110.47 -€117.45",
            P:10,
        },
        {
            id: "5",
            category: "Best Seller",
            Image: "/Images/c6.jpg",
            Image1: "./Images/c1.jpg",
            texts:"Buy now",
            Quantity:0,
            text: "Lorem ipsum kids four",
            Price: "110.47 -€17.45",
            P:10,
        },
        {
          id:"6",
            category: "Best Seller",
            Image: "/Images/c7.jpg",
            texts:"Buy now",
            Quantity:0,
            Image1: "./Images/c1.jpg",
            text: "Lorem ipsum kids five",
            Price: "€10.47 -€17.45",
            P:10,
        },
        {
            id: "7",
            category: "Best Seller",
            Image: "/Images/c8.jpg",
            Image1: "./Images/c7.jpg",
            text: "Lorem ipsum jacket",
            Price: "€10.47 -€17.45",
            Quantity:0,
            texts:"Buy now",
            P:10,
        },


    // Rest of the array data
  ];
  const arr1 = [
    {
      id: '0',
      category: "Seller",
      Image: "/Images/c2.jpg",
      Image1: "/Images/c2.jpg",
      text: "Lorem ipsum jacket",
      texts:"Buy now",
      Price: "€10.47 -€17.45",
      P:10,
    },
    {
        id: '1',
        category: "Seller",
        Image: "/Images/c1.jpg",
        Image1: "/Images/c2.jpg",
        texts:"Buy now",
        text: "Lorem ipsum fashion coat",
        Price: "€15.5",
         P:10,
    },
        {
            id: "2",
            texts:"Buy now",
            category: "Best Seller",
            Image: "/Images/c3.jpg",
            Image1: "/Images/c1.jpg",
            text: "Lorem ipsum jacket",
            Price: "€22.95- €25.5",
            P:10,
        },
        {
            id:"3",
            category: "Best Seller",
            Image: "/Images/c4.jpg",
            texts:"Buy now",
            Image1: "/Images/c1.jpg",
            P:10,
            text: "Lorem ipsum fashion coat",
            Price: "€10.47 -€122.45"

        },
      ]

  const [Product, setProduct] = useState(arr1);

  const [hovered, setHovered] = useState(arr);

  const mouseOverHandler = (index) => {
      const updatedHovered = [...Product];
      updatedHovered[index] = false ;
      setHovered(updatedHovered);
    };
  
    const mouseLeaveHandler = (index) => {
      const updatedHovered = [...Product];
      updatedHovered[index] = true;
      setHovered(updatedHovered);
    };
    
  const  {id } = useParams();
  console.log({id})
  
  const selectedProduct = arr.find((product) => 
  product.id === id
  );
  const [Text, setText] = useState(1);
  const filtertext=(e)=>{
    setProduct(arr1)
   setText(e);
  }
  const navigate=useNavigate();
 
  
  const dispatch=useDispatch();
  //  let history=useHistory();
  const handleAddToCart=(selectedProduct)=>{
    selectedProduct.Quantity=count;
    dispatch(addToCart(selectedProduct));
    // navigate('/Cart');
  }
  
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  // console.log(selectedProduct.Quantity)
  
  
  return (
    <Container >
      <Grid container sx={{marginTop:"120px",width:"100%"}}>
        <Grid item sx={{display:"flex",width:"100%"}}>
          <Box sx={{width:"60%"}}>
            <CardMedia>
            <img style={{width:"100%",height:"100%"}} src={selectedProduct?.Image}></img>
              {/* <img src={selectedProduct?.Image} alt="Product Image" /> */}
            </CardMedia>
          </Box>
          <Box sx={{marginLeft:'80px',width:"40%"}}>
            <Typography variant="h5" >{selectedProduct?.text}</Typography>
            <Typography variant="h6" sx={{color:"red"}} mt={2}>{selectedProduct?.Price}</Typography>
            <Typography  mt={2}>
              Ut enim ad minima veniam, quis nostrum exercitationem ullam
              corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
              consequatur? Quis autem vel eum iure reprehenderit qui in ea
              voluptate velit esse quam nihil molestiae consequatur.
            </Typography>
            {/* <Checkbox {...label} defaultChecked color="secondary" />
      <Checkbox {...label} required color="success" />
      <Checkbox {...label} defaultChecked color="default" /> */}
            <Box sx={{display:'flex',marginTop:"50px"}}>
            <Box sx={{display:"flex",border:"1px solid  black"}}>
              <Button onClick={()=>{DecNum()}} ><RemoveIcon/></Button>
              <Typography mt={1}>{count}</Typography>
              <Button onClick={()=>{IncNum()}}><AddIcon/></Button>
            </Box>
            <Button variant="contained" sx={{ml:3}} onClick={()=>handleAddToCart(selectedProduct)} size="large">Add to cart</Button>
     
            </Box>
            <Typography mt={2}>Category: {selectedProduct?.category}</Typography>
            <Typography mt={1}>Tags: fashionwomentopsleeveless</Typography>
          </Box>
        </Grid>
      </Grid>
<Grid container>
<Box sx={{display:"flex",justifyContent:"center",width:"100%",mt:6}} >
<Typography variant="h5" sx={{fontWeight:"bold"}}  onClick={()=>{filtertext(2)}}>
  Additional Information
</Typography>
<Typography variant="h5" sx={{ml:3,fontWeight:"bold"}}  onClick={()=>{filtertext(1)}}>
  Description
</Typography>
<Typography variant="h5" sx={{ml:3,fontWeight:"bold"}}  onClick={()=>{filtertext(3)}}>
  Review (2)
</Typography>
</Box>
<Grid item>
{
  Text==1? <Box sx={{mt:5}}>
    <Typography>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</Typography>
  </Box>   :Text==2? 
  <Box sx={{display:"flex",mt:5}}>
  <Box>
<Typography sx={{fontWeight:"bold"}}>Weight</Typography>
<Typography sx={{fontWeight:"bold"}}>Dimensions</Typography>
<Typography sx={{fontWeight:"bold"}}>Materials</Typography>
<Typography sx={{fontWeight:"bold"}}>Other Info</Typography>
  </Box>
  <Box sx={{ml:3}}>
  <Typography> 400 g</Typography>
<Typography>10 x 10 x 15 cm</Typography>
<Typography> 60% cotton, 40% polyester</Typography>
<Typography> American heirloom jean shorts pug seitan letterpress</Typography> 

  </Box>
  </Box>   :Text==3?
<Box>

  <Box sx={{display:"flex",mt:6,width:"100%"}} >
<Grid container sx={{width:"60%"}}  >

<Grid item sx={{display:"flex",width:"100%"}} >
<Box>  
<CardMedia>
  <img style={{width:"100%",height:"100%"}} src={p1}>
  </img>
</CardMedia>
</Box>
<Box sx={{width:"100%",paddingX:"50px"}}>
  <Typography>
  White Lewis
  </Typography>
  <Typography>
  Vestibulum ante ipsum primis aucibus orci luctustrices posuere cubilia Curae Suspendisse viverra ed viverra. Mauris ullarper euismod vehicula. Phasellus quam nisi, congue id nulla.
  </Typography>
</Box>


</Grid>
<Grid item sx={{display:"flex",mt:5}}>
<Box>  
<CardMedia>
  <img style={{width:"100%",height:"100%"}} src={p2}>
  </img>
</CardMedia>
</Box>
<Box sx={{width:"50%",ml:3}}>
  <Typography>
  White Lewis
  </Typography>
  <Typography>
  Vestibulum ante ipsum primis aucibus orci luctustrices posuere cubilia Curae Suspendisse viverra ed viverra. Mauris ullarper euismod vehicula. Phasellus quam nisi, congue id nulla.
  </Typography>
</Box>


</Grid>
</Grid>
<Grid container sx={{width:"40%"}}>
<Grid item>
  <Typography sx={{fontWeight:"bold"}}>
  Add a Review
  </Typography>
  <Typography >
  Your rating:

  </Typography>
<Box sx={{display:'flex',mt:2}}>
<TextField variant="outlined" label="Name" size="small"></TextField>
<TextField sx={{ml:2}} variant="outlined" label="Email" size="small"></TextField>
</Box>
<Box >

<TextField variant="outlined" label="Message" size="large"  inputProps={{
                      style: {
                        height: "200px",
                      },
                    }}
sx={{width:"100%",mt:2}}></TextField>
</Box>
<Button sx={{mt:2}} variant="contained" size="large">Submit</Button>
</Grid>

</Grid>

</Box>






  </Box>:""
}



</Grid>

</Grid>

<Typography sx={{display:"flex",justifyContent:"center",mt:6}} variant="h4">Related Products</Typography>
<Grid container mt={3} spacing={4}  >

{
    Product.map((elem) => {
        const {id, Image, text,texts, Price ,Image1,P} = elem;
        return (
            // eslint-disable-next-line react/jsx-key
            <Grid item md={3} key={id} sx={{position:"relative"}}
            onMouseOver={() => mouseOverHandler(id)}
onMouseLeave={() => mouseLeaveHandler(id)}

onClick={()=>{navigate(`/Views/${id}`)}} >
                <CardMedia >
                {/* <img style={{ height: "100%", width: "100%" }} src={Image}></img> */}
     { hovered[id]? <img style={{ height: "100%", width: "100%" }}   src={Image}/>  
     : <img style={{ height: "100%", width: "100%" }}  src={Image1}/>
      }              
                   
                </CardMedia>
            { hovered[id]==false?
                <Box sx={{display:"flex",backgroundColor:"purple",position:"absolute",bottom:"90px",width:'85%',justifyContent:"space-between",padding:'10px',"&:hover":{backgroundColor:"black",color:"white"}}}>
                  <RemoveRedEyeIcon/>
                <Typography variant="h5">{hovered[id]==false? texts :""}</Typography>
                <FavoriteBorderIcon/>
                </Box>:""
            }
                <Typography variant="h6" sx={{ display: "flex", justifyContent: "center" }} >{text}</Typography>
                <Rating name="read-only" sx={{ display: "flex", justifyContent: "center" }} value={4} readOnly />
                <Typography sx={{ display: "flex", justifyContent: "center", fontWeight: "bold" }}>{Price}</Typography>
                   <Typography>{}</Typography>
            </Grid>

        )
    })
}

</Grid>

      
    </Container>
  );
};

export default Views;
