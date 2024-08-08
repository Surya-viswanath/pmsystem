

const Customer = require('./Customerschema');

const getcustomer = async (req, res) => {
    const collectionlist = await Customer.find();
    res.json(collectionlist);
  };

  const deletecustomer= async (req, res) => {
    const id = req.params.id;
    try {
      const deletedList = await Customer.findByIdAndDelete(id);
      if (!deletedList) {
        return res.status(404).json({ message: "List not found" });
      }
      res.json({ message: "List deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  const updateCustomerRole = async (req, res) => {
    const userId = req.params.id;
    const newRole = req.body.role;
  
    try {
      // Find the user by ID and update the role
      const updatedCustomer = await Customer.findByIdAndUpdate(
        userId,
        { role: newRole },
        { new: true }
      );
  
      if (!updatedCustomer) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.json(updatedCustomer);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
module.exports = {getcustomer, deletecustomer,updateCustomerRole};