"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Router = void 0;
const express_1 = __importDefault(require("express"));
exports.Router = express_1.default.Router();
exports.Router.get("/cart", (req, res) => {
    res.send(`Get Cart !`);
});
exports.Router.post("/cart/:idItem", (req, res) => {
    res.send(`You added item ${req.params.idItem} to your cart !`);
});
exports.Router.delete("/cart/:idItem", (req, res) => {
    res.send(`You removed item ${req.params.idItem} from your cart !`);
});
