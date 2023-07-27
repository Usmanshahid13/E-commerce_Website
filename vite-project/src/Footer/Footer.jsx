// import React from 'react'

import { Box, Container, Grid, Input, Typography } from "@mui/material"

const Footer = () => {
    return (
        <Container sx={{backgroundColor:"#f6f6f8",marginTop:"150px",height:"100%",width:"100%"}} maxWidth={false} disableGutters>
            <Grid container sx={{display:"flex",justifyContent:"center",alignItems:"center",height:"50vh",width:"100%"}} spacing={3}  >
                <Grid item md={2} sm={4} xs={12}>
                    <Typography variant="h6">
                        FLone.
                    </Typography>
                    <Typography  mt={2}>
                        © 2023 Flone.
                    </Typography>
                    <Typography  mt={2}>
                        All Rights Reserved
                    </Typography>
                </Grid>

                <Grid item md={2} sm={4} xs={12}>
                    <Typography variant="h6">
                        ABOUT US
                    </Typography>
                    <Typography  mt={2}>
                        About us
                    </Typography>
                    <Typography  mt={2}>
                        Store location
                    </Typography>
                    <Typography  mt={2}>
                        Contact
                    </Typography>
                    <Typography  mt={2}>
                        Orders tracking
                    </Typography>
                </Grid>


                <Grid item md={2} sm={4} xs={12}>
                    <Typography variant="h6">
                    USEFUL LINKS
                    </Typography>
                    <Typography  mt={2}>
                    Returns
                    </Typography>
                    <Typography  mt={2}>
                    Support Policy
                    </Typography>
                    <Typography  mt={2}>
                    Size guide
                    </Typography>
                    <Typography  mt={2}>
                    FAQs
                    </Typography>
                </Grid>

                <Grid item md={2} sm={4} xs={12}>
                    <Typography variant="h6">
                    FOLLOW US
                    </Typography>
                    <Typography  mt={2}>
                    Facebook
                    </Typography>
                    <Typography  mt={2}>
                    Twitter
                    </Typography>
                    <Typography  mt={2}>
                    Instagram
                    </Typography>
                    <Typography mt={2}>
                    Youtube
                    </Typography>
                </Grid>

                <Grid item md={2} sm={4} xs={12}>
                    <Typography variant="h6" >
                    SUBSCRIBE
                    </Typography>
                    <Typography mt={1}>
                    Get E-mail updates about our latest shop and special offers.
                    </Typography>
                  <Box mt={1}>

                   <Input  type="email" placeholder="Enter your email"></Input>
                  </Box>
                    <Typography mt={3}>
                    SUBSCRIBE
                    </Typography>
                </Grid>

            </Grid>
        </Container>
    )
}

export default Footer
