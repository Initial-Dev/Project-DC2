import ExpressConfig from "./config/express.config";
import { CartRoutes } from "./routes";

import dotenv from "dotenv";
import { Logger } from "./middlewares";

dotenv.config();

const app = ExpressConfig();
const PORT = process.env.PORT || 5002;

/**
 * Middlewares
 */
app.use(Logger);

app.listen(PORT, () => console.log("Server Running on Port: " + PORT));

app.get("/health", (req, res) => res.sendStatus(200));

app.use(CartRoutes);
