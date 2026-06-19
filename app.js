import express from "express";
import connectDB from "./DB/connectdb.js";
import route from "./routes/route.js"


const app = express ();
const port = 3000;
const DATABASE_URL = process.env.DATABASE_URL||"mongodb://localhost:27017"



connectDB(DATABASE_URL);
app.use(express.json())

app.use("/", route)


app.listen(port, ()=>{
    console.log(`Server is running at port : ${port}`);
})