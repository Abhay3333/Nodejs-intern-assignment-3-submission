const mongoose = require("mongoose");
const Schema = mongoose.Schema;





const likeSchema = new Schema(
    {
        postId: {
            type: mongoose.Types.ObjectId,
            ref: "Post",
            default: null,
        },
        likedBy: [{
            type: mongoose.Types.ObjectId,
            required: true,
            ref: "User",
        }],
    },
    { timestamps: true }
);

const Like = mongoose.model("Like", likeSchema);
module.exports = {Like};

