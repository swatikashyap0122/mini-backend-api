import express from "express";
import {getAllRecord, createNewRecord, readRecordById, updateRecordById, deleteRecordById} from "../controllers/crudControllers.js";

const route = express.Router();


route.get('/', getAllRecord );
route.post('/create', createNewRecord);
route.get('/read/:id', readRecordById );
route.post('/update/:id', updateRecordById);
route.get('/delete/:id', deleteRecordById);

export default route;