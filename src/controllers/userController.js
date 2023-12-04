const userModel = require('../models/user');

// Signing up new user
exports.userSignup = async (req, res) => {
    try {
        const newAccount = new userModel({
            ...req.body
        })
        await newAccount.save();
        res.status(201).send(newAccount);
    } catch (error) {
        res.status(500).send(error);
    }
} 

// loging in existing user
exports.userLogin = async (req, res) => {
    const account = await userModel.findOne({ $or: [{ userName: req.body.userName }, { email: req.body.userName }] });

    if (account) {
        if (req.body.password === account.password) {
            res.status(200).send({
                "status": true,
                "username": req.body.userName,
                "message": "User Logged in successfully"
            });
        } else {
            res.status(401).send({
                "status": false,
                "message": "Invalid password"
            });
        }
    } else {
        res.status(401).send({
            "status": false,
            "message": "Invalid Username and Password"
        });
    }
}