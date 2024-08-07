const mongoose = require("mongoose");

// Create user schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    bio: String,
    profilePicture: String,
});

module.exports = mongoose.model("User", userSchema);
