const connectDB = require("./db");
const auth = require("./middlewares/auth");
const { notFound, errorHandler } = require("./middlewares/errorHandlers");
const User = require("./models/User");
const Pokemon = require("./models/Pokemon");

module.exports = { connectDB, User, Pokemon, auth, errorHandler, notFound };