import { Router } from "express";
import { rentalController } from "./rental.controller";
import { auth } from "../../middleWare/auth";

const router = Router()

router.get("/",auth("ADMIN","PROVIDER"), rentalController.allRentalOrders)
router.get("/:id", auth("USER", "ADMIN", "PROVIDER"), rentalController.getRentalDetails)
router.patch("/:id",auth("ADMIN","PROVIDER"), rentalController.updateRental)



export const rentalRoute = router;