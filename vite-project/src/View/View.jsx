// import { Box, Button, CardMedia, Container, Grid, Typography } from "@mui/material";
// import {  useState } from "react";
// // import { useState } from "react";
// import { useParams } from "react-router-dom";


// // const [Product, setProduct] = useState(initialState);



// const View = () => {
//     const arr = [
//         {
//             id: '0',
//             category: "Seller",
//             Image: "/Images/c1.jpg",
//             Image1: "./Images/c2.jpg",
//             text: "Lorem ipsum jacket",
//             Price: "€10.47 -€17.45",
            
//         },
//         {
//             id:'1',
//             category: "Best Seller",
//             Image: "./Images/c1.jpg",
//             Image1: "./Images/c2.jpg",
//             text: "Lorem ipsum jacket",
//             Price: "€10.47 -€17.45",
            
//         },
        
//         {
//             id: "2",
//             category: "Best Seller",
//             Image: "./Images/c2.jpg",
//             Image1: "./Images/c1.jpg",
//             text: "Lorem ipsum fashion coat",
//             Price: "€15.5"
//         },
//         {
//             id: 3,
//             category: "Best Seller",
//             Image: "./Images/c3.jpg",
//             Image1: "./Images/c1.jpg",
//             text: "Lorem ipsum jacket",
//             Price: "€22.95- €25.5"
//         },
//         {
//             id: 4,
//             category: "Best Seller",
//             Image: "./Images/c4.jpg",
//             Image1: "./Images/c1.jpg",
//             text: "Lorem ipsum fashion female coat",
//             Price: "€10.47 -€122.45"
//         },
//         {
//             id: 5,
//             category: "Best Seller",
//             Image: "./Images/c5.jpg",
//             Image1: "./Images/c1.jpg",
//             text: "Lorem ipsum jacket",
//             Price: "€110.47 -€117.45"
//         },
//         {
//             id: 6,
//             category: "Best Seller",
//             Image: "./Images/c6.jpg",
//             Image1: "./Images/c1.jpg",
//             text: "Lorem ipsum kids four",
//             Price: "110.47 -€17.45"
//         },
//         {
//             id: 7,
//             category: "Best Seller",
//             Image: "./Images/c7.jpg",
//             Image1: "./Images/c1.jpg",
//             text: "Lorem ipsum kids five",
//             Price: "€10.47 -€17.45"
//         },
//         {
//             id: 8,
//             category: "Best Seller",
//             Image: "./Images/c8.jpg",
//             Image1: "./Images/c7.jpg",
//             text: "Lorem ipsum jacket",
//             Price: "€10.47 -€17.45"
//         },



//     ];
//     const [Product, setProduct] = useState(arr);

//     const filterProduct = (categoryitem) => {
//         const updateditem = arr.find((curElem) => {
//             return curElem.category === categoryitem;
//         });
//         setProduct(updateditem);
//     }
// // const {category}=useParams();
// const {id} = useParams();
// console.log({id})


 
// const [hovered, setHovered] = useState(arr);

// const mouseHandler = () => {
//     const updatedHovered = [...Product];
//     updatedHovered[id] =true ;
//     setHovered(updatedHovered);
//   };



// // function getLawyerById() {
// //     return arr.find( // <-- return result
// //       (lawyer) => String(lawyer.id) == params// <-- string to string comparison
// //     );
    
// //   }
// //   setProduct(getLawyerById);
// // setProduct(params)
// //     const updatedditem=arr.filter((e)=>{
        
// //             return e.id===params.id;
// // const filterProduct=()=>{
// //     const updateditem=arr.filter((curElem)=>{
// //       return curElem.id===params;
// //     });
// //     setProduct(updateditem); 
// //  }
//         // useEffect(() => {
//         //     const  updateditem=arr.find((curElem)=>{
//         //         return String(curElem.id)===params;
//         //     });
//         //     setProduct(updateditem);
//         // },{params});
// // //         })




// //         setProduct(updatedditem);

// // console.log(setProduct)



//     return (
//   <Container>
//     <Grid container>
  
// <Grid  item>
// <Box>

//         <CardMedia >
//         {/* {hovered{id}? <img src={hovered.}></img>} */}
//           <img src={hovered?.Image}></img>
          
//         </CardMedia>
//     </Box>
// <Box>
  
//     <Typography>
//     Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.
//     </Typography>

//     <Button size="large" >
//         Buy Now
//     </Button>

//     <Typography>
//         Category : 
//     </Typography>
//     <Typography>
//     Tags : fashionwomentopsleeveless
//     </Typography>
// </Box>

// </Grid>

  
//     </Grid>
//   </Container>
//   )
// }

// export default View
