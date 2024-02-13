import ExpressConfig from "./config/express.config"
import {CartRoutes} from "./routes"

import dotenv from "dotenv";
import {Logger} from "./middlewares";
import bodyParser from "body-parser";

dotenv.config();

const app = ExpressConfig()
const PORT = process.env.PORT || 5001

/**
 * Middlewares
 */
app.use(Logger)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.listen(PORT, () => console.log("Server Running on Port: " + PORT))

app.use(CartRoutes)
