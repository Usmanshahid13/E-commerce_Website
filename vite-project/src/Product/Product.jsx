import { Container, Typography, Box, Grid, CardMedia } from "@mui/material"
import { useState } from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Rating from '@mui/material/Rating';
import {useNavigate} from "react-router-dom"


const Product = () => {

    const navigate=useNavigate();

    const arr = [
        {
            id: 0,
            category: "Best Seller",
            Image: "./Images/c1.jpg",
            Image1: "./Images/c2.jpg",
            text: "Lorem ipsum jacket",
            texts:"Buy now",
            Price: "€10.47 -€17.45",
            rating:"3"
        },
        {
            id: 1,
            category: "Best Seller",
            Image: "./Images/c2.jpg",
            Image1: "./Images/c1.jpg",
            texts:"Buy now",
            text: "Lorem ipsum fashion coat",
            Price: "€15.5",
            rating:"4",
        },
        {
            id: 2,
            texts:"Buy now",
            category: "Best Seller",
            Image: "./Images/c3.jpg",
            Image1: "./Images/c1.jpg",
            text: "Lorem ipsum jacket",
            Price: "€22.95- €25.5" ,
            rating:"4",
        },
        {
            id: 3,
            category: "Best Seller",
            Image: "./Images/c4.jpg",
            texts:"Buy now",
            Image1: "./Images/c1.jpg",
            text: "Lorem ipsum fashion  coat",
            Price: "€10.47 -€122.45",
            rating:"4",
        },
        {
            id: 4,
            category: "Best Seller",
            Image: "./Images/c5.jpg",
            texts:"Buy now",
            Image1: "./Images/c1.jpg",
            text: "Lorem ipsum jacket",
            Price: "€110.47 -€117.45",
            rating:"4",
        },
        {
            id: 5,
            category: "Best Seller",
            Image: "./Images/c6.jpg",
            Image1: "./Images/c1.jpg",
            texts:"Buy now",
            text: "Lorem ipsum kids four",
            Price: "110.47 -€17.45",
            rating:"4",
        },
        {
            id: 6,
            category: "Best Seller",
            Image: "./Images/c7.jpg",
            texts:"Buy now",
            Image1: "./Images/c1.jpg",
            text: "Lorem ipsum kids five",
            Price: "€10.47 -€17.45",
            rating:"4",
        },
        {
            id: 7,
            category: "Best Seller",
            Image: "./Images/c8.jpg",
            Image1: "./Images/c7.jpg",
            text: "Lorem ipsum jacket",
            Price: "€10.47 -€17.45",
            texts:"Buy now",
            rating:"4",
        },



    ];

    const arr1 = [
        {
            id: 1,
            category: "Best Seller",
            Image: "./Images/c2.jpg",
            Image1: "./Images/c1.jpg",
            text: "Lorem ipsum jacket",
            Price: "€10.47 -€17.45",
            setValue: "1",
            rating:"4",
        },
        {
            id: 2,
            category: "Best Seller",
            Image: "./Images/c1.jpg",
            Image1: "./Images/c2.jpg",
            text: "Lorem ipsum fashion coat",
            Price: "€15.5",
            rating:"4",
        },
        {
            id: 3,
            category: "Best Seller",
            Image: "./Images/c5.jpg",
            Image1: "./Images/c2.jpg",
            text: "Lorem ipsum jacket",
            Price: "€22.95- €25.5",
            rating:"4",
        },
        {
            id: 4,
            category: "Best Seller",
            Image:"./Images/c7.jpg",
            Image1: "./Images/c2.jpg",
            text: "Lorem ipsum fashion female coat",
            Price: "€10.47 -€122.45",
            rating:"4",
        },
        {
            id: 5,
            category: "Best Seller",
            Image: "./Images/c5.jpg",
            Image1: "./Images/c2.jpg",
            text: "Lorem ipsum jacket",
            Price: "€110.47 -€117.45",
            rating:"4",
        },
        {
            id: 6,
            category: "Best Seller",
            Image: "./Images/c6.jpg",
            Image1: "./Images/c2.jpg",
            text: "Lorem ipsum kids four",
            Price: "110.47 -€17.45",
            rating:"4",
        },
        {
            id: 7,
            category: "Best Seller",
            Image: "./Images/c7.jpg",
            Image1: "./Images/c2.jpg",
            text: "Lorem ipsum kids five",
            Price: "€10.47 -€17.45",
            rating:"4",
        },
        {
            id: 8,
            category: "Best Seller",
            Image:"./Images/c5.jpg",
            text: "Lorem ipsum jacket",
            Image1: "./Images/c2.jpg",
            Price: "€10.47 -€17.45",
            rating:"4",
        },



    ];

    const arr2 = [
        {
            id: 1,
            category: "Best Seller",
            Image: "./Images/c5.jpg",
            Image1: "./Images/c2.jpg",
            text: "Lorem ipsum jacket",
            Price: "€10.47 -€17.45",
            setValue: "1",
            rating:"4",
        },
        {
            id: 2,
            category: "Best Seller",
            Image:"./Images/c7.jpg",
            Image1: "./Images/c2.jpg",
            text: "Lorem ipsum fashion coat",
            Price: "€15.5",
            rating:"4",
        },
        {
            id: 3,
            category: "Best Seller",
            Image: "./Images/c7.jpg",
            Image1: "./Images/c2.jpg",
            text: "Lorem ipsum jacket",
            Price: "€22.95- €25.5",
            rating:"4",
        },
        {
            id: 4,
            category: "Best Seller",
            Image:"./Images/c7.jpg",
            Image1: "./Images/c2.jpg",
            text: "Lorem ipsum fashion coat",
            Price: "€10.47 -€122.45",
            rating:"4",
        },
        {
            id: 5,
            category: "Best Seller",
            Image: "./Images/c5.jpg",
            Image1: "./Images/c2.jpg",
            text: "Lorem ipsum jacket",
            Price: "€110.47 -€117.45",
            rating:"4",
        },
        {
            id: 6,
            category: "Best Seller",
           Image: "./Images/c2.jpg",
           Image1: "./Images/c5.jpg",
            text: "Lorem ipsum kids four",
            Price: "110.47 -€17.45",
            rating:"4",
        },
        {
            id: 7,
            category: "Best Seller",
            Image: "./Images/c7.jpg",
            Image1: "./Images/c2.jpg",
            text: "Lorem ipsum kids five",
            Price: "€10.47 -€17.45",
            rating:"4",
        },
        {
            id: 8,
            category: "Best Seller",
            Image:"./Images/c5.jpg",
            Image1: "./Images/c2.jpg",
            text: "Lorem ipsum jacket",
            Price: "€10.47 -€17.45",
            rating:"4",
        },



    ];

    const filterProduct = (categoryitem) => {
        const updateditem = arr.filter((curElem) => {
            return curElem.category === categoryitem;
        });
        setProduct(updateditem);
    }

    const filterrProduct = (categoryitem) => {
        const updateditem = arr1.filter((curElem) => {
            return curElem.category === categoryitem;
        });
        setProduct(updateditem);
    }
    const filteerrProduct = (categoryitem) => {
        const updateditem = arr2.filter((curElem) => {
            return curElem.category === categoryitem;
        });
        setProduct(updateditem);
    }

    // const [changes, setChanges] = useState();
    // const Changes = (e) => {
    //     // const updateditem=arr1.filter((curElem)=>{
    //     //     return curElem.category===categoryitem;
    //     // });
    //     setChanges(e);
        
    //     // setProduct(updateditem);
    // }
    // const[duct,seuct]=useState(arr);
    const [Product, setProduct] = useState(arr);

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
    // const updatedstar=arr.filter((curElem)=>{
    //      setValue(curElem.star);
    // });

    // const [value, setValue] = useState();
    return (

        <Container maxWidth={false} >
            <Typography variant="h2" sx={{ display: "flex", justifyContent: "center", mt: 6 }}  >
                DAILY DEALS!
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
                <Typography variant="h5"  onClick={()=>{filteerrProduct("Best Seller")}}>
                    New Arrivals
                </Typography>
                <Typography variant="h5" ml={5} onClick={() => { filterProduct("Best Seller") }}>
                    Best Seller
                </Typography>
                <Typography variant="h5" ml={5} onClick={()=>{filterrProduct("Best Seller")}}>
                    Sale Items
                </Typography>
            </Box>

            <Grid container mt={6} spacing={3}  >

                {
                    Product.map((elem) => {
                        const {id, Image, text,texts, Price ,Image1,rating} = elem;
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
                                <Box sx={{display:"flex",backgroundColor:"purple",position:"absolute",bottom:"80px",width:'85%',justifyContent:"space-between",padding:'10px',"&:hover":{backgroundColor:"black",color:"white"}}}>
                                  <RemoveRedEyeIcon/>
                                <Typography variant="h5">{hovered[id]==false? texts :""}</Typography>
                                <FavoriteBorderIcon/>
                                </Box>:""
                            }
                                <Typography variant="h6" sx={{ display: "flex", justifyContent: "center" }} >{text}</Typography>
                                <Rating name="read-only" sx={{ display: "flex", justifyContent: "center" }} value={rating} readOnly />
                                <Typography sx={{ display: "flex", justifyContent: "center", fontWeight: "bold" }}>{Price}</Typography>

                            </Grid>

                        )
                    })
                }

            </Grid>
        </Container>
    )
}

export default Product
