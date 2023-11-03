import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: String,
    displayName: String,
    uid: String,
});

const User = mongoose.model("User", userSchema);

export default User;
