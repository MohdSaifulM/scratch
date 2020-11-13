const mongoose = require("mongoose")
const {Schema} = mongoose;

const postSchema = new Schema({
    caption: {
        type: String,
    },
    comments:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
    }],
})

const Post = mongoose.model("Post", postSchema)

module.exports = Post