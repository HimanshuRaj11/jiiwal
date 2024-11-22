import { InternalServerError } from "@/lib/handleError";
import { verifyUser } from "@/lib/verifyuser";
import Chat from "@/models/chat.model";
import Message from "@/models/message.model";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const user_id = await verifyUser();
        const { OtherUser } = await request.json();
        if (!OtherUser) return NextResponse.json({ message: "Somthing went wrong!", error: true }, { status: 500 })

        const chat = await Chat.findOne({ $all: { users: [user_id, OtherUser] } })

        if (!chat) {
            await Chat.create({
                users: [user_id, OtherUser]
            })
        }

        return NextResponse.json({ message: "", success: true }, { status: 200 })
    } catch (error) {
        return NextResponse.json(InternalServerError(error))
    }
}