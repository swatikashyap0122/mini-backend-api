import employModel from "../models/crudSchema.js";

const getAllRecord = async(req, res)=>{
    try {
        const data = await employModel.find({})
        res.send(data)
    } catch (error) {
        console.log(error.message)
    }
};


const createNewRecord = async(req, res)=>{
   try {
    const {name, age, city, salary} =req.body;
    const data = await employModel.create({
        name:name,
        age:age,
        city:city,
        salary:salary
    });
    if(data){
        await data.save();
        console.log("New Record Create")
    }
    res.send(data)
   } catch (error) {
        console.log(error.message)
   }
};

const readRecordById = async(req, res)=>{
    try {
        const result = await employModel.findById(req.params.id)
        res.send(result)
    } catch (error) {
        console.log(error.message)
    }    
};

const updateRecordById = async(req, res)=>{
    try {
        const result = await employModel.findByIdAndUpdate(req.params.id, req.body)
        res.send(result)
    } catch (error) {
        console.log(error.message)
    }
};

const deleteRecordById = async(req, res)=>{
    try {
        const result = await employModel.findByIdAndDelete(req.params.id,)
        res.send(result)
    } catch (error) {
        console.log(error.message)
    }
};

export {getAllRecord, createNewRecord, readRecordById, updateRecordById, deleteRecordById}