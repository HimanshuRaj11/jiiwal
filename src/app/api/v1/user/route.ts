import { InternalServerError } from "@/lib/handleError";
import { verifyUser } from "@/lib/verifyuser";
import User from "@/models/user.model";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    try {

        const user_id = await verifyUser()
        const user = await User.findOne({ _id: user_id }).select('-password')
        const response = NextResponse.json({ user }, { status: 200 })
        return response;

    } catch (error) {
        return NextResponse.json(InternalServerError(error))
    }
}