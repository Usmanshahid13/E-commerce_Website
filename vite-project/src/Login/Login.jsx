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
import { useNavigate } from 'react-router-dom';
import { useState } from "react"
import axios from "axios"
// import { response } from 'express';

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

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function SignIn() {
    const navigate=useNavigate();
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   });
  // };
  // const [user,setUser]=useState({
  //    email:"",password:""
  // });
  // let name, value;
  // const handleInputs=(e)=>{
  //   name=e.target.name;
  //   value=e.target.value;
  //   console.log(e)
  //   setUser({...user,[name]:value})
  // }

  // const history=useNavigate();

  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
 
  
  async function submit(e){
    e.preventDefault();
    
    try {
      console.log(password);
      console.log(email);
      const response= await axios.post("http://localhost:3000/login",{
     
        email,
        password
        
        
        });
        console.log(email)
        if (response.status === 201) {
          alert('Login successful');
          navigate("/")
          // Perform any necessary actions upon successful login
        } else if (response.status === 422) {
          alert('Invalid credentials or missing fields');
        } else {
          alert('An error occurred');
        }
      } catch (error) {
        console.log(error);
        alert('An error occur');
      }
    }

  


  return (
    <ThemeProvider theme={defaultTheme}  >
      <Container component="main"  maxWidth="xs" >
        <CssBaseline />
        <Box
          sx={{
            marginTop: "120px",
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" method='POST' onSubmit={submit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={password}
              autoComplete="current-password"
              onChange={(e)=>setPassword(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2" onClick={()=>{navigate('/signup')}} >
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
</ThemeProvider>
  );
}