const  User=require('../Model/userSchema')
const  DeleteUser=async(req,res)=>{
    console.log(req.params.id);
    try{
     await User.deleteOne({_id:req.params.id});
    res.status(200).json({message:"user deleted successfully"});
    }catch(error){
        res.status(404).json({message:error.message});
        console.log(error);
    }
    }
    
    module.exports=DeleteUser;