// const mongoose = require('mongoose');

// const CustomerSchema =mongoose.Schema({
// name: {type: String,required: true},
// password:{type: String,required: true},
// email :{type: String,required: true,unique: true},
// phone:{type: String,required: true},
// });

// const Customer = mongoose.model('Customer',CustomerSchema);

// module.exports = Customer;


const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
    name: { type: String},
    phone: { type: String },
    email: { type: String, required: true, unique: true },
    image: { type: String, default: 'https://i.ibb.co/0XQDTZ1/user.png' },
    languages: { type: String },
    experience: { type: String },
    details: { type: String },
    role: { type: String, enum: ['admin', 'organizer', 'user'], default: 'user' },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
}, { versionKey: false });

const Customer = mongoose.model('Customer', CustomerSchema);

module.exports = Customer;