const mongoose = require("mongoose")
const {Schema} = mongoose;

const commentSchema = new Schema({
    text: {
        type: String,
        required: true,
    }
})

const Comment = mongoose.model("Comment", postSchema)

module.exports = Comment