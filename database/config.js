const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const dbConnection = async() => {

    try {

       await mongoose.connect( process.env.MONGODB,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        //useCreateIndex: true, 
        //useFindAndModify: false
       });

       console.log("Data base online");

    } catch (error) {
        throw new Error(' Error while connection to the database');
    }
}

module.exports = {
    dbConnection
}