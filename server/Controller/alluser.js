const  User=require('../Model/userSchema')
const getUser=async(req,res)=>{
    try{
    const user= await User.find({});
    res.status(200).json(user)
    }catch(error){
        res.status(404).json({message:error.message});
        console.log(error);
    }
    }
    
    module.exports=getUser;