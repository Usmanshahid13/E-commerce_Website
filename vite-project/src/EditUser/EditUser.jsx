import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {  useNavigate, useParams } from 'react-router-dom';
import  {  useState,useEffect } from "react"
import { EditUser,UpdateUser } from '../service/api';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const defaultTheme = createTheme();

export default function EditUsers() {
  const [user,setUser]=useState({
      name:"",email:"",password:""
    });
  const {id}=useParams();
  const navigate = useNavigate();
  useEffect(()=>{
    getAllUser();
},[]) 

const getAllUser=async()=>{
   try{
     const response=await EditUser(id);
     setUser(response.data)
    
     
    } catch (error) {
      console.log(error);
    }
  }



  let names, value;
  const handleInputs=(e)=>{
    names=e.target.name;
    value=e.target.value;
    console.log(e.target.name)
    setUser({...user,[names]:value}); 
  }

const UpdateUserDetail=async()=>{
  console.log("hi")
  try{
  const response=  await UpdateUser(id,user); 
    if (response.status === 200) {
      // alert("User updated succcesfully");
      navigate("/user"); 
    }   
  }
  
  catch(error){
    console.log(error);
  }
}
console.log(user)

// console.log(id)


  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: "80px",
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate  sx={{ mt: 3 }}>
            {/* {
        user.map((user)=> ( */}
    <Grid container spacing={2} key={user._id}>
      <Grid item xs={12} sm={6} >
        <TextField
          autoComplete="given-name"
          name="name"
          required
          fullWidth
          value={user.name}
          id="name"
          label="name"
          autoFocus
          onChange={(e)=>handleInputs(e)} 
        />
      </Grid>
    
      <Grid item xs={12}>
        <TextField
          required
          fullWidth
          id="email"
          value={user.email}
          label="Email Address"
          name="email"
          autoComplete="email"
          onChange={(e)=>{handleInputs(e)}}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          required
          fullWidth
          name="password"
          label="Password"
          // type="password"
          value={user.password}
          id="password"
          autoComplete="new-password"
          onChange={(e)=>handleInputs(e)}
        />
      </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
        {/* ))
        } */}
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={()=>{UpdateUserDetail()}}
            >
       Edit User
            </Button>
         
  
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}