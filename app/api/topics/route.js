import connectMongoDb from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function POST(reqest) {
    
    const {title,description} =await reqest.json();
    //console.log({title,description});
    await connectMongoDb();
    await Topic.create({title,description});
    return NextResponse.json({message:"topic created"},{status:201})
}

export async function GET(request) {
    await connectMongoDb();
    const topics= await Topic.find();
    return NextResponse.json(topics);   
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDb();
    await Topic.findByIdAndDelete(id);
    return NextResponse.json({message:"topic deleted"},{status:200})
    
}