// import { Container ,Grid, TextField ,IconButton ,CardMedia , Box,  Typography} from "@mui/material"
// import { useState } from "react";
// // import InputAdornment from "@material-ui/core/InputAdornment";
// import SearchIcon from "@mui/icons-material/Search";
// import FormGroup from '@mui/material/FormGroup';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
// import Rating from '@mui/material/Rating';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import {useNavigate} from "react-router-dom"
// // import Pagination from '@mui/material/Pagination';
// // import Stack from '@mui/material/Stack';


// const Shop = () => {
//     const navigate=useNavigate();
//     const arr=[
//         {
//             id: 0,
//             category: "Best Seller",
//             Image: "./Images/c1.jpg",
//             Image1: "./Images/c2.jpg",
//             text: "Lorem ipsum jacket",
//             texts:"Buy now",
//             name:"lorem ipsum jacket",
//             Price: "€10.47 -€17.45"
//         },
//         {
//             id: 1,
//             category: "Best Seller",
//             Image: "./Images/c2.jpg",
//             Image1: "./Images/c1.jpg",
//             texts:"Buy now",
//             name:"lorem ipsum coat",
//             text: "Lorem ipsum fashion coat",
//             Price: "€15.5"
//         },
//         {
//             id: 2,
//             texts:"Buy now",
//             category: "Best Seller",
//             Image: "./Images/c3.jpg",
//             name:"lorem ipsum coat",
//             Image1: "./Images/c1.jpg",
//             text: "Lorem ipsum jacket",
//             Price: "€22.95- €25.5"
//         },
//         {
//             id: 3,
//             category: "Best Seller",
//             Image: "./Images/c4.jpg",
//             texts:"Buy now",
//             name:"lorem ipsum jacket",
//             Image1: "./Images/c1.jpg",
//             text: "Lorem ipsum fashion female coat",
//             Price: "€10.47 -€122.45"
//         },
//         {
//             id: 4,
//             category: "Best Seller",
//             Image: "./Images/c5.jpg",
//             texts:"Buy now",
//             name:"lorem ipsum jacket",
//             Image1: "./Images/c1.jpg",
//             text: "Lorem ipsum jacket",
//             Price: "€110.47 -€117.45"
//         },
//         {
//             id: 5,
//             category: "Best Seller",
//             Image: "./Images/c6.jpg",
//             Image1: "./Images/c1.jpg",
//             texts:"Buy now",
//             name:"lorem ipsum coat",
//             text: "Lorem ipsum kids four",
//             Price: "110.47 -€17.45"
//         },
//         {
//             id: 6,
//             category: "Best Seller",
//             Image: "./Images/c7.jpg",
//             texts:"Buy now",
//             Image1: "./Images/c1.jpg",
//             name:"lorem ipsum jacket",
//             text: "Lorem ipsum kids five",
//             Price: "€10.47 -€17.45"
//         },
//         {
//             id: 7,
//             category: "Best Seller",
//             Image: "./Images/c8.jpg",
//             Image1: "./Images/c7.jpg",
//             text: "Lorem ipsum jacket",
//             name:"lorem ipsum coat",
//             Price: "€10.47 -€17.45",
//             texts:"Buy now"
//         },


//     {
//         id:8,
//         categories:"All",
//         category:"Best Seller",

//         Image:"./Images/c8.jpg",
//         Image1:"./Images/c2.jpg",
//         name:"lorem ipsum jacket",
//         texts:"Buy now",
//         Price: "€10.47 -€17.45",
//     },
   
//         {
//             id:9,
//             categories:"All",
//             category:"Electronics",
//             Image:'./Images/e1.jpg',
//             Image1:"./Images/c6.jpg",
//             name:"lorem ipsum jacket",
//             texts:"Buy now",
//             Price: "€10.47 -€17.45",
//         },
//         {
//             id:10,
//             categories:"All",
//             category:"Electronics",
//             Price: "€10.47 -€17.45",
//             Image:'./Images/e2.jpg',
//             name:"lorem ipsum coat",
//             Image1:"./Images/e1.jpg",
//             texts:"Buy now",
//         },
//         {
//             id:11,
//             Price: "€10.47 -€17.45",
//             categories:"All",
//             category:"Electronics",
//             Image:'./Images/e3.jpg',
//             Image1:"./Images/e5.jpg",
//             name:"lorem ipsum jacket",
//             texts:"Buy now",
//         },
//         {
//             id:12,
//             Price: "€10.47 -€17.45",
//             categories:"All",
//             category:"Electronics",
//             Image:'./Images/e4.jpg',
//             Image1:"./Images/e6.jpg",
//             name:"lorem ipsum coat",
//             texts:"Buy now",
//         },
//         {
//             Price: "€10.47 -€17.45",
//             id:13,
//             categories:"All",
//             category:"Electronics",
//             Image:'./Images/e5.jpg',
//             name:"lorem ipsum jacket",
//             Image1:"./Images/c6.jpg",
//             texts:"Buy now",
//         },
//         {
//             id:14,
//             categories:"All",
//             category:"Electronics",
//             Image:'./Images/e6.jpg',
//               Image1:"./Images/c6.jpg",
//               Price: "€10.47 -€17.45",
//               name:"lorem ipsum jacket",
//             texts:"Buy now",
//         },
//         {
//             id:15,
//             categories:"All",
//             category:"Electronics",
//             name:"lorem ipsum coat",
//             Image:'./Images/e7.jpg',
//             Image1:"./Images/e6.jpg",
//             texts:"Buy now",
//         },
//         {
//             id:16,
//             categories:"All",
//             Price: "€10.47 -€17.45",
//             category:"Electronics",
//             name:"lorem ipsum coat",
//             Image:'./Images/e8.jpg',
//             Image1:"./Images/c6.jpg",
//             texts:"Buy now",
//         },
//         {
//             id:17,
//             categories:"All",
//             category:"Electronics",
//             Image:'./Images/e9.jpg',
//             Image1:"./Images/c6.jpg",
//             name:"lorem ipsum jacket",
//             texts:"Buy now",
//             Price: "€10.47 -€17.45",
//         },
//         {
//             id:18,
//             categories:"All",
//             category:"Electronics",
//             Image:'./Images/e10.jpg',
//             Price: "€10.47 -€17.45", 
//             name:"lorem ipsum jacket",
//              Image1:"./Images/c6.jpg",
//             texts:"Buy now",
//         }
//     ]


//     const filterProduct=(categoryitem)=>{
//         const updateditem=arr.filter((curElem)=>{
//           return curElem.categories===categoryitem;
//         });
//         setProduct(updateditem);
//      }
//      const filterrProduct=(categoryitem)=>{
//         const updateditem=arr.filter((curElem)=>{
//           return curElem.category===categoryitem;
//         });
//         setProduct(updateditem);
//      }
//      const [hovered, setHovered] = useState(arr);

//      const mouseOverHandler = (index) => {
//          const updatedHovered = [...Product];
//          updatedHovered[index] = false ;
//          setHovered(updatedHovered);
//        };
     
//        const mouseLeaveHandler = (index) => {
//          const updatedHovered = [...Product];
//          updatedHovered[index] = true;
//          setHovered(updatedHovered);
//        };
//      const[Product,setProduct]=useState(arr);
//      const handleSearchChange = (event) => {
//         setSearchQuery(event.target.value);
//       };
//       const filteredProduct = Product.filter((elem) => {
//         return elem.name.toLowerCase().includes(searchQuery.toLowerCase());
//       });
//       const [searchQuery, setSearchQuery] = useState("");
     


//     //  const [pageApi, setPageApi] = useState(1);


//   return (
//   <Container maxWidth={false} sx={{display:"flex",width:"100%",marginTop:"150px",marginLeft:"auto",marginRight:"auto"}} >
//   <Grid container sx={{width:"30%",marginLeft:"auto",marginRight:"auto"}} spacing={2}>
//   <Grid item>

//   <Typography variant="h6">
//     Search
//   </Typography>
//   <TextField  variant="outlined" label="Search here.." size="small" sx={{mt:2,width:"100%"}}   
//    InputProps={{
//                   endAdornment: (
//                     <IconButton>
//                       <SearchIcon/>
//                     </IconButton>
//                   ),
//                 }}
//   ></TextField>
//   <Typography variant="h6" sx={{mt:2}}>
// Category
//   </Typography>
//   <FormGroup>
//   <FormControlLabel control={<Checkbox />} onClick={()=>{filterProduct("All")}} label="All category" />
//       <FormControlLabel control={<Checkbox />} onClick={()=>{filterrProduct("Best Seller")}} label="Men" />
//       <FormControlLabel control={<Checkbox />} onClick={()=>{filterrProduct("Women")}} label="Women" />
//       <FormControlLabel control={<Checkbox />} onClick={()=>{filterrProduct("Electronics")}} label="Electronics" />
//     </FormGroup>
//   </Grid>
  
