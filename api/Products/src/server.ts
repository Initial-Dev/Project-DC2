import { PrismaClient } from "@prisma/client";
import ExpressConfig from "./config/express.config";
import { product } from "./routes";
import dotenv from "dotenv";
import cors from 'cors';


const app = ExpressConfig();
const prisma = new PrismaClient();

dotenv.config();

app.use(cors());
app.use(product);

const PORT = process.env.PORT || 5003;

app.listen(PORT, () => console.log("Server Running on Port: " + PORT));

app.get('/', (_req, res) => {
    res.send('Products microservice ready !')
})

