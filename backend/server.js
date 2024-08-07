const https = require("https");
const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const os = require("os");

const app = express();

// Read the key and certificate
const options = {
    key: fs.readFileSync("server.key"),
    cert: fs.readFileSync("server.cert"),
};

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// MongoDB connection
mongoose.connect(
    "mongodb+srv://samj24:ElrRGBraF1TteIjI@cluster0.mob0anj.mongodb.net/sw_db",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

mongoose.connection.on("error", (error) =>
    console.error("MongoDB connection error:", error)
);
mongoose.connection.once("open", () => console.log("Connected to MongoDB"));

const userRoutes = require("./routes/users");

app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 3000;

https.createServer(options, app).listen(PORT, () => {
    const interfaces = os.networkInterfaces();
    console.log(`Server is running on port ${PORT}`);
    Object.keys(interfaces).forEach((iface) => {
        interfaces[iface].forEach((address) => {
            if (address.family === "IPv4") {
                console.log(`Accessible at https://${address.address}:${PORT}`);
            }
        });
    });
});
