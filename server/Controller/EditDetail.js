const  User=require('../Model/userSchema')
const   EditUsers=async(req,res)=>{
    // console.log(req.params.id);
    try{
    const user= await User.find({_id:req.params.id});
    res.status(200).json(user)
    }catch(error){
        res.status(404).json({message:error.message});
        console.log(error);
    }
    }
    
    module.exports=EditUsers;