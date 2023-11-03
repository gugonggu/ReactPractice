import Post from "../models/Post.js";
import User from "../models/User.js";
import Reple from "../models/Reple.js";

export const postRepleSubmit = async (req, res) => {
    let temp = {
        reple: req.body.reple,
        postId: req.body.postId,
    };
    const user = await User.findOne({ uid: req.body.uid });
    if (user) {
        temp.author = user._id;
        const newReple = new Reple(temp);
        await newReple.save();
        await Post.findByIdAndUpdate(req.body.postId, {
            $inc: { repleNum: 1 },
        });
        return res.status(200).json({ success: true });
    }
    return res.status(400).json({ success: false });
};

export const postGetReple = async (req, res) => {
    const repleList = await await Reple.find({
        postId: req.body.postId,
    }).populate("author");
    return res.status(200).json({ success: true, repleList: repleList });
};

export const postRepleEdit = async (req, res) => {
    await Reple.findByIdAndUpdate(req.body.repleId, { reple: req.body.reple });
    return res.status(200).json({ success: true });
};

export const postRepleDelete = async (req, res) => {
    await Reple.findByIdAndDelete(req.body.repleId);
    await Post.findByIdAndUpdate(req.body.postId, {
        $inc: { repleNum: -1 },
    });
    return res.status(200).json({ success: true });
};
