import { connect } from "/dbConfig/dbConfig";
import User from "/models/userModel";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

connect();

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { userName, email, password } = reqBody;
    const lowercaseEmail = email.toLowerCase();
    console.log(reqBody);

    const user = await User.findOne({ email:lowercaseEmail });
    if (user) {
      return NextResponse.json({ message: "Email already exists" });
    }
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newUser = new User({
      userName,
      email: lowercaseEmail,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();

    console.log(savedUser);

    return NextResponse.json({
      message: "User created successfully",
      success: true,
      savedUser,
    });
  } catch (error) {
    return NextResponse.json(error, error.message);
  }
}
