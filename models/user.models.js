const mongoose = require("mongoose")
const {Schema} = mongoose;

const userSchema = new Schema({
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    posts:[{
            post:{
                type: mongoose.Schema.Types.ObjectId,
                ref: "Post"
            },
        }],
})

const User = mongoose.model("User", userSchema)

module.exports = User