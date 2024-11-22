import mongoose, { Schema, model, models, Model, Document } from 'mongoose';

interface IComment {
    user: Schema.Types.ObjectId,
    Comment: string
}

const CommentSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    Comment: {
        type: String,
        required: true,
        trim: true
    }
})

const Comment: Model<IComment> = models.Comment || model("Comment", CommentSchema)

export default Comment;