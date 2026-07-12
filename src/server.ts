import app from "./app";
import config from "./config";
import { prisma } from "./lib/prisma";

const PORT = config.port

async function main(){
    try {
        await prisma.$connect();
        console.log("database Connected successfully");
        app.listen(PORT, ()=>{            
            console.log(`Server is running port ${PORT}`);
        })
        
    } catch (error: any) {
        console.log(error);
        await prisma.$disconnect();
        process.exit(1)
        
    }
}

main();