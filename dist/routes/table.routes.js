"use strict";
//
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const table_controller_1 = require("../controllers/table.controller");
const tableRouter = express_1.default.Router();
tableRouter.get("/", table_controller_1.getTables);
tableRouter.get("/some", table_controller_1.getSortedTables);
tableRouter.get("/search", table_controller_1.getSearchedTables);
exports.default = tableRouter;
