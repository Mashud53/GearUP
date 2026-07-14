import cookieParser from "cookie-parser";
import express, { type Application, type Request, type Response } from "express"
import cors from "cors"
import config from "./config";
import { userRoute } from "./modules/users/user.route";
import { gearRouter } from "./modules/gears/gears.routes";

const app : Application = express()

app.use(cors({
    origin: config.app_url,
    credentials:true,
}))

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser())

app.get("/", (req: Request, res:Response)=>{
    res.send("Hellow GearUp")
})

app.use("/api/auth", userRoute)

app.use("/api",gearRouter)

export default app