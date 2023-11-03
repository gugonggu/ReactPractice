import Post from "../models/Post.js";
import User from "../models/User.js";
import multer from "multer";

export const post = async (req, res) => {
    let temp = {
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
    };
    const user = await User.findOne({ uid: req.body.uid });
    console.log(user, req.body.uid);
    temp.author = user._id;
    const communityPost = new Post(temp);
    await communityPost.save();
    return res.status(200).json({ success: true });
};

export const postList = async (req, res) => {
    try {
        const list = await Post.find().populate("author");
        return res.status(200).json({ success: true, postList: list });
    } catch (e) {
        console.log(e);
    }
};

export const postDetail = async (req, res) => {
    const value = await Post.findById(req.body.postId).populate("author");
    return res.status(200).json({ success: true, value });
};

export const postEdit = async (req, res) => {
    let tmp = {
        title: req.body.title,
        content: req.body.content,
    };
    await Post.findByIdAndUpdate(req.body.id, tmp);
    return res.status(200).json({ success: true });
};

export const postDelete = async (req, res) => {
    await Post.findByIdAndDelete(req.body.postId);
    return res.status(200).json({ success: true });
};

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "image/");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    },
});

const upload = multer({ storage: storage }).single("file");

export const postImageUpload = async (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            return res.status(400).json({ success: false });
        } else {
            return res
                .status(200)
                .json({ success: true, filePath: res.req.file.path });
        }
    });
};
