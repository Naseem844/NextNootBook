import connectMongoDb from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";



export async function OPTIONS() {
    return NextResponse.json(
      {},
      {
        status: 200,
        headers: {
          "Access-Control-Allow-Origin": "https://next-noot-book.vercel.app",
          "Access-Control-Allow-Methods": "GET, POST, DELETE, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      }
    );
  }

export async function POST(reqest) {
    
    const {title,description} =await reqest.json();
    //console.log({title,description});
    await connectMongoDb();
    await Topic.create({title,description});
    return NextResponse.json({message:"topic created"},{status:201,headers: {
        "Access-Control-Allow-Origin": "https://next-noot-book.vercel.app",
      },})
}

export async function GET(request) {
    await connectMongoDb();
    const topics= await Topic.find();
    return NextResponse.json(topics , {
        headers: {
          "Access-Control-Allow-Origin": "https://next-noot-book.vercel.app",
        },
      });   
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDb();
    await Topic.findByIdAndDelete(id);
    return NextResponse.json({message:"topic deleted"},{status:200,headers: {
        "Access-Control-Allow-Origin": "https://next-noot-book.vercel.app",
      },})
    
}