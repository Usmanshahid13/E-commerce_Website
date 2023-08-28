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
import  {  useState } from "react"
import axios from "axios"
// import e from 'express';

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

export default function SignUp() {
  const [user,setUser]=useState({
    name:"",email:"",password:""
  });
  const navigate = useNavigate();
  // const [name, setName] = useState('');
  
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
 
  let name, value;
  const handleInputs=(e)=>{
    name=e.target.name;
    value=e.target.value;
    console.log(e.target.name)
    setUser({...user,[name]:value})   //name is a key value is assign by user to fill the object given in the usestate 
  }
  async function submit(e) {
    e.preventDefault();

    console.log(user.name)
    try {
      const response = await axios.post("http://localhost:3000/signup", {
        name: user.name,
        email: user.email,
        password: user.password,
       
      });
      if (response.status === 201) {
        alert("User registered successfully");
        navigate("/login"); // Navigate to login page
      } else if (response.data.error) {
        alert(response.data.error);
      } else {
        alert("Registration failed");
      }
    } catch (error) {
      console.log(error);
      alert("An error occurred");
    }
  }
  


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
          <Box component="form" noValidate onSubmit={submit} sx={{ mt: 3 }}>
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <TextField
          autoComplete="given-name"
          name="name"
          required
          fullWidth
          value={user.name}
          id="name"
          label="name"
          autoFocus
          onChange={handleInputs }
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
          onChange={handleInputs}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          value={user.password}
          id="password"
          autoComplete="new-password"
          onChange={handleInputs}
        />
      </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2" onClick={()=>{navigate('/login')}}>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}