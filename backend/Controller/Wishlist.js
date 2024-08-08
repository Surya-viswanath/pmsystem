const express = require("express");

const Customer = require("./Customerschema");
const proWishlist = require("./Wishlistschema");


const router = express.Router();

const CreateWishlist = async (req, res) => {
  try {
    const { userId, propertyid } = req.body;
    const user = await Customer.findOne({ _id: userId });
    let wishlist = await proWishlist.findOne({ user: user });
    if (wishlist) {
      wishlist=await proWishlist.updateOne(
        { user: user},
        { $push: { properties: propertyid } }
      );
    } else {
      wishlist = await proWishlist.create({
        user: user,
        properties: [propertyid],
      });
    }
    res.json({ success: true });
  } catch (error) {
    console.error("Error adding item to wishlist:", error);
    res.status(500).send("Internal Server Error");
  }
};

const getWishlist = async (req, res) => {
  try {
    const user = await Customer.findOne({ _id: req.params._id  });
   
    const cartItems = await proWishlist.findOne({ user:user });
    
    res.status(200).send(cartItems);
  } catch (error) {
    console.error("Error fetching cart items:", error);
    res.status(500).send("Internal Server Error");
  }
}





const deleteWishlist = async (req, res) => {
  try {
    const userId = req.params.id;
    const productId = req.params.idp;
  
    console.log(userId);
    const user = await Customer.findOne({ _id: userId });
  
    const cart = await proWishlist.findOne({ user: user });
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }
    cart.properties = cart.properties.filter(item => item._id !== productId);
    await cart.save();

   
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).send("Internal Server Error");
  }
};





module.exports = { CreateWishlist, getWishlist, deleteWishlist};