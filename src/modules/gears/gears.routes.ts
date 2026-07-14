import { Router } from "express";
import { gearController } from "./gears.controller";
import { auth } from "../../middleWare/auth";

const router = Router()

router.post("/gear",auth("ADMIN","PROVIDER"), gearController.createGear)
router.get("/gear", gearController.getAllGear)
router.get("/gear/:id", gearController.getGearDetails)
router.put("/:id",auth("ADMIN","PROVIDER"), gearController.updateGear)
router.delete("/gear/:id",auth("ADMIN", "PROVIDER"), gearController.removeGear)
router.get("/categories", gearController.getAllCategories)



export const gearRouter = router