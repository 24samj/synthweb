const mongoose = require("mongoose");
require("dotenv").config();
const User = require("./models/user");

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("Could not connect to MongoDB", err));

const users = [
    {
        name: "John Doe",
        email: "john@example.com",
        age: 30,
        bio: "Software developer from California.",
        profilePicture:
            "https://images.unsplash.com/photo-1595152772835-219674b2a8a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEwfHxwcm9maWxlfGVufDB8fHx8MTY2OTg1MDA0MA&ixlib=rb-1.2.1&q=80&w=400",
    },
    {
        name: "Jane Smith",
        email: "jane@example.com",
        age: 25,
        bio: "Graphic designer from New York.",
        profilePicture:
            "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHByb2ZpbGV8ZW58MHx8fHwxNjY5ODUwMDQw&ixlib=rb-1.2.1&q=80&w=400",
    },
    {
        name: "Alice Johnson",
        email: "alice@example.com",
        age: 28,
        bio: "Marketing specialist from Texas.",
        profilePicture:
            "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDN8fHByb2ZpbGV8ZW58MHx8fHwxNjY5ODUwMDQw&ixlib=rb-1.2.1&q=80&w=400",
    },
    {
        name: "Bob Brown",
        email: "bob@example.com",
        age: 32,
        bio: "Product manager from Florida.",
        profilePicture:
            "https://images.unsplash.com/photo-1502767089025-6572583495e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDR8fHByb2ZpbGV8ZW58MHx8fHwxNjY5ODUwMDQw&ixlib=rb-1.2.1&q=80&w=400",
    },
];

// Insert dummy data into MongoDB
const insertData = async () => {
    try {
        await User.insertMany(users);
        console.log("Dummy data inserted");
        mongoose.disconnect();
    } catch (error) {
        console.error("Error inserting dummy data:", error);
        mongoose.disconnect();
    }
};

insertData();
