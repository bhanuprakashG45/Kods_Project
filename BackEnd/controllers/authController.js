const express = require('express')
const UserModel = require('../models/Users');
// const { createJWT } = require('../utils/tokenUtils');



 const login = async(req,res)=>{
    const {email,password} = req.body;
    UserModel.findOne({email:email})
    .then(user =>{
        if(user){
            if(user.password === password){
                if(user.role === true){
                    res.json('Successful Admin LogIn');
                }else{
                    res.json('Successful student LogIn'); 
                }  
            }else{
                res.json("Password Incorrect..");
            }
        }else{
            res.json("Invalid UserName..");
        }
    })
    
    // const token = createJWT({userId : usersModel._id})

    // const oneDay = 1000 * 60*60*24;
    // res.cookie('token',token,{
    //     httpOnly:true,
    //     expires:new Date(Date.now()+oneDay),
    //     secure:process.env.NODE_ENV === 'production',
    // })
    // res.status(StatusCodes.OK).json({msg:'user logged in'});
}

const register = async (req, res) => {
    try {
        const {name, email, password } = req.body;
        const userExist = await UserModel.findOne({email:email})
        if (userExist) {
            res.json({ msg: "already exist" })
        }
        const userCreated = await UserModel.create({name, email, password })
        res.json( 'Successfully Register')
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}
   

module.exports = {login,register};
