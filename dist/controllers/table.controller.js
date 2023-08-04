"use strict";
//
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSearchedTables = exports.getSortedTables = exports.getTables = void 0;
const table_model_1 = __importDefault(require("../model/table.model"));
const getTables = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tables = yield table_model_1.default.find({});
        res.status(200).json(tables);
    }
    catch (e) {
        res.status(400).send({ message: e.message });
    }
});
exports.getTables = getTables;
const getSortedTables = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let sortNum = Number(req.query.sort) || 1;
    let sort;
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
        const tables = yield table_model_1.default.find({}, { _id: 0 }, { sort, skip, limit });
        res.status(200).json({ tables, skip, limit });
    }
    catch (e) {
        res.status(400).send({ message: e.message });
    }
});
exports.getSortedTables = getSortedTables;
const getSearchedTables = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let sortNum = Number(req.query.sort) || 1;
    let sort;
    let skip = Number(req.query.skip) || 0;
    let limit = Number(req.query.limit) || 10;
    let searchBy;
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
        const tables = yield table_model_1.default.find(Object.assign({}, searchBy), { _id: 0 }, { sort, skip, limit });
        res.status(200).json({ tables, skip, limit });
    }
    catch (e) {
        res.status(400).send({ message: e.message });
    }
});
exports.getSearchedTables = getSearchedTables;
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
