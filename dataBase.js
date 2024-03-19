const mongoose = require('mongoose');
require('dotenv').config();

const dbConnect = () => {
    mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Db connection successfully");
    })
    .catch((error) => {
        console.error("Error in connection:", error);
    });
};

module.exports = dbConnect;