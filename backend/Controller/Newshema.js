const mongoose = require("mongoose");

const newSchema = mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  regularPrice: {
    type: String,
    required: true,
  },
  discountPrice: {
    type: String,
    required: true,
  },
  bathrooms: {
    type: Number,
    required: true,
  },
  bedrooms: {
    type: Number,
    required: true,
  },
  furnished: {
    type: String,
    required: true,
  },
  parking: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  sell: {
    type: String,
  },
  offer: {
    type: String,
    required: true,
  },
  propertysize: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  image: {
    type: Array,
  },
  location: {
    type: String,
  },
  userId: {  
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', 
    required: true,
  }
});

const New = mongoose.model("New", newSchema);

module.exports = New;
