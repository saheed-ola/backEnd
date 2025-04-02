import { Router } from "express";
import { createVendor, getSingleVendor, getVendor } from "../controllers/vendorControllers.js";

const router = Router()
router.post('/vendor', createVendor)
router.get('/vendor', getVendor)
router.get('/vendor/:id', getSingleVendor)

export default router

// [
//     {
//     "username": "Akpabio",
//      "password":"absolutecode452",
//      "email": "motun412@gmail.com",
//      "phonenumber": "0815986427"
//     },
    
//     {
//     "username": "Fayemi",
//      "password":"Ekiticode452",
//      "email": "Kayode412@gmail.com",
//      "phonenumber": "0810076027"
//     }
    
//     ]