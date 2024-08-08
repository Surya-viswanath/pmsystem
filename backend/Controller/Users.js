const Agent = require("./Userschema");
const bcrypt = require("bcrypt");

const Createagent = async (req, res) => {
  const {
    name,
    password,
    nationality,
    languages,
    experience,
    details,
    phone,
    email,
    profile,
  } = req.body;
  const existingagent = await Agent.findOne({ email });
  if (existingagent) {
    return res.status(400).json({ error: "email alredy exist" });
  }

  const salt = await bcrypt.genSalt(10);
  const hashedpassword = await bcrypt.hash(password, salt);
  const agentdetails = await Agent.create({
    name,
    password: hashedpassword,
    nationality,
    languages,
    experience,
    details,
    phone,
    email,
    profile,
  });
  res.json(agentdetails);
};

const getagent = async (req, res) => {
  const agentList = await Agent.find();
  res.json(agentList);
};

const deleteagent= async (req, res) => {
  const id = req.params.id;
  try {
    const deletedList = await Agent.findByIdAndDelete(id);
    if (!deletedList) {
      return res.status(404).json({ message: "List not found" });
    }
    res.json({ message: "List deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = { Createagent, getagent ,deleteagent};
