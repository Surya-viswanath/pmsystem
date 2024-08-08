
const mongoose = require('mongoose');


const WishlistSchema = new mongoose.Schema({
  user: {
    type: Object,
  },
  properties: {
    type: Array,
   
  },
},);

const proWishlist = mongoose.model("proWishlist", WishlistSchema);

module.exports = proWishlist;



// const mongoose = require('mongoose');

// const wishlistSchema = new mongoose.Schema({
//   userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
//   propertyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Property', required: true },
//   propertyDetails: {
//     title: String,
//     description: String,
//     image: [String],
//     address: String,
//     regularPrice: String,
  
//   },
//   userDetails: {
//     name: String,
//     email: String,
   
//   }
// });

// const proWishlist = mongoose.model("proWishlist", wishlistSchema);

// module.exports = proWishlist;