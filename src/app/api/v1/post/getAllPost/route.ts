import { InternalServerError } from "@/lib/handleError";
import Post from "@/models/post.model";
import { NextResponse } from "next/server";
import User from "@/models/user.model";

export async function GET(request: Request) {
    try {

        const posts = await Post.find().sort({ createdAt: -1 })
        // .populate({
        //     path: "user",
        //     select: "_id username name profilePic"
        // })
        // .populate({
        //     path: "comments",
        // })

        return NextResponse.json({ message: "Post Fetched", posts })
    } catch (error) {
        console.log(error);

        return NextResponse.json(InternalServerError(error))

    }
}