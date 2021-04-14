const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../settings/models/User");

const getAllUsers = asyncHandler(async (req, res) => {
    const users = await User.find({});

    res.status(200).json(users);
});

const registerUser = asyncHandler(async (req, res) => {

    const emailExist = await User.findOne({ email: req.body.email });

    if (emailExist) {
        res.status(400)
        throw new Error("This email already exist");
    } else {

        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: await bcrypt.hash(req.body.password, await bcrypt.genSalt(10))
        })

        const user = await newUser.save();

        if (user) {
            const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: 36000 });

            return res.status(201).json({ token });
        } else {
            res.status(500)
            throw new Error("Server Error");
        }
    }
});

const loginUser = asyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
        res.status(401)
        throw new Error("Invalid crendentials, access denied");
    }

    if (user && (await bcrypt.compare(req.body.password, user.password))) {
        const request = {
            name: user.name,
            email: user.email,
            token: jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: 36000 }),
        }

        res.status(200).json(request);
    } else {
        res.status(401)
        throw new Error("Invalid credentials, access denied");
    }
});

module.exports = { getAllUsers, registerUser, loginUser };