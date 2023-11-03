import mongoose from "mongoose";

const repleSchema = new mongoose.Schema({
    reple: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
    },
});

const Reple = mongoose.model("Reple", repleSchema);

export default Reple;