//   </Grid>
      
  
//     <Grid container  spacing={3} sx={{width:"70%",marginLeft:"auto",marginRight:"auto"}}>
//     <Box sx={{display:"flex",width:"100%",mt:3,ml:3}}>
//     <TextField
//   variant="outlined"
//   type="search"
//   value={searchQuery}
//   label="Default"
//   size="small"
//   onChange={handleSearchChange}
// >
//   {/* Conditional check before mapping through filteredProduct */}
//   {filteredProduct && (
//     <ul>
//       {filteredProduct.map((elem) => (
//         <li key={elem.id}>
//           {elem.category}-{elem.category}
//         </li>
//       ))}
//     </ul>
//   )}
// </TextField>

//      <Typography sx={{ml:5}}>Showing 10 of 144 result</Typography>
//     </Box>
//     {
//                     Product.map((elem) => {
//                         const {id, Image, texts, Price ,Image1} = elem;
//                         return (
//                             // eslint-disable-next-line react/jsx-key
//                             <Grid item md={4} key={id} sx={{position:"relative"}}
//                             onMouseOver={() => mouseOverHandler(id)}
//           onMouseLeave={() => mouseLeaveHandler(id)}
        
//           onClick={()=>{navigate(`/Views/${id}`)}} >
//                                 <CardMedia >
//                                 {/* <img style={{ height: "100%", width: "100%" }} src={Image}></img> */}
//                      { hovered[id]? <img style={{ height: "100%", width: "100%" }}   src={Image}/>  
//                      : <img style={{ height: "100%", width: "100%" }}  src={Image1}/>
//                       }              
                                   
//                                 </CardMedia>
//                             { hovered[id]==false?
//                                 <Box sx={{display:"flex",backgroundColor:"purple",position:"absolute",bottom:"90px",width:'85%',justifyContent:"space-between",padding:'10px',"&:hover":{backgroundColor:"black",color:"white"}}}>
//                                   <RemoveRedEyeIcon/>
//                                 <Typography variant="h5">{hovered[id]==false? texts :""}</Typography>
//                                 <FavoriteBorderIcon/>
//                                 </Box>:""
//                             }
//                                 <Typography variant="h6" sx={{ display: "flex", justifyContent: "center" }} >Lorem ipsum jacket</Typography>
//                                 <Rating name="read-only" sx={{ display: "flex", justifyContent: "center" }} value={4} readOnly />
//                                 <Typography sx={{ display: "flex", justifyContent: "center", fontWeight: "bold" }}>{Price}</Typography>

//                             </Grid>

//                         )
//                     })
//                 }

//         </Grid>
//         {/* <Box  sx={{display:"flex",flexDirection:"column"}}>

// <Stack spacing={2} sx={{display:"flex",flexDirection:"column"}}>
// <Pagination  sx={{display:"flex",flexDirection:"column"}} count={10} color="primary" />
//     </Stack>
//         </Box> */}
//   </Container>
//   )
// }

// export default Shop
// // onChange={(e, value) => setPageApi(value)}





import { Container, Grid, TextField, IconButton, CardMedia, Box, Typography, Card } from "@mui/material";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import FormGroup from '@mui/material/FormGroup';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Rating from '@mui/material/Rating';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useNavigate } from "react-router-dom";

