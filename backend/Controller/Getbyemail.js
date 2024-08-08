const Add = require("./Addproschema");

const getoneuser = async (req, res) => {
  const getemail = req.params.email;
  const getone = await Add.find({ email: getemail });
  res.json(getone);
};
module.exports = getoneuser;

