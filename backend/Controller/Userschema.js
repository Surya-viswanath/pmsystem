const mongoose = require('mongoose');

const AgentSchema =mongoose.Schema({
name: {type: String,required: true},
password:{type: String,required: true},
email :{type: String,required: true,unique: true},
profile: {type:Array,required: true},
nationality:{type: String,required: true},
languages:{type: String,required: true},
experience:{type: String,required: true},
details:{type: String,required: true},
phone:{type: String,required: true},
});

const Agent = mongoose.model('Agent',AgentSchema);

module.exports = Agent;


