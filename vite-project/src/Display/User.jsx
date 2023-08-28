import Table from '@mui/material//Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
// import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead'
// import Paper from '@mui/material';ss
import {getUsers,DeleteUser} from '../service/api';
import { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
// function createData(name, calories, fat, carbs, protein) {
//     return { name, calories, fat, carbs, protein };
//   }
//   const rows = [
//       createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//       createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//       createData('Eclair', 262, 16.0, 24, 6.0),
//       createData('Cupcake', 305, 3.7, 67, 4.3),
//       createData('Gingerbread', 356, 16.0, 49, 3.9),
//     ];

const User = () => {
  const [user, setuser] = useState([]);
 const navigate= useNavigate();
  
  useEffect(()=>{
        getAllUser();
    },[]) 
      const DeleteUserDetail=async(id)=>{
        await DeleteUser(id);
        getAllUser();
      }

    const getAllUser=async()=>{
       try{
         const response=  await getUsers();
         setuser(response.data)
         
        } catch (error) {
          console.log(error);
        }
      }
      console.log(user)
    return (
        
    <Table sx={{ minWidth: 650,marginTop:"200px" }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>id</TableCell>
          <TableCell >name</TableCell>
          <TableCell >email</TableCell>
          <TableCell>password</TableCell>
          <TableCell></TableCell>
       
        </TableRow>
      </TableHead>
      <TableBody>
      {
        user.map((user)=> (
          <TableRow key={user._id}>
            <TableCell sx={{color:"black"}}>{user._id}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.password}</TableCell>
        <TableCell >
          <Button variant='contained' sx={{marginRight:"10px"}} onClick={()=>{navigate(`/EditUser/${user._id}`)}} >Edit</Button>
          <Button variant='contained' onClick={()=>{DeleteUserDetail(user._id)}}>Delete</Button>
        </TableCell>
          </TableRow>
        ))
        }
      </TableBody>
    </Table>

  )
}

export default User
