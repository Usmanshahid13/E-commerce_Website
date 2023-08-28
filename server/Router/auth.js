const express = require('express');
const router = express.Router();
// const User = require('../Model/userSchema')
// const bcrypt = require('bcrypt')
const addUser=require('../Controller/user.controller')
const loginUser=require('../Controller/login.controller')
const getUser=require('../Controller/alluser')
const EditUsers=require('../Controller/EditDetail');
const DeleteUser  = require('../Controller/DeleteUser');
const UpdateUser = require('../Controller/UpdateUser');

// const { EditUser } = require('../../vite-project/src/service/api');
// router.get('/', (req, res) => {
//     res.send('helo')
// });


router.post('/login',loginUser);
router.post('/signup', addUser);
router.get('/all', getUser);
router.get('/:id', EditUsers);
router.delete('/:id',DeleteUser);
router.put('/:id',UpdateUser);
// router.delete('/all', DeleteUser);







module.exports=router;