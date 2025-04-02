 import mongoose from "mongoose";

 //  timestamps help to keep track of time the data was created and.... 
// time it was updated(this is in sync with the time of the datacentre that is being used)
 const userSchema = mongoose.Schema({
   username:{
    type: String,
    required: [true, "Username is required"]
 },
 password:{
    type: String,
    required: [true, "email is required"]
 },
 email:{
    type: String,
    required: [true, "email is required"],
    unique: [true, "email already in use"]
 },
 phonenumber:{
    type: String
 },
 gender: {
    type: String,
    required: true,
    enum:["male", "female"]
 }
},{timestamps: true});

// to register the model with the dataBase
const userModel = mongoose.model("userModel", userSchema)

// to access the model anywhere within our server
export default userModel


// Model Relationships

//One to one
// one to many
// many to many

// what are the data entity to be used
// what is the relationship between this entity

// create a model, route, controller for every entity
