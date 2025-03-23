import UserModel from '../models/user.model.js'
import bcrypt from 'bcryptjs'

export async function registerUserController(request, response){
    try{
        const { name, email, password } = request.body
        if(!name || !email || !password){
            return response.status(400).json({
                message : "Provide Email, Name, Password",
                error : true,
                success : false
            })
        }
        const user = await UserModel.findOne({ email })
        if(user){
            return response.json({
                message : "Already register email",
                error : true,
                success : false
            })
        }
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt)

        const payload = {
            name,
            email,
            password : hashPassword
        }

        const newUser = new UserModel(payload)
        const save = await newUser.save()
        


    } catch(error){
        return response.status(500).json({
            message : error.message || error,
            error : true,
            success : false
        })
    }
}