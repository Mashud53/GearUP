import app from "./app";

const PORT = process.env.PORT || 3000

async function main(){
    try {
        app.listen(PORT, ()=>{
            console.log(`Server is running port ${PORT}`);
        })
        
    } catch (error: any) {
        console.log(error);
        process.exit(1)
        
    }
}

main();