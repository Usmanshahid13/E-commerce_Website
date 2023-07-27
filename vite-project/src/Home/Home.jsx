import { Box, Button, Container, Grid, Typography } from '@mui/material';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import m1 from "../assets/Images/Women.png";
import m2 from '../assets/Images/Wo.png';
import s1 from '../assets/Images/1.png';
import s2 from '../assets/Images/2.png';
import s3 from '../assets/Images/3.png';
import s4 from '../assets/Images/4.png';
// import m2 from '../assets/Image/m2.jpg'

const carousel = () => {
    const responsive = {  
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
 
 
 
 
 
    return (
  
<Container sx={{width:"100%"}} maxWidth={false} disableGutters>



   <Container sx={{marginTop:"80px",backgroundColor:"#f0e0ff",width:"100%",height:"100vh"}}  maxWidth={true} disableGutters>
 
  <Carousel
    swipeable={true}
    draggable={true}
    showDots={false}
    responsive={responsive}
    ssr={true} // means to render carousel on server-side.
    infinite={true}
    // autoPlay={this.props.deviceType !== "mobile" ? true : false}
    autoPlaySpeed={1000}
    keyBoardControl={true}
    customTransition="all .5"
    transitionDuration={500}
    containerClass="carousel-container"
    removeArrowOnDeviceType={["tablet", "mobile"]}
    // deviceType={this.props.deviceType}
    dotListClass="custom-dot-list-style"
    itemClass="carousel-item-padding-40-px"
  >
  <Container sx={{height:"100vh", display:"flex", justifyContent:"space-between",width:'100%' }} maxWidth={false} >
 <Box sx={{    display: 'flex',marginLeft:"10px",
    justifyContent: 'center',
    flexDirection: 'column',height:"100vh",width:"50%"}}>

    <Typography variant='h4'> Smart  Product</Typography>
    <Typography variant='h1' >Winter Offer</Typography>

  


    <Typography variant='h1' sx={{display:"flex",overflow:'-moz-hidden-unscrollable'}} > 2024 Collection</Typography>
    <Box>

    <Button variant='outlined' sx={{display:"flex",width:"200px",height:"50px"}}>Shop now</Button>
    </Box>
 </Box>

  
  <Box sx={{display:"flex", justifyContent:"center",width:"50%",height:"100vh"}}>
    <img src={m1} style={{marginTop:"20px",height:"100vh"}} ></img>

  </Box>
   </Container>




   <Container sx={{height:"100vh", display:"flex", justifyContent:"space-between",width:'100%' }} maxWidth={false}>
 <Box sx={{    display: 'flex',marginLeft:"10px",
    justifyContent: 'center',
    flexDirection: 'column',height:"100vh",width:"50%"}}>

    <Typography variant='h4'> Smart  Product</Typography>
    <Typography variant='h1' >Winter Offer</Typography>

  


    <Typography variant='h1' sx={{display:"flex",overflow:'-moz-hidden-unscrollable'}} > 2024 Collection</Typography>
    <Box>

    <Button variant='outlined' sx={{display:"flex",width:"200px",height:"50px"}}>Shop now</Button>
    </Box>
 </Box>

  
  <Box sx={{display:"flex", justifyContent:"center",width:"50%",height:"100vh"}}>
    <img src={m2} style={{marginTop:"20px",height:"100vh ",marginRight:"50px"}} ></img>

  </Box>
   </Container>
 
 
  
</Carousel>
   </Container>
  


<Container sx={{display:'flex',alignItems:"center",mt:6,marginLeft:"auto",marginRight:"auto",width:"100%"}} maxWidth={false}  >

<Grid container  spacing={3}>
<Grid item md={3} sm={6} xs={12} sx={{display:"flex"}}> 
<Box>
<img src={s1}></img>
</Box>
<Box ml={2}>
  <Typography variant='h6'>  
  Free Shipping
  </Typography>
  <Typography>
  Free shipping on all order
  </Typography>
</Box>

</Grid>


<Grid item md={3} sm={6} xs={12} sx={{display:"flex"}}>
<Box>
<img src={s2}></img>
</Box>
<Box ml={2}>
  <Typography variant='h6'>
  Order 24/7
  </Typography>
  <Typography>
  Free shipping on all order
  </Typography>
</Box>

</Grid>
<Grid item md={3} sm={6} xs={12} sx={{display:"flex"}}>
<Box >
<img src={s3}></img>
</Box>
<Box ml={2}>
  <Typography variant='h6'>
  Money Return
  </Typography>
  <Typography>
  Free shipping on all order
  </Typography>
</Box>

</Grid>
<Grid item md={3} sm={6} xs={12} sx={{display:"flex"}}>
<Box>
<img src={s4}></img>
</Box>
<Box ml={2}>
  <Typography variant='h6'>
  Order Discount
  </Typography>
  <Typography>
  Free shipping on all order
  </Typography>
</Box>

</Grid>
</Grid>
</Container>


</Container>
  
  )
}

export default carousel
