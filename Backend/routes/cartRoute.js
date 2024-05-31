import express from "express"
import { addToCart, removeFromCart, getCart } from "../controllers/cartController.js"

const cartRouter = express.Router();

// API endpoint  
cartRouter.post("/add",addToCart)
cartRouter.post("/remove",removeFromCart)
cartRouter.post("/get",getCart)