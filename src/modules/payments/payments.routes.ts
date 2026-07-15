import { Router } from "express";
import { paymentController } from "./payment.controller";
import { auth } from "../../middleWare/auth";

const router =Router()

router.post("/checkout",auth("ADMIN","PROVIDER","USER"), paymentController.createCheckoutSession)

router.post("/confirm", paymentController.handlePaymentConfirm)
router.get("/", auth("PROVIDER", "ADMIN","USER"), paymentController.getAllpayments)
router.get("/:id", auth("ADMIN", "PROVIDER"), paymentController.getPaymentDetails)


export const paymentRoutes = router