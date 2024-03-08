const mongoose = require('mongoose')
require('dotenv').config();
const monoUrl = process.env.MONGO_URL;


module.exports.myDb = () => {
    try {
        mongoose.connect(monoUrl)
            .then(() => [
                console.log("Connected to Database hurray !!!!!")
            ])
    } catch (error) {
        console.log(error)
    }

}