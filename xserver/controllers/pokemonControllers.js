const asyncHandler = require("express-async-handler");
const Pokemon = require("../settings/models/Pokemon");

const registerPokemon = asyncHandler(async (req, res) => {

    const pokemonExist = await Pokemon.findOne({ name: req.body.name, type1: req.body.type1 });

    if (pokemonExist) {
        res.status(401)
        throw new Error("This pokemon already exist");
    }

    const newPokemon = new Pokemon({
        name: req.body.name,
        type1: req.body.type1,
        type2: req.body.type2,
        evolveFrom: req.body.evolveFrom,
        evolveTo: req.body.evolveTo,
        assets: req.body.assets,
        color: req.body.color,
        typeIcons: [req.body.type1, req.type.type2 !== "na" && req.body.type2]
    });

    const pokemon = await newPokemon.save();

    if (!pokemon) {
        res.status(500)
        throw new Error("Server Error");
    } else {
        res.status(201).json(pokemon);
    }
})

const getAllPokemon = asyncHandler(async (req, res) => {
    let pokemon = [];

    if (req.query.type) {
        pokemon = await Pokemon.find({ type1: req.query.type });
    } else {
        pokemon = await Pokemon.find({});
    }

    if (pokemon.length === 0) {
        res.status(404)
        throw new Error("Pokemon not found!")
    } else {
        res.status(200).json(pokemon);
    }
});

const getPokemonById = asyncHandler(async (req, res) => {

    const pokemon = await Pokemon.findById(req.params.id);

    if (!pokemon) {
        res.status(404)
        throw new Error("Pokemon not found!");
    } else {
        res.status(200).json(pokemon);
    }
});

module.exports = { getAllPokemon, getPokemonById, registerPokemon };