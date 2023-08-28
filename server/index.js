const express=require('express')
const app=express();
const cors = require('cors');
const bcrypt = require('bcrypt')
const  User=require('./Model/userSchema')
const bodyParser = require('body-parser');
const mongoose=require("mongoose")
const jwt = require('jsonwebtoken');
const routes=require('./Router/auth')
//recent change if any issue change it

// const { configDotenv } = require('dotenv');
// configDotenv.config();

// require('dotenv').config({ path: "./config.env" });


mongoose.connect("mongodb://0.0.0.0:27017/Login_data")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
});

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json({extneded:true}));
app.use(cors());

app.use('/',routes)


// const middleware=(req,res,next)=>{
//     console.log("hello world about");
//     next();
// }

console.log('subscribe')
// const secretKey = 'your-secret-key';
// const SECRET_KEY = 'YOUR_SECRET_KEY';
// const token = jwt.sign(payload, SECRET_KEY);

// app.post('/login', async (req, res) => {
//   try {
//       let token;
//       const {email, password } = req.body;

//       if (!email || !password) {
//         return res.status(422).json({ error: "plz fill the field properly" })
//       }

//       if (email || password) {
//         console.log(email);
//         // console.log( User.findOne({ email: email }));
//         console.log(req.body)
//         return res.status(422).json({ error: "plz fill the field properly" })
//       }
    
      
//       const userExist = await User.findOne({ email: email });
      

//       if (userExist) {
//           const isMatch = await bcrypt.compare(password, userExist.password);
//           token = await userExist.generateAuthToken();
//           console.log(email)
//           res.cookie("jwToken",token,{
//               expires:new Date(Date.now()+ 25892000000),
//               httpOnly:true
//             })
//               if (!isMatch) {
//                   res.status(422).json({ error: "user error" })
//                 }
//                 else {
//                     res.json({ message: "signin succesfully" })
//                 }
                
//             } else {
//                 res.status(422).json({ error: "user error" })
//             }
            
            
            
//         } catch (error) {
//             res.status(422).json({ error: "plz fill the field properly" })
//         }

// });


// app.post('/signup', async (req, res) => {
//     const { name, email, password } = req.body;
  
//     try {
//       if (!name || !email || !password) {
//         return res.status(422).json({ error: "Please fill all fields properly" });
//       }
  
//       const userExist = await User.findOne({ email: email });
//       if (userExist) {
//         return res.status(422).json({ error: "Email already exists" });
//       }
  
//       const user = new User({ name, email, password });
//       await user.save();
//       res.status(201).json({ message: "User registered successfully" });
//     } catch (error) {
//       console.log(error);
//       res.status(500).json({ error: "Registration failed" });
//     }
//   });

app.listen(3000,()=>{
    console.log('sever is running')
})

















// app.get('/',(req,res)=>{
//     res.send("hello world");
    
// })
// app.get('/about',middleware,(req,res)=>{
//     res.send("hello world about");

    
// })