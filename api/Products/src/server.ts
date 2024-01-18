import ExpressConfig from "./config/express.config"
import { product } from "./routes"

import dotenv from "dotenv";

dotenv.config();

const app = ExpressConfig()
const PORT = process.env.PORT || 5001

app.listen(PORT, () => console.log("Server Running on Port: " + PORT))

app.use(product)

app.get('/', (_req, res) => {
    res.send('Products microservice ready !')
})