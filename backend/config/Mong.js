const mongoose = require('mongoose');

const connection = async ()=>{
    try{
        await mongoose.connect("mongodb+srv://suryaviswanath22:surya944744@surya.brmqv3l.mongodb.net/?retryWrites=true&w=majority")
        console.log('Database is connected')
    }
    catch(err){
        console.log(`error :${err}`);
        process.exit();
    }
}
module.exports = connection;