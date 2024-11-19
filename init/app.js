const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

// Mongo DB connection
const MONGO_DB = "mongodb://127.0.0.1:27017/wanderlust";

async function main() {
    mongoose.connect(MONGO_DB);
}

main().then(() => {
    console.log("Connected to DB");
}).catch ((err) => {
    console.log(err);
});

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({
        ...obj,
        owner: "673ab62721ba2b59cacc1571",
    }));
    await Listing.insertMany(initData.data);
    console.log("Data was initialized");
}

initDB();