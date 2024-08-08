

const mongoose = require("mongoose");

const AgentSchema = mongoose.Schema(
    {
        "userId": {
            type: String,
            required: true
        },
        "name": {
            type: String,
            required: true
        },
        "email": {
            type: String,
            required: true
        },
        "image": {
            type: String,
            required: true
        },
        
        "experience": {
            type: String,
            required: true
        },
        "details": {
            type: String,
            required: true
        },
        "status": {
            type: String,
            require: true
        },
    },
    { versionKey: false }
)


const Agentrqst = mongoose.model("Agentrqst", AgentSchema);

module.exports = Agentrqst;

