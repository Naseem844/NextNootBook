"use client";
import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";
import { useTopics } from "@/context/TopicContext";

export default function TopicList() {
  const { topics } = useTopics();

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