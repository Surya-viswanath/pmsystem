const New = require("./Newshema");

const generatelist = async (req, res) => {
  const {
    description,
    address,
    regularPrice,
    discountPrice,
    bathrooms,
    bedrooms,
    furnished,
    parking,
    type,
    offer,
    propertysize,
    phone,
    email,
    image,
    location,
    sell,
    userId,
  } = req.body;
  const listingdata = New.create({
    description,
    address,
    regularPrice,
    discountPrice,
    bathrooms,
    bedrooms,
    furnished,
    parking,
    type,
    offer,
    propertysize,
    phone,
    email,
    image,
    location,
    sell,
    userId,
  });
  res.json(listingdata);
};

const getlist = async (req, res) => {
  const collectionlist = await New.find();
  res.json(collectionlist);
};

const deleteList = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedList = await New.findByIdAndDelete(id);
    if (!deletedList) {
      return res.status(404).json({ message: "List not found" });
    }
    res.json({ message: "List deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateList = async (req, res) => {
  const id = req.params.id;
  const updates = req.body;
  try {
    const updatedList = await New.findByIdAndUpdate(id, updates, { new: true });
    if (!updatedList) {
      return res.status(404).json({ message: "List not found" });
    }
    res.json(updatedList);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { generatelist, getlist, deleteList, updateList };
