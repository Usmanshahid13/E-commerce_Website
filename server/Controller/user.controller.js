const  User=require('../Model/userSchema')
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const mongoose=require("mongoose")
// const jwt = require('jsonwebtoken');


//            const loginUser=    async(req, res)=> {
//     const { email, password } = req.body;
//     try {
//         // let token;
//         if (!email || !password) {
//             return res.status(422).json({ error: "plz fill the field properly" });
//         }

//         const userExist = await User.findOne({ email: email, password: password });
//         if (userExist) {
//             // const isMatch = await bcrypt.compare(password, userExist.password);
//             // token = await userExist.generateAuthToken();
//             // res.cookie("jwToken",token,{
//             //     expires:new Date(Date.now()+ 25892000000),
//             //     httpOnly:true
//             // })
//             // if (!isMatch) {
//             //     res.status(422).json({ error: "user error" })
//             // }
//             // else {
//             res.status(201).json({ message: "signin succesfully" });
//             // }
//         } else {
//             res.status(422).json({ error: "user error" });
//         }



//     } catch (error) {
//         res.status(422).json({ error: "plz fill the field properly" });
//     }

// }



const addUser=async (req, res) => {
    const { name, email, password } = req.body;
      
        try {
          if (!name || !email || !password) {
            return res.status(422).json({ error: "Please fill all fields properly" });
          }
      
          const userExist = await User.findOne({ email: email });
          if (userExist) {
            return res.status(422).json({ error: "Email already exists" });
          }
      
          const user = new User({ name, email, password });
          await user.save();
          res.status(201).json({ message: "User registered successfully" });
        } catch (error) {
          console.log(error);
          res.status(500).json({ error: "Registration failed" });
        }
    }




module.exports=addUser;