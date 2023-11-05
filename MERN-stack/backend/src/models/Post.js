import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
    {
        title: String,
        content: String,
        image: String,
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        repleNum: {
            type: Number,
            default: 0,
        },
    },
    { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

export default Post;
