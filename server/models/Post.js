import mongoose from "mongoose";

const postSchema = mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
        },
        nickName: {
            type: String,
            required: true,
        },
        location: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        interested: {
            type: Map,
            of: Boolean,
        },
        pictureFile: String,
    },
    { timestamps: true }
    );

    const Post = mongoose.model("Post", postSchema);

    export default Post;