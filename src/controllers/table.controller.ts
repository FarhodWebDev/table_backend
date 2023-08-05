//

import { Request, Response } from "express";
import tableModel from "../model/table.model";
import { stringify } from "querystring";

export const getTables = async (req: Request, res: Response) => {
 try {
  const tables = await tableModel.find(
   {},
   { _id: 0 },
   { sort: { id: 1 }, skip: 0, limit: 10 }
  );
  res.status(200).json({ tables, skip: 0, limit: 10 });
 } catch (e: any) {
  res.status(400).send({ message: e.message });
 }
};

export const getSortedTables = async (req: Request, res: Response) => {
 let sortNum = Number(req.query.sort) || 1;
 let sort: any;
 let skip = Number(req.query.skip) || 0;
 let limit = Number(req.query.limit) || 10;

 switch (req.query.sortby) {
  case "title":
   sort = { title: sortNum };
   break;
  case "id":
   sort = { id: sortNum };
   break;
  case "description":
   sort = { description: sortNum };
   break;
  default:
   sort = { id: sortNum };
 }

 try {
  const tables = await tableModel.find({}, { _id: 0 }, { sort, skip, limit });
  res.status(200).json({ tables, skip, limit });
 } catch (e: any) {
  res.status(400).send({ message: e.message });
 }
};

export const getSearchedTables = async (req: Request, res: Response) => {
 let sortNum = Number(req.query.sort) || 1;
 let sort: any;
 let skip = Number(req.query.skip) || 0;
 let limit = Number(req.query.limit) || 10;

 let searchBy: object;

 switch (req.query.sortby) {
  case "title":
   sort = { title: sortNum };
   break;
  case "id":
   sort = { id: sortNum };
   break;
  case "description":
   sort = { description: sortNum };
   break;
  default:
   sort = { id: sortNum };
 }

 switch (req.query.searchIn) {
  case "title":
   searchBy = { title: { $regex: req.query.q, $options: "i" } };
   break;
  case "description":
   searchBy = { description: { $regex: req.query.q, $options: "i" } };
   break;
  default:
   searchBy = { title: { $regex: req.query.q, $options: "i" } };
   break;
 }

 console.log(searchBy);

 try {
  const tables = await tableModel.find(
   { ...searchBy },
   { _id: 0 },
   { sort, skip, limit }
  );
  res.status(200).json({ tables, skip, limit });
 } catch (e: any) {
  res.status(400).send({ message: e.message });
 }
};

/*

{title: {$regex: "ac", $options: "i"}}

const filter = {};
const sort = {
  'title': 1
};
const skip = 0;
const limit = 10;
const client = await MongoClient.connect(
  'mongodb+srv://yusupovfarhod0902:P3II8lOFiMoi2Wfk@exam.ncbx1um.mongodb.net/',
  { useNewUrlParser: true, useUnifiedTopology: true }
);
const coll = client.db('test').collection('tables');
const cursor = coll.find(filter, { sort, skip, limit });
const result = await cursor.toArray();
await client.close();

*/
