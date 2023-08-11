import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            min: 2,
            max: 50,
        },
        lastName:{
            type: String,
            required: true,
            min: 2,
            max: 50,
        },
        nickName: {
            type: String,
            required: true,
            min: 2,
            max: 50,
        },
        email: {
            type: String,
            required: true,
            max: 50,
            unique: true,
        },
        password: {
            type: String,
            required: true,
            min:5
        },
        pictureFile: {
            type: String,
            default: "",
        },
        friends: {
            type: Array,
            default: [],
        },
        stars: {
            type: Map,
            of: Boolean,
        },
    },
    { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

export default User;