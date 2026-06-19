import mongoose from "mongoose";

const employSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true,
    },

    age:{
        type: Number,
        required: true,
    },

    city:{
        type: String,
        required: true,
    },

    salary:{
        type: mongoose.Decimal128,
        required: true,
        validate: (value)=> value >= 1000.5
    }
});

const employModel = mongoose.model('employ', employSchema);

export default employModel;