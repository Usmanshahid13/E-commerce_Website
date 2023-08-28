import axios from "axios"


const URL="http://localhost:3000";

export const getUsers=async()=>{
    try{
            return await axios.get(`${URL}/all`);
    }
    catch(error){
        console.log(error);
    }
}

export const EditUser=async(id)=>{
    try{
        return await axios.get(`${URL}/${id}`);
    }
    catch(error){
        console.log(error);
    }
}


export const DeleteUser=async(id)=>{
    try{
        return await axios.delete(`${URL}/${id}`);
    }catch(error){
          console.log(error)
    }
}

export const UpdateUser=async(id,users)=>{
    try{
       return await axios.put(`${URL}/${id}`,users)
    }catch(error){
         console.log(error)
    }
}