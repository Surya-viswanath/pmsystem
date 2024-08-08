const express = require('express');


// const Usersignup = require('../Controller/Usersignup');
// const {Createagent,getagent,deleteagent} = require('../Controller/Users');

const getoneuser = require('../Controller/Getbyemail');
// const { Createlist ,getcollection} = require('../Controller/Addpro');
const { generatelist, getlist, deleteList, updateList } = require('../Controller/New');

const Customersignup = require('../Controller/CustomerSignup');
const Customerlogin = require('../Controller/Customerlogin');

const { getcustomer, deletecustomer, updateCustomerRole}=require('../Controller/Customer');
const {postRequest, findAll }= require('../Controller/Agent/Agent');
const { requestAccept, requestReject, checkPendingRequest } = require('../Controller/Agent/Acceptorganizer');
const { getWishlist, CreateWishlist, deleteWishlist} = require('../Controller/Wishlist');
const router = express.Router();


router.route('/wishlist').post( CreateWishlist)
router.route('/getwishlist/:_id').get(getWishlist)
// router.route('/getwishlist/:email').get(getWishlist)
router.route('/deletewishlist/:id/:idp').delete(deleteWishlist)
// router.route('/deleteallwishlist/:email').delete(deleteAllwishlist)
// router.route('/createlist').post(Createlist)

// router.route('/rqst').post(postRequest)
// router.route('/rqst').get(findAll)
// router.route('/rqst/accept/:id').put(requestAccept)
// router.route('/rqst/reject/:id').put(requestReject)
// router.route('/check-pending-request').get(checkPendingRequest)
router.route('/request-organizer').post(postRequest)
router.route('/request-organizer').get(findAll)
router.route('/request-organizer/accept/:id').put(requestAccept)
router.route('/request-organizer/reject/:id').put(requestReject)
router.route('/check-pending-request').get(checkPendingRequest)
// router.route('/adminsign').post(Adminsignup)
// router.route('/adminlogin').post(Adminlogin)
router.route('/Customersign').post(Customersignup)
router.route('/customerlogin').post(Customerlogin)
router.route('/getcustomer').get(getcustomer)
router.route('/deletecustomer/:id').delete(deletecustomer)
router.route('/update-user/:id').put(updateCustomerRole)



// router.route('/deleteagent/:id').delete(deleteagent)
// router.post('/createagent',Createagent)
// router.route('/getagent').get(getagent)
// router.route('/login').post(Userlogin)
router.route('/getone/:email').get(getoneuser)
router.route('/createpro').post(generatelist)
router.route('/getpro').get(getlist)
router.route('/deleteList/:id').delete(deleteList)
router.route('/updateList/:id').put(updateList)
// router.delete('/deleteList/:id', deleteList);
// router.put('/updateList/:id', updateList);
// router.route('/postwish').post(CreateWishlist)
// router.route('/getwish/:id').get(getWishlist)

// router.route('/deletewish').delete(deleteWishlist)
// router.route('/deleteallwish').delete(deleteAllwishlist)

module.exports =router