"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useTopics } from "@/context/TopicContext";


export default function EditTopicForm({id,title,description}){
    
    const [newTitle, setnewTitle] = useState(title);
    const [newDescription, setnewDescription] = useState(description);
    const router = useRouter();
    const {fetchTopics} = useTopics();

    console.log("after hitting the edit button we are on edit form with data",newTitle,newDescription);

    const handleSubmit= async(e)=>{
        console.log("handleSubmit called mean update button clicked");
        e.preventDefault();
        try {
            const res = await fetch(`http://localhost:3000/api/topics/${id}`,{
                method:"PUT",
                headers:{"content-type":"application/json"},
                body:JSON.stringify({newTitle,newDescription}),
            });
            console.log("this is response",res)
            if(!res.ok){
                throw new Error("failed to update topic")
            }
            fetchTopics(); // Refresh the topics list
            router.push("/");

        } catch (error) {
            console.log(error);
        }
    }


    return <form className="flex flex-col gap-3">
    <input
    onChange={(e)=>setnewTitle(e.target.value)}
    value={newTitle}
     className="border border-slate-400 px-8 py-2" type="text" placeholder="Topic Title"></input>
    <input
    onChange={(e)=>setnewDescription(e.target.value)}
    value={newDescription}
     className="border border-slate-400 px-8 py-2" type="text" placeholder="Topic Description"></input>
    <button
        onClick={handleSubmit} 
         className=" bg-green-700 font-bold
     text-white py-3 px-6 w-fit"> Update Topic</button>
</form>
}