import ExpressConfig from "./config/express.config";
import { Cart } from "./routes";

import dotenv from "dotenv";

dotenv.config();

const app = ExpressConfig();
const PORT = process.env.PORT || 5004;

app.listen(PORT, () => console.log("Server Running on Port: " + PORT));

app.use(Cart);

app.get("/health", (req, res) => res.sendStatus(200));

app.get("/stocks", (_req, res) => {
    res.send("Stocks microservice ready !");
});
