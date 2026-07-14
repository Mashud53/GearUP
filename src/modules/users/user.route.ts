import { Router} from "express";
import { userController } from "./user.controller";

import { auth } from "../../middleWare/auth";

const router = Router()



router.post("/register", userController.createUser);
router.post("/login", userController.loginUser);

router.get("/me",auth("USER","ADMIN","PROVIDER"),userController.getMyProfile)
router.get("/users", auth("ADMIN"), userController.getAllusers)
router.put("/user/:id", userController.updateUserStatus)




export const userRoute = router