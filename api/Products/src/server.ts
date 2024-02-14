import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import express from 'express';
import multer from 'multer';
import ExpressConfig from './config/express.config';
import { uploadImageController } from './controllers';
import { Logger } from './middlewares';
import { productRouter } from './routes';

dotenv.config();

const app = ExpressConfig();
const PORT = process.env.PORT || 5003;

// support parsing of application/json type post data
app.use(bodyParser.json());
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(Logger);
app.use(express.json());
app.use(productRouter);

app.listen(PORT, () => console.log('Server Running on Port: ' + PORT));
