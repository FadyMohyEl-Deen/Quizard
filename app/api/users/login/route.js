import { connect } from "/dbConfig/dbConfig";
import User from "/models/userModel";
import { NextResponse } from "next/server";

connect();

export async function POST(request) {
    try {
        const { email, password } = await request.json();

        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        // Check password
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
        }

        // Generate token (assuming you have a method for this)
        const token = user.generateAuthToken();

        return NextResponse.json({ token }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}