// const bcrypt=require('bcrypt');
// const Customer = require('./Customerschema');
// const Customersignup = async(req,res)=>{
//     const {name,email,phone,password}=req.body;
//     const existingCustomer = await Customer.findOne({email});
// if(existingCustomer){
//     return res.status(400).json({error:'email alredy exist'})
// }    
//     const Customerdetails = await Customer.create({
//        name,email,phone,password
// })
// res.json(Customerdetails)
// }
// module.exports=Customersignup

const Customer = require("./Customerschema");






const Customersignup = async(req, res) => {
    const { name,email,phone,password } = req.body;

    // Basic validation
    if (!name || !email || !phone || !password) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        const existingCustomer = await Customer.findOne({ email });
        if (existingCustomer) {
            return res.status(400).json({ error: 'Email already exists' });
        }

        const customerDetails = await Customer.create({
            name,
            email,
            phone,
            password,  // Storing plain text password (not recommended)
        });

        // console.log('User created successfully:', customerDetails);
        res.status(201).json(customerDetails);
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = Customersignup;