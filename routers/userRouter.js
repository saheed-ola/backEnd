import {Router} from 'express'
import { createUser, getSingleUser, getUser } from '../controllers/userControllers.js'
// import{}

const router = Router()

router.get('/users', getUser)
router.get('/users/:id', getSingleUser)
router.post("/users",createUser)

export default router