const  User=require('../Model/userSchema')



const UpdateUser=async(req,res)=>{
   
    console.log(req.params.id);
    const userId=req.params.id; 
    const updatedUserData = req.body;
    // console.log(user)
    try{
        const updatedUser = await User.findByIdAndUpdate(userId, updatedUserData, { new: true });
   console.log(updatedUser)
    // res.status(201).json(user);
    if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.status(200).json(updatedUser);
    }catch (error) {
        res.status(500).json({ message: 'An error occurred while updating the user' });
        console.log(error);
      }
    }
    
    
    module.exports=UpdateUser;