import { Container, Grid, Typography,Box } from "@mui/material"
import b1 from "../assets/Images/blog-1.jpg"

const Blog = () => {
  return (
    <Container sx={{mt:6}} maxWidth={false}>
        <Typography variant="h3" sx={{display:'flex',justifyContent:"center"}}> 
        OUR BLOG
        </Typography>
       
       
        <Grid container sx={{mt:6,display:"flex"}} spacing={4}>

          <Grid item sx={{position:"relative"}} md={4} sm={6} xs={12}>
          <img style={{width:"100%"}} src={b1}></img>
          <Box sx={{position:"absolute",top:"50px",left:"50px",display:"flex"}}>
            <Typography sx={{backgroundColor:"#a749ff",color:"white",width:"70px",display:"flex",justifyContent:"center"}}>
                lifestyle
            </Typography>
            <Typography sx={{backgroundColor:"#a749ff",ml:2,color:"white",width:"40px",display:"flex",justifyContent:"center"}} >
                men
            </Typography>
          </Box>
          <Box sx={{position:"absolute",bottom:"-60px",right:"60px",backgroundColor:"white",height:"150px",width:"350px"}}>
            <Typography variant="h5" sx={{fontWeight:"bold",display:"flex",justifyContent:"center",mt:6}} >
            A guide to latest trends
            </Typography>
            <Typography  sx={{display:"flex",justifyContent:"center",mt:1}}>
            By Admin
            </Typography>
          </Box>
          </Grid>

          <Grid item sx={{position:"relative"}} md={4} sm={6} xs={12}>
          <img style={{width:"100%"}} src={b1}></img>
          <Box sx={{position:"absolute",top:"50px",left:"50px",display:"flex"}}>
            <Typography sx={{backgroundColor:"#a749ff",color:"white",width:"70px",display:"flex",justifyContent:"center"}}>
                lifestyle
            </Typography>
            <Typography sx={{backgroundColor:"#a749ff",ml:2,color:"white",width:"40px",display:"flex",justifyContent:"center"}} >
                men
            </Typography>
          </Box>
          <Box sx={{position:"absolute",bottom:"-60px",right:"60px",backgroundColor:"white",height:"150px",width:"350px"}}>
            <Typography variant="h5" sx={{fontWeight:"bold",display:"flex",justifyContent:"center",mt:6}} >
            A guide to latest trends
            </Typography>
            <Typography  sx={{display:"flex",justifyContent:"center",mt:1}}>
            By Admin
            </Typography>
          </Box>
          </Grid>

          <Grid item sx={{position:"relative"}} md={4} sm={6} xs={12}>
          <img style={{width:"100%"}} src={b1}></img>
          <Box sx={{position:"absolute",top:"50px",left:"50px",display:"flex"}}>
            <Typography sx={{backgroundColor:"#a749ff",color:"white",width:"70px",display:"flex",justifyContent:"center"}}>
                lifestyle
            </Typography>
            <Typography sx={{backgroundColor:"#a749ff",ml:2,color:"white",width:"40px",display:"flex",justifyContent:"center"}} >
                men
            </Typography>
          </Box>
          <Box sx={{position:"absolute",bottom:"-60px",right:"60px",backgroundColor:"white",height:"150px",width:"350px"}}>
            <Typography variant="h5" sx={{fontWeight:"bold",display:"flex",justifyContent:"center",mt:6}} >
            A guide to latest trends
            </Typography>
            <Typography  sx={{display:"flex",justifyContent:"center",mt:1}}>
            By Admin
            </Typography>
          </Box>
          </Grid>


        </Grid>
    </Container>
  )
}

export default Blog
