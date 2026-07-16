import cookieParser from "cookie-parser";
import express, { type Application, type NextFunction, type Request, type Response } from "express"
import cors from "cors"
import config from "./config";
import { userRoute } from "./modules/users/user.route";
import { gearRouter } from "./modules/gears/gears.routes";
import { paymentRoutes } from "./modules/payments/payments.routes";
import { rentalRoute } from "./modules/rental/rental.route";

import { reviewRoute } from "./modules/reviews/reviews.route";
import { notFound } from "./middleWare/notFound";

const app: Application = express()

app.use(cors({
    origin: config.app_url,
    credentials: true,
}))


app.use("/api/payment/confirm",  express.raw({ type: 'application/json' }))


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

app.get("/", (req: Request, res: Response) => {
    res.send("Hellow GearUp")
})

app.use("/api/auth", userRoute)
app.use("/api", gearRouter)
app.use("/api/payment", paymentRoutes)
app.use("/api/rentals", rentalRoute)
app.use("/api/gearReturn", reviewRoute)

app.use(notFound)
app.use((err:any, req: Request, res: Response, next: NextFunction)=>{

})

export default app