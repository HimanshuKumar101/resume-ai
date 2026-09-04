const userModel = require("../models/user.model")


/**
 * @name registerUserController
 * @description Register a new user, expects username, email and password
 * @access Public
 * 
 */

async function registerUserController(req, res){

    const { username, email, password } = req.body

    if(!username || !email || !password){

        return res.status(400).json({ 
            message: "Please provide username, email and password"
        })
    }
    
    const isUserAlreadyExists = await UserModel.findOne({

        $or: [ {username}, {email}]
    })

    if(isUserAlreadyExists){

        /* isUserAlreadyExists.username == username */
        return res.status(400).json({
            message: "User already exists"
        })
    }



}

module.exports = {
    registerUserController
}