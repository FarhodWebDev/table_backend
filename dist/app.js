"use strict";
//
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const table_routes_1 = __importDefault(require("./routes/table.routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/tables", table_routes_1.default);
app.get("/", (req, res) => {
    res.send("Hello World!");
});
// app.use("/tables/some/", tableRouter);
exports.default = app;
