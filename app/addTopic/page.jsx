"use client";


import { useState } from "react";
import { useRouter } from "next/navigation";


export default function AddTopic(){
    const [title, settitle] = useState("");
    const [description, setdescription] = useState("");

    const router = useRouter();


    const handleSubmit = async(e)=>{
        e.preventDefault();
        if(!title||!description){
            alert("Title and Description is required!");
            return;
        }

        try {
            const res = await fetch("http://localhost:3000/api/topics",{
                method:"POST",
                headers:{"content-type":"application/json",},
                body: JSON.stringify({title,description}),
                });
                if(res.ok){
                    router.push('/');
                }
                else{
                    throw new Error("failed to create new topic");
                }
            
        } catch (error) {
            console.log("error in post data",error)
        }
    }

    return <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
        onChange={(e)=> settitle(e.target.value)}
        value={title}
         className="border border-slate-400 px-8 py-2" type="text" placeholder="Topic Title"></input>
        <input
        onChange={(e)=> setdescription(e.target.value)}
        value={description}
         className="border border-slate-400 px-8 py-2" type="text" placeholder="Topic Description"></input>
        <button className=" bg-green-700 font-bold
         text-white py-3 px-6 w-fit"> Add Topic</button>
    </form>
} 