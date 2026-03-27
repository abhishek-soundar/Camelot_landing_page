import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Waitlist from "@/models/Waitlist";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, role } = body;

    if (!email) {
      return NextResponse.json({ success: false, error: "Email is required" }, { status: 400 });
    }

    await dbConnect();

    // Check if already exists
    const existing = await Waitlist.findOne({ email });
    if (existing) {
       return NextResponse.json({ success: false, error: "Already on waitlist!" }, { status: 400 });
    }

    await Waitlist.create({ email, role });

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    const err = error as { code?: number; message?: string };
    console.error("Waitlist error:", err);
    if (err.code === 11000) {
      return NextResponse.json({ success: false, error: "Already on waitlist!" }, { status: 400 });
    }
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 });
  }
}