const Shop = () => {
    const navigate = useNavigate();
      const arr=[
        {
            id: 0,
            category: "Best Seller",
            Image: "./Images/c1.jpg",
            Image1: "./Images/c2.jpg",
            text: "Lorem ipsum jacket",
            texts:"Buy now",
            name:"lorem ipsum jacket",
            Price: "€10.47 -€17.45"
        },
        {
            id: 1,
            category: "Best Seller",
            Image: "./Images/c2.jpg",
            Image1: "./Images/c1.jpg",
            texts:"Buy now",
            name:"lorem ipsum coat",
            text: "Lorem ipsum fashion coat",
            Price: "€15.5"
        },
        {
            id: 2,
            texts:"Buy now",
            category: "Best Seller",
            Image: "./Images/c3.jpg",
            name:"lorem ipsum coat",
            Image1: "./Images/c1.jpg",
            text: "Lorem ipsum jacket",
            Price: "€22.95- €25.5"
        },
        {
            id: 3,
            category: "Best Seller",
            Image: "./Images/c4.jpg",
            texts:"Buy now",
            name:"lorem ipsum jacket",
            Image1: "./Images/c1.jpg",
            text: "Lorem ipsum fashion female coat",
            Price: "€10.47 -€122.45"
        },
        {
            id: 4,
            category: "Best Seller",
            Image: "./Images/c5.jpg",
            texts:"Buy now",
            name:"lorem ipsum jacket",
            Image1: "./Images/c1.jpg",
            text: "Lorem ipsum jacket",
            Price: "€110.47 -€117.45"
        },
        {
            id: 5,
            category: "Best Seller",
            Image: "./Images/c6.jpg",
            Image1: "./Images/c1.jpg",
            texts:"Buy now",
            name:"lorem ipsum coat",
            text: "Lorem ipsum kids four",
            Price: "110.47 -€17.45"
        },
        {
            id: 6,
            category: "Best Seller",
            Image: "./Images/c7.jpg",
            texts:"Buy now",
            Image1: "./Images/c1.jpg",
            name:"lorem ipsum jacket",
            text: "Lorem ipsum kids five",
            Price: "€10.47 -€17.45"
        },
        {
            id: 7,
            category: "Best Seller",
            Image: "./Images/c8.jpg",
            Image1: "./Images/c7.jpg",
            text: "Lorem ipsum jacket",
            name:"lorem ipsum coat",
            Price: "€10.47 -€17.45",
            texts:"Buy now"
        },


    {
        id:8,
        categories:"All",
        category:"Best Seller",

        Image:"./Images/c8.jpg",
        Image1:"./Images/c2.jpg",
        name:"lorem ipsum jacket",
        texts:"Buy now",
        Price: "€10.47 -€17.45",
    },
   
        {
            id:9,
            categories:"All",
            category:"Electronics",
            Image:'./Images/e1.jpg',
            Image1:"./Images/c6.jpg",
            name:"lorem ipsum jacket",
            texts:"Buy now",
            Price: "€10.47 -€17.45",
        },
        {
            id:10,
            categories:"All",
            category:"Electronics",
            Price: "€10.47 -€17.45",
            Image:'./Images/e2.jpg',
            name:"lorem ipsum coat",
            Image1:"./Images/e1.jpg",
            texts:"Buy now",
        },
        {
            id:11,
            Price: "€10.47 -€17.45",
            categories:"All",
            category:"Electronics",
            Image:'./Images/e3.jpg',
            Image1:"./Images/e5.jpg",
            name:"lorem ipsum jacket",
            texts:"Buy now",
        },
        {
            id:12,
            Price: "€10.47 -€17.45",
            categories:"All",
            category:"Electronics",
            Image:'./Images/e4.jpg',
            Image1:"./Images/e6.jpg",
            name:"lorem ipsum coat",
            texts:"Buy now",
        },
        {
            Price: "€10.47 -€17.45",
            id:13,
            categories:"All",
            category:"Electronics",
            Image:'./Images/e5.jpg',
            name:"lorem ipsum jacket",
            Image1:"./Images/c6.jpg",
            texts:"Buy now",
        },
        {
            id:14,
            categories:"All",
            category:"Electronics",
            Image:'./Images/e6.jpg',
              Image1:"./Images/c6.jpg",
              Price: "€10.47 -€17.45",
              name:"lorem ipsum jacket",
            texts:"Buy now",
        },
        {
            id:15,
            categories:"All",
            category:"Electronics",
            name:"lorem ipsum coat",
            Image:'./Images/e7.jpg',
            Image1:"./Images/e6.jpg",
            texts:"Buy now",
        },
        {
            id:16,
            categories:"All",
            Price: "€10.47 -€17.45",
            category:"Electronics",
            name:"lorem ipsum coat",
            Image:'./Images/e8.jpg',
            Image1:"./Images/c6.jpg",
            texts:"Buy now",
        },
        {
            id:17,
            categories:"All",
            category:"Electronics",
            Image:'./Images/e9.jpg',
            Image1:"./Images/c6.jpg",
            name:"lorem ipsum jacket",
            texts:"Buy now",
            Price: "€10.47 -€17.45",
        },
        {
            id:18,
            categories:"All",
            category:"Electronics",
            Image:'./Images/e10.jpg',
            Price: "€10.47 -€17.45", 
            name:"lorem ipsum jacket",
             Image1:"./Images/c6.jpg",
            texts:"Buy now",
        }
    ]

    const filterProduct = (categoryitem) => {
        const updateditem = arr.filter((curElem) => {
            return curElem.categories === categoryitem;
        });
        setProduct(updateditem);
    }

    const filterrProduct = (categoryitem) => {
        const updateditem = arr.filter((curElem) => {
            return curElem.category === categoryitem;
        });
        setProduct(updateditem);
    }

    const [hovered, setHovered] = useState(arr);

    const mouseOverHandler = (index) => {
        const updatedHovered = [...hovered];
        updatedHovered[index] = false;
        setHovered(updatedHovered);
    };

    const mouseLeaveHandler = (index) => {
        const updatedHovered = [...hovered];
        updatedHovered[index] = true;
        setHovered(updatedHovered);
    };

    const [Product, setProduct] = useState(arr);
    const [searchQuery, setSearchQuery] = useState("");
    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredProduct = Product.filter((elem) => {
        return elem.name.toLowerCase().includes(searchQuery.toLowerCase());
    });


    return (
        <Container maxWidth={false} sx={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "150px" }}>
            <Grid container sx={{ width: "100%", marginBottom: 3 }} spacing={2}>
                {/* Search and Category Filters */}
                <Grid item xs={12} md={4}>
                    {/* Search */}
                    <Typography variant="h6">Search</Typography>
                    <TextField
                        variant="outlined"
                        label="Search here.."
                        size="small"
                        fullWidth
                        value={searchQuery}
                        onChange={handleSearchChange}
                        InputProps={{
                            endAdornment: (
                                <IconButton>
                                    <SearchIcon />
                                </IconButton>
                            ),
                        }}
                    />
                    {/* Category */}
                    <Typography variant="h6" sx={{ mt: 2 }}>Category</Typography>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox />} onClick={() => { filterProduct("All") }} label="All category" />
                        <FormControlLabel control={<Checkbox />} onClick={() => { filterrProduct("Best Seller") }} label="Men" />
                        <FormControlLabel control={<Checkbox />} onClick={() => { filterrProduct("Women") }} label="Women" />
                        <FormControlLabel control={<Checkbox />} onClick={() => { filterrProduct("Electronics") }} label="Electronics" />
                    </FormGroup>
                </Grid>
                {/* Product Grid */}
                <Grid item xs={12} md={8}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <TextField
                            variant="outlined"
                            type="search"
                            value={searchQuery}
                            label="Default"
                            size="small"
                            onChange={handleSearchChange}
                        />
                        <Typography>Showing {filteredProduct.length} of {Product.length} results</Typography>
                    </Box>
                    <Grid container spacing={2}>
                        {filteredProduct.map((elem) => {
                            const { id, Image, texts, Price, Image1 } = elem;
                            return (
                                <Grid item xs={12} md={4} key={id}>
                                    <Card
                                        sx={{
                                            position: "relative",
                                            "&:hover": {
                                                "& $overlay": {
                                                    opacity: 1,
                                                }
                                            }
                                        }}
                                        onClick={() => { navigate(`/Views/${id}`) }}
                                    >
                                        <CardMedia
                                            component="img"
                                            image={hovered[id] ? Image : Image1}
                                            alt="Product Image"
                                            sx={{ height: 250, objectFit: "cover" }}
                                            onMouseOver={() => mouseOverHandler(id)}
                                            onMouseLeave={() => mouseLeaveHandler(id)}
                                        />
                                        {hovered[id] === false &&
                                            <Box
                                                className="overlay"
                                                sx={{
                                                    display: "flex",
                                                    backgroundColor: "purple",
                                                    position: "absolute",
                                                    bottom: "10px",
                                                    width: '100%',
                                                    justifyContent: "space-between",
                                                    padding: '10px',
                                                    opacity: 0,
                                                    transition: "opacity 0.3s",
                                                    "&:hover": { backgroundColor: "black", color: "white" }
                                                }}
                                            >
                                                <RemoveRedEyeIcon />
                                                <Typography variant="h5">{hovered[id] === false ? texts : ""}</Typography>
                                                <FavoriteBorderIcon />
                                            </Box>
                                        }
                                    </Card>
                                    <Box sx={{display:"flex",justifyContent:"center",flexDirection:"column"}}>

                                    <Typography variant="h6" sx={{ mt: 2, textAlign: "center" }}>{elem.name}</Typography>
                                    <Rating name="read-only" value={4} readOnly sx={{ textAlign: "center" ,marginLeft:"70px"}} />
                                    <Typography sx={{ textAlign: "center", fontWeight: "bold" }}>{Price}</Typography>
                                    </Box>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Shop;
