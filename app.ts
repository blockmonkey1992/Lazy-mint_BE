import express from "express";
import path from "path";
import dotenv from "dotenv";
dotenv.config();
require("dotenv").config({ path : path.join(__dirname, ".env")});
import cors from "cors";
import bodyParser from "body-parser";
import "./db";

const app = express();
const PORT = 5000;

app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json());
app.use(cors(
    { origin : ["http://localhost:3000", "https://lazy-mint-fe.vercel.app/"], credentials : true },    
))

app.use("/api/market", require("./router/market"));

app.listen(PORT, ()=> {
    console.log(`✅ Server Running at PORT : ${PORT}`);
})