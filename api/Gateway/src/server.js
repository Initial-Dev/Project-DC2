"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_config_1 = __importDefault(require("./config/express.config"));
const morgan_1 = __importDefault(require("morgan"));
const routes_1 = __importDefault(require("./routes/routes"));
const proxy_1 = __importDefault(require("./config/proxy"));
const app = (0, express_config_1.default)();
const PORT = process.env.PORT || 5000;
app.use((0, morgan_1.default)("combined"));
(0, proxy_1.default)(app, routes_1.default);
app.listen(PORT, () => console.log("Server Running on Port: " + PORT));
app.get('/', (_req, res) => {
    res.send('Gateway OK !');
});
