const mongoose = require("mongoose");
require("dotenv").config();

const db = process.env.MONGO_ATLAS || "mongodb://localhost:27017";

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        })

        console.log("database connected...");
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
}

module.exports = connectDB;