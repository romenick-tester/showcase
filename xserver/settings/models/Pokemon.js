const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PokemonSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    type1: {
        type: String,
        required: true,
        default: "normal"
    },
    type2: {
        type: String,
        default: "na"
    },
    typeIcons: {
        type: Array
    },
    level: {
        type: Number,
        default: Math.floor(Math.random() * 50) + 1
    },
    evolveFrom: {
        type: String,
        default: "na"
    },
    evolveTo: {
        type: String,
        default: "na",
    },
    image: {
        type: String,
        default: "na"
    },
    images: {
        type: Array
    },
    color: {
        type: String,
        default: "na"
    },
    assets: {
        type: Array
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const Pokemon = mongoose.model("Pokemon", PokemonSchema);

module.exports = Pokemon;