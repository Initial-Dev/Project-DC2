"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_config_1 = __importDefault(require("./config/express.config"));
const routes_1 = require("./routes");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_config_1.default)();
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log("Server Running on Port: " + PORT));
app.use(routes_1.Cart);
app.get('/', (_req, res) => {
    res.send('Cart microservice ready !');
});
