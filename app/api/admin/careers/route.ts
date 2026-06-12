import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import { Career } from "@/lib/models";

export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();
    const career = await Career.create(body);
    return NextResponse.json(career, { status: 201 });
  } catch (error: any) {
    console.error("Failed to create career:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET() {
  try {
    await connectDB();
    const careers = await Career.find({}).sort({ createdAt: -1 });
    return NextResponse.json(careers);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
