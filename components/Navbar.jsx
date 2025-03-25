import Link from "next/link";
import { FaBook } from "react-icons/fa";
import Button from "@mui/material/Button";

export default function Navgar() {
  return (
    <nav
      className="flex justify-between items-center
         bg-slate-500 px-8 py-3"
    >
      <Link className=" text-white font-bold flex gap-3" href={"/"}>
        Note Book <FaBook size={25} />
      </Link>
      <Link href={"/addTopic"}>
        <Button variant="contained" color="primary">
          Add Topic
        </Button>
      </Link>
    </nav>
  );
}
