
const Agentrqst = require("../../Model/Agentrqstschema");

const postRequest = async (req, res) => {
    const request = req.body;

    try {
        const newRequest = new Agentrqst(request);
        const result = await newRequest.save();
        res.send(result);
    } catch (error) {
        console.error('Error saving request:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}


const findAll = async (req, res) => {
    try {
        const result = await findAllRequests();
        res.send(result);
    } catch (error) {
        res.send(error);
    }
};

const findAllRequests = async () => {
    const cursor = await Agentrqst.find();
    return cursor;
};

module.exports = {postRequest, findAll};