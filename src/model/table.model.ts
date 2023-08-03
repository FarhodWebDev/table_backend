//

import mongoose, { Schema } from "mongoose";

export interface ITable {
 id: number;
 title: string;
 description: string;
}

const tableSchema = new Schema<ITable>({
 id: {
  type: Number,
  required: true,
 },
 title: {
  type: String,
  required: true,
 },
 description: {
  type: String,
  required: true,
 },
});

const tableModel = mongoose.model("tables", tableSchema);

export default tableModel;
