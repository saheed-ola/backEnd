import userModel from "../models/userModel.js"

// READ ALL OPERATION
 export const getSingleUser = async(req, res)=>{

    try{
      const users = await userModel.find()
      if(users.length === 0){
      return  res.status(404).json({message: "No users found"})
      }
    return res.status(200).json({users: users, message: "users fetched successfully" })

    }catch(error){
      return res.status(500).json({'error fetching users': error.message})
    }
  }// READ SINGLE OPERATION
export const getUser =  async(req, res)=> {
    try{

      const {id} = req.params
      const user = await userModel.findById(id)
      if(!user){
        return res.status(404).json({message: "user not found"})
      }
      return res.status(200).json({message: "user found successfully", user: user} )
    }catch(error){
      return res.status(500).json({error: error.message})
    }
  }

  //create operation
  export const createUser = async(req,res)=>{
    try{
      const {body} = req
      const user =new userModel(body)
      await user.save()
      return res.status(201).json({message: "user created successfully", user: user})
    } catch(error){
      return res.status(500).json({ error: error.message})
    }
  }

