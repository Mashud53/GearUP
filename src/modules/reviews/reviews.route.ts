import { Router } from "express";
import { auth } from "../../middleWare/auth";
import { reviesController } from "./reviews.controller";

const router = Router()
router.post("/:id", auth("USER"), reviesController.createReviews)




export const reviewRoute = router