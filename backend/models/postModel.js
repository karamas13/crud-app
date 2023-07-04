const mongoose = require('mongoose');

//DB-Schema and Model
const postSchema = mongoose.Schema({
    title: String,
    description: String
})

const Post = mongoose.model("Post", postSchema);

module.exports = Post;