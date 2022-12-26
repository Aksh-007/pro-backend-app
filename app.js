import dotenv from "dotenv"
import express  from "express";
const app = express();
dotenv.config();

app.get ("/", (req, res)=>{
    res.send("<h1>Hello from App.js</h1>")
});

export default app;