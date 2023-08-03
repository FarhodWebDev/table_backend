//

import express from "express";
import tableRouter from "./routes/table.routes";

const app = express();

app.use(express.json());

app.use("/tables", tableRouter);
// app.use("/tables/some/", tableRouter);

export default app;
