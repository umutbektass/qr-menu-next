import User from "@/models/User";
import { connectToDB } from "@/utils/db";
import { NextResponse } from "next/server";
import  bcryptjs  from "bcryptjs"

export const POST = async (req) => {
    try {
        const { name, email, password } = await req.json();
        console.log("password",password)
        await connectToDB();
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return NextResponse.json({ message: "Registration Not Available." }, { status: 500 });
        }
        
        const hashedPassword = await bcryptjs.hash(password, 5);  // Şifreyi hashliyoruz
        console.log("hashedPassword", hashedPassword);
        
        const newUser = new User({
            name,
            email,
            password:hashedPassword,
        });
        
       await newUser.save();
        return NextResponse.json({ message: "Registration Successful." }, { status: 201 });
    } catch (error) {
        console.log("error",error)
        return NextResponse.json({ message: "Failed to record." }, { status: 400 });
    }
};
