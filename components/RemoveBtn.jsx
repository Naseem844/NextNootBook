"use client"
import {HiTrash } from 'react-icons/hi';
import {useRouter} from 'next/navigation';

export default function RemoveBtn({id}){
    const router = useRouter();
    const removeTopic = async()=>{
        const comfirmed = confirm("Are you sure?");
        if(comfirmed){
                const res=    await fetch(`http://localhost:3000/api/topics?id=${id}`,{
                method:"DELETE",
            });

            if(res.ok){
                router.refresh();
            }

        }
        


    }

    return <button onClick={removeTopic} className=' text-red-500'>
        <HiTrash size={24} />
    </button>
}