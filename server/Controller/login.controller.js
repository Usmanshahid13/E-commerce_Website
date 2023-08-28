const  User=require('../Model/userSchema')



const loginUser=    async(req, res)=> {
    const { email, password } = req.body;
    try {
        // let token;
        if (!email || !password) {
            return res.status(422).json({ error: "plz fill the field properly" });
        }

        const userExist = await User.findOne({ email: email, password: password });
        // if (userExist) {
        //     const isMatch = await bcrypt.compare(password, userExist.password);
        //     token = await userExist.generateAuthToken();
        //     res.cookie("jwToken",token,{
        //         expires:new Date(Date.now()+ 25892000000),
        //         httpOnly:true
        //     })
        //     if (!isMatch) {
        //         res.status(422).json({ error: "user error" })
        //     }
            if (userExist){
            res.status(201).json({ message: "signin succesfully" });
            }
        
         else {
            res.status(422).json({ error: "user error" });
        }



    } catch (error) {
        res.status(422).json({ error: "plz fill the field properly" });
    }

}



module.exports=loginUser;