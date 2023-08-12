import Post from "../models/Post.js";

/* CREATE */
export const createPost = async(req, res) => {
    try{
        const { userId, description, pictureFile, location, } = req.body;
        const user = await User.findById(userId);
        const newPost = new Post({
            userId,
            nickName: user.nickName,
            location: location,
            description: description,
            interested: {},
            pictureFile: pictureFile,

        });
        await newPost.save();

        const post = await Post.find();

        res.status(201).json(post);

    } catch (err){
        res.status(409).json({ message: err.message });
    }
}

/*  READ */
export const getFeedPosts = async (req, res) => {
    try{
        const post = await Post.find();
        res.status(200).json(post);
    } catch (err){
        res.status(404).json({ message: err.message });
    }
}

/* UPDATE */
export const interestedPost = async(req, res) => {
    try{
        const { id } = req.params;
        const { userId } = req.body;
        const post = await Post.findById(id);
        const isLiked = post.interested.get(userId);

        if(isLiked){
            post.interested.delete(userId);
        } else{
            post.interested.set(userId, true);
        }

        const updatedPost = await Post.findByIdAndUpdate(
            id,
            { interested: post.interested },
            { new: true }
        );

        res.status(200).json(updatedPost);
        
    } catch (err){
        res.status(404).json({ message: err.message });
    }
};