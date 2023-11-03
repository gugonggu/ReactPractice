import User from "../models/User.js";

export const postRegister = async (req, res) => {
    const userData = new User(req.body);
    await userData.save();
    return res.status(200).json({ success: true });
};

export const postNameCheck = async (req, res) => {
    const user = await User.findOne({ displayName: req.body.displayName });
    console.log(user);
    let check = true;
    if (user) check = false;
    return res.status(200).json({ success: true, check: check });
};
