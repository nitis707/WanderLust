const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema ({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
});

userSchema.plugin(passportLocalMongoose); // ye username, password, hashing and salting automatically implement kar deta hai

module.exports = mongoose.model("User", userSchema);