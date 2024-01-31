import { productRouter } from "./routes"
import dotenv from "dotenv";
import {Logger} from "./middlewares";
import ExpressConfig from "./config/express.config";
import express from "express";

dotenv.config();

const app = ExpressConfig();
const PORT = process.env.PORT || 5003;

app.use(Logger);
app.use(express.json());
app.use(productRouter);

app.listen(PORT, () => console.log("Server Running on Port: " + PORT));
