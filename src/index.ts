//

import mongoose from "mongoose";
import app from "./app";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 8864;

const runServer = async () => {
 try {
  mongoose.connect(process.env.mongo_url as string);
  //
  app.listen(port, () => {
   console.log("Server is running...");
  });
 } catch (e) {
  console.log(e);
 }
};

runServer();
