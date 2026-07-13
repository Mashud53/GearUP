import { Router} from "express";
import { userController } from "./user.controller";

import { auth } from "../../middleWare/auth";

const router = Router()



router.post("/register", userController.createUser);
router.post("/login", userController.loginUser);


router.get("/me",auth("USER"),userController.getMyProfile)




export const userRoute = router