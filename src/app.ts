//

import express from "express";
import tableRouter from "./routes/table.routes";

const app = express();

app.use(express.json());

app.use("/tables", tableRouter);

app.get("/", (req, res)=>{
 res.send("Hello World!")
})
// app.use("/tables/some/", tableRouter);

export default app;
