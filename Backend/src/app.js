import express from  "express";
import cors from "cors";

import morgan from "morgan"

const app = express();

app.use(morgan("dev"))
app.use(cors({
    origin:"*",
    credentials:true
}))
app.use(express.json({limit:"10mb"})); // adjust the limit as needed
app.use(express.urlencoded({
    limit:"10mb",
    extended:true
}));
app.use(express.static("public"));



// import routes





// routes declaration 



export default app