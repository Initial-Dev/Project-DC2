import { productRouter } from "./routes"
import dotenv from "dotenv";
import {Logger} from "./middlewares";
import ExpressConfig from "./config/express.config";
import express from "express";
import path from "path";
import bodyParser from "body-parser";

dotenv.config();

const cors = require('cors');
const app = ExpressConfig();
const PORT = process.env.PORT || 5003;

// support parsing of application/json type post data
app.use(bodyParser.json());
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));


app.use(cors());
app.use(Logger);
app.use(express.json());
app.use(productRouter);


app.use('/images', express.static(path.join(__dirname, 'images')));

app.listen(PORT, () => console.log("Server Running on Port: " + PORT));
