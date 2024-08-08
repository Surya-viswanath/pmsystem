const Agentrqst = require("../../Model/Agentrqstschema");



const requestAccept = async (req, res) => {
    const id = req.params.id;
    // console.log("Request ID:", id);

    try {
        const updatedRequest = await Agentrqst.findByIdAndUpdate(
            { _id: id },
            { status: 'accepted' },
            { new: true }
        );

        if (!updatedRequest) {
            return res.status(404).send({ message: 'Request not found' });
        }

        res.send(updatedRequest);
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Internal server error' });
    }
};


const requestReject = async (req, res) => {
    const id = req.params.id;

    try {
        const updatedRequest = await Agentrqst.findByIdAndUpdate(
            { _id: id },
            { status: 'rejected' },
            { new: true }
        );

        if (!updatedRequest) {
            return res.status(404).send({ message: 'Request not found' });
        }

        res.send(updatedRequest);
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Internal server error' });
    }
};


const checkPendingRequest = async (req, res) => {

    const userId = req.query.userId;

    try {
        const existingRequest = await Agentrqst.findOne({ userId, status: 'pending' });
        if (existingRequest) {
            res.json({ hasPendingRequest: true });
        } else {
            res.json({ hasPendingRequest: false });
        }
    } catch (error) {
        console.error('Error checking pending request:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports ={requestAccept,requestReject ,checkPendingRequest};