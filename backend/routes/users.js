const express = require("express");
const router = express.Router();
const User = require("../models/user");

// Get all users with pagination
router.get("/", async (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    try {
        const users = await User.find()
            .skip((page - 1) * limit)
            .limit(parseInt(limit));
        const total = await User.countDocuments();
        res.json({
            users,
            total,
            page: parseInt(page),
            pages: Math.ceil(total / limit),
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get user by ID
router.get("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
