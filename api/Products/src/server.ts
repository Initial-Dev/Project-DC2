import { productRouter } from "./routes"
import dotenv from "dotenv";
import {Logger} from "./middlewares";
import ExpressConfig from "./config/express.config";
import express from "express";
import path from "path";

dotenv.config();

const cors = require('cors');
const app = ExpressConfig();
const PORT = process.env.PORT || 5003;

app.use(cors());
app.use(Logger);
app.use(express.json());
app.use(productRouter);
app.use('/images', express.static(path.join(__dirname, 'images')));

app.listen(PORT, () => console.log("Server Running on Port: " + PORT));
