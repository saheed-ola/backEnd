import mongoose from "mongoose";

import dotenv from 'dotenv'
// import the express library

// const express = require(`express`);
import express from 'express'
// import userModel from "./models/userModel.js";
import userRouter from "./routers/userRouter.js";
import vendorRouter from "./routers/vendorRouter.js"



dotenv.config()

// 
const app = express();
// middleware for 
app.use(express.json())
app.use(userRouter)
app.use(vendorRouter)

// app.get("/", (req, res) => {
//     res.send('hello, futureTech')
// });

// // using get in  expressJs
// let books = [
//     { id: 1, title: 'The Hobbit', author: 'J.R.R. Tolkien' },
//     { id: 2, title: 'Harry Potter', author: 'J.K. Rowling' },
//     { id: 3, title: 'Romeo and juliet', author: 'Y.D Ahmed' },
//     { id: 4, title: 'Sugar girl', author: 'w.b Danladi' }
//   ];

// //   to get all books 
// app.get("/books", (req, res) => {
//     res.json(books).sendStatus(200);
// });

// // Sending to database
// app.post("/books", (req, res) => {
//     const newBook = {
//         id: books.length + 1,
//         title: req.body.title,
//         author: req.body.author
//     };
//     books.push(newBook);
//     res.sendStatus(200).json(newBook);
// });

// // PUT: Update a book by ID
// app.put('/books/:id', (req, res) => {
//     const bookId = parseInt(req.params.id);
//     const book = books.find(b => b.id === bookId);
  
//     if (book) {
//       book.title = req.body.title;
//       book.author = req.body.author;
//       res.json(book);
//     } else {
//       res.status(404).send('Book not found');
//     }
//   });

//   // DELETE: Remove a book by ID
// app.delete('/books/:id', (req, res) => {
//     const bookId = parseInt(req.params.id);
//     books = books.filter(b => b.id !== bookId);
//     res.send('Book deleted');
//   });



// status code 
// 100-199 info response
// 200-299 success response
// 300-399 redirection
// 400-499 error from frontend
// 500-599 server error

  // HTTP REQUEST FOR END POINT
  // get/read all method 
  // app.get("/users", async(req, res)=>{

  //   try{
  //     const users = await userModel.find()
  //     if(users.length === 0){
  //     return  res.status(404).json({message: "No users found"})
  //     }
  //   return res.status(200).json({users: users, message: "users fetched successfully" })

  //   }catch(error){
  //     return res.status(500).json({'error fetching users': error.message})
  //   }
  // })
  
  // create/post operation "C"
  // app.post("/user", async(req, res) => {
  //    try{
  //         const {body} = req
  //         const user =new userModel(body)
  //         await user.save()
  //         return res.status(201).json({message: "user created successfully", user: user})
  //       } catch(error){
  //         return res.status(500).json({ error: error.message})
  //       }
  // })

  // READ SINGLE OPERATION "R"
  // app.get('/users/:id', async(req, res)=> {
  //   try{

  //     const {id} = req.params
  //     const user = await userModel.findById(id)
  //     if(!user){
  //       return res.status(404).json({message: "user not found"})
  //     }
  //     return res.status(200).json({message: "user found successfully", user: user} )
  //   }catch(error){
  //     return res.res.status(500).json({error: error.message})
  //   }
  // })

  // DELETE OPERATION "D"
  // app.delete('/users/:id', async(req, res)=>{
  //   try{
  //     const id = req.params.id
  //     const user = await userModel.findByIdAndDelete(id)
  //     if(!user){
  //     }
  //     return res.status(200).json({message: "user deleted successfully"} )

  //   }catch(error){
  //     return res.res.status(500).json({error: error.message})
  //   }
  // })

  // PUT/UPDATE OPERATION "U"
  // app.put('/users/:id', async(req, res ) => {
  //   try{
  //     // to destructure the id from the params and params from the request
  //     const id =req.params.id
  //     const updatedUser =req.body
  //     const user = await userModel.findByIdAndUpdate(id, updatedUser, {new: true})
  //     if(!user){
  //         return res.status(404).json({message: "user not found"})
  //     }
  //     return res.status(200).json({message: "user updated successfully", user: user} )
      
  //   }catch(error){
  //     return res.res.status(500).json({error: error.message})
  //   }
  // })

const PORT = process.env.PORT || 5000;

// Using async and await
const connectDB = async () => {
  try{
    await mongoose.connect(process.env.MONGO_URI);
    console.log('connected successfully to the dataBase');
    app.listen(PORT, () => {
      console.log(`server listening on port ${PORT}`)
    })
  }catch(error){
    console.error(`Database connection error: ${error.message}`)
    process.exit(1);
  }
}
connectDB()

// app.listen(PORT, () =>{
//     console.log(`server is running: ${PORT}`);
// });

// using .then and .catch
// const PORT = process.env.PORT || 5000;
// mongoose.connect(process.env.MONGO_URI)
//   .then(()=>{
//     console.log('connected successfully to the Database')
//     app.listen(PORT, () => {
//       console.log(`Server running on http://localhost:${PORT}`);
//     });
//   })
//   .catch((error)=>{
//     console.log(error.message, 'couldnt connect to database')
//   })
 




  // Start the server
// npm run dev

// assignment
// create get all, get single op and create operation