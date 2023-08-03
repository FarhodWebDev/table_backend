//

import express from "express";
import {
 getSearchedTables,
 getSortedTables,
 getTables,
} from "../controllers/table.controller";

const tableRouter = express.Router();

tableRouter.get("/", getTables);
tableRouter.get("/some", getSortedTables);
tableRouter.get("/search", getSearchedTables);

export default tableRouter;
