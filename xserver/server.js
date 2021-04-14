const express = require("express");
require("dotenv").config();
const { usersRoutes, pokemonRoutes } = require("./routes");
const { connectDB, errorHandler, notFound } = require("./settings");

const app = express();
connectDB();

app.use(express.json({ extended: true }));

app.use("/api/pokemon", pokemonRoutes);
app.use("/api/users", usersRoutes);

app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 5000;
app.listen(port, console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${port}`));