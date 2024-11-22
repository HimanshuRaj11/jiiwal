// savedPost

import { InternalServerError } from "@/lib/handleError";
import { verifyUser } from "@/lib/verifyuser";
import User from "@/models/user.model";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const user_id = await verifyUser()
        const { Post_id } = await request.json();
        await User.findOneAndUpdate({ _id: user_id }, { $addToSet: { savedPost: Post_id } })

        return NextResponse.json({ message: "Post saved", success: true }, { status: 200 })
    } catch (error) {
        return NextResponse.json(InternalServerError(error))
    }
}