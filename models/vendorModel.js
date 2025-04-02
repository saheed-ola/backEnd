 import mongoose from "mongoose";

 //  timestamps help to keep track of time the data was created and.... 
// time it was updated(this is in sync with the time of the datacentre that is being used)
 const vendorSchema = mongoose.Schema({
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
    type: Number
 }

},{timestamps: true});
 //  timestamps help to keep track of time the data was created and.... 
// time it was updated(this is in sync with the time of the datacentre that is being used)

// to register the model with the dataBase
const vendorModel = mongoose.model("vendorModel", vendorSchema)

// to access the model anywhere within our server
export default vendorModel