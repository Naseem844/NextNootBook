// import connectMongoDb from "@/libs/mongodb";
// import Topic from "@/models/topic";
// import { NextResponse } from "next/server";
// import mongoose from "mongoose";

// export async function PUT(request,{params}) {
//     const {id} = params;
//     const {newTitle:title, newDescription: description} =await request.json();
//     await Topic.findByIdAndUpdate(id,{title,description});
//     return NextResponse.json({message:"topic updated"},{status:200})
// }

// // export async function GET(request, {params}) {
// //     const {id}=params;
// //     await connectMongoDb();
// //     console.log(mongoose.Types.ObjectId(id));
// //     const topic = await Topic.findOne({ _id: mongoose.Types.ObjectId(id) });
// //     return NextResponse.json({topic},{status:200});
// // }

// export async function GET(request, {params}) {
    
//     const  {id}= params;
   

//     // Connect to MongoDB
//     try {
//         await connectMongoDb();  // Ensure MongoDB connection is established
//     } catch (error) {
//         return NextResponse.json({ error: "Database connection failed" }, { status: 500 });
//     }

//     // Fetch the topic by its _id using findOne
//     try {
//         const topic = await Topic.findOne({ _id: id });  // Using findOne with the condition _id: id
//         if (!topic) {
//             return NextResponse.json({ error: "Topic not found" }, { status: 404 });
//         }
//         return NextResponse.json({ topic }, { status: 200 });  // Return the found topic
//     } catch (error) {
//         console.error("Error fetching topic:", error);  // Log the error for debugging
//         return NextResponse.json({ error: "Error retrieving topic" }, { status: 500 });
//     }
// }