const bcrypt = require("bcrypt");
let userSchema = require('../models/userSchema')

let createUser = async(req, res)=> {
  
  
  
    const userData = new userSchema(req.body);
    try{
        const isUserExists = await userSchema.findOne({
        userEmail:req.body.userEmail,
        });
        if (isUserExists){
        res.status(409).json({
            success: false,
            message: "User is already registered With this email",
        });
     }else{
            const salt = await bcrypt.genSalt(10);
            userData.userPassword = await bcrypt.hash(req.body.userPassword,salt);
            const user = await userData.save();
            res.status(201).json({
                success: false,
                message:"user registered successfully",
                createUser:user,
        });
        }
    }catch (error){
            res.status(500).json({
                success: false,
                message : `Error occur ${error.message}`,
            });
        }
    }

    const userLogIn = async(req,res)=>{
        console.log('data :', req.body)
        try{
            const userData = await userSchema.findOne({
                userEmail: req.body.userEmail,
            });
            if (userData){
                const hashpassword = await bcrypt.compare(
                    req.body.userPassword,
                    userData.userPassword
                );
                if(userData && hashpassword){
                    res.status(200).json({
                        success: true,
                        messaage: "user logged in successfully",
                    });
                }else{
                    res.status(401).json({
                        success:false,
                        message:"Invalid email or password",
                    });
                }
            }else{
                res.status(403).json({
                    success: false,
                    message: "user is not recognized with this email",
                });
            }
        }catch (error) {
            res.status(500).json({
                success:false,
                messaage: `Error occur ${error.messaage}`,
            });
        }
    };



    module.exports = {
        createUser,userLogIn
    };

     
  
  