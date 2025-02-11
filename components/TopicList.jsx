

import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

// Fetch topics server-side
export async function getServerSideProps() {
  console.log("getServerSideProps() called")
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("failed to fetch data");
    }
     // Log API response
    return res.json();
    
    
  } catch (error) {
    console.log("Error loading topics", error);
    return { props: { topics: [] } };
  }
}

export default async function TopicList() {
  const topics = await getServerSideProps();
  //console.log("Topics data:", topics); // Debugging

  if (!Array.isArray(topics) || topics.length === 0) {
    return <p>No topics available.</p>;
  }

  return (
    <>
      {topics.map((t) => (
        <div
          key={t._id}
          className="px-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
        >
          <div>
            <h2 className="font-bold text-2xl">{t.title}</h2>
            <div>{t.description}</div>
          </div>
          <div className="flex gap-2">
            <RemoveBtn id={t._id} />
            <Link href={`/editTopic/${t._id}`}>
              <HiPencilAlt size={24} />
              
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
