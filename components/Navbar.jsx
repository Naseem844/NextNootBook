import Link from "next/link";
import { FaBook } from 'react-icons/fa';

export default function Navgar(){
    return (
        <nav className="flex justify-between items-center
         bg-slate-500 px-8 py-3">
            <Link className=" text-white font-bold flex gap-3" href={"/"}>Note Book <FaBook size={25}/></Link>
            <Link className=" bg-white p-2 rounded-sm hover:bg-blue-600 transition-all duration-200" href={"/addTopic"}>Add Topic</Link>
        </nav>
    )
}