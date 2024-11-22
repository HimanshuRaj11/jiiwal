//  Update or edit Comment


import { InternalServerError } from "@/lib/handleError";
import { verifyUser } from "@/lib/verifyuser";
import Comment from "@/models/comment.model";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const user_id = await verifyUser();
        const { comment_id, Comments } = await request.json();
        if (!user_id || !comment_id || !Comments) return NextResponse.json({ message: "somthing went wrong!" })
        const comment = await Comment.findOneAndUpdate({ _id: comment_id }, { Comment: Comments }, { returnDocument: "after" })
        return NextResponse.json({ message: "comment Updated success", comment, success: true }, { status: 200 })
    } catch (error) {
        return NextResponse.json(InternalServerError(error))
    }
}