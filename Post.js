import mongoose from "mongoose";

const Post = new mongoose.Schema({
    title: {type: String, required: true},
    option: {type: String, required: true},
    userID: {type: String, required: true},
    active: {type: Boolean, required: true},
})

export default mongoose.model('Post', Post)