import { Router } from "express";
import { gearController } from "./gears.controller";
import { auth } from "../../middleWare/auth";

const router = Router()

router.post("/",auth("ADMIN","PROVIDER"), gearController.createGear)

router.get("/", gearController.getAllGear)
router.put("/:id",auth("ADMIN","PROVIDER"), gearController.updateGear)
router.delete("/:id",auth("ADMIN", "PROVIDER"), gearController.removeGear)



export const gearRouter = router