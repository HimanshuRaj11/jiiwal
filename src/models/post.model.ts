
import mongoose, { Schema, model, models, Model, Document } from 'mongoose';

export interface Ifile {
    public_id: string;
    asset_id: String;
    version: Number;
    version_id: String;
    signature: String;
    width: Number;
    height: Number;
    format: String;
    resource_type: String;
    created_at: String;
    bytes: Number;
    type: String;
    etag: String;
    placeholder: Boolean;
    url: String;
    secure_url: String;
    folder: String;
    api_key: String;
}

export interface IPost {
    user: Schema.Types.ObjectId[];
    files?: Ifile;
    caption?: string;
    location?: string;
    colabWith?: Schema.Types.ObjectId[];
    tags?: string[];
    tagPeople?: Schema.Types.ObjectId[];
    music?: string;
    likes?: Schema.Types.ObjectId[];
    comments?: Schema.Types.ObjectId[];
    views?: Schema.Types.ObjectId[];
}

const file = {
    asset_id: { type: String, },
    public_id: { type: String, },
    version: { type: Number, },
    version_id: { type: String, },
    signature: { type: String, },
    width: { type: Number },
    height: { type: Number, },
    format: { type: String, },
    resource_type: { type: String, },
    created_at: { type: String, },
    bytes: { type: Number, },
    type: { type: String, },
    etag: { type: String, },
    placeholder: { type: Boolean, },
    url: { type: String, },
    secure_url: { type: String, },
    folder: { type: String, },
    api_key: { type: String, },
}

const PostSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    files: [file],
    caption: {
        type: String,
        trim: true
    },
    location: {
        type: String,
    },
    colabWith: [{
        type: Schema.Types.ObjectId,
        ref: "User",
    }],
    tags: [{
        type: String,
    }],
    tagPeople: [{
        type: Schema.Types.ObjectId,
        ref: "User",
    }],
    music: {
        type: String,
    },
    likes: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }],
    comments: [{
        type: Schema.Types.ObjectId,
        ref: "Comment"
    }],
    views: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }]
}, { timestamps: true })

const Post: Model<IPost> = models.Post || model("Post", PostSchema)

export default Post;



