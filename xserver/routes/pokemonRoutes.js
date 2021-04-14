const express = require("express");
const router = express.Router();
const { getAllPokemon, getPokemonById, registerPokemon } = require("../controllers/pokemonControllers");

router
    .route("/")
    .get(getAllPokemon)
    .post(registerPokemon);

router
    .route("/:id")
    .get(getPokemonById);

module.exports = router;