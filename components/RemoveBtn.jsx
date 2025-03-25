"use client";
import { HiTrash } from 'react-icons/hi';
import { useRouter } from 'next/navigation';
import { useTopics } from '@/context/TopicContext';

export default function RemoveBtn({ id }) {
  const router = useRouter();
  const { fetchTopics } = useTopics();

  const removeTopic = async () => {
    const confirmed = confirm("Are you sure?");
    if (confirmed) {

      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/topics?id=${id}`, {
          method: "DELETE",
        });

        if (res.ok) {
          fetchTopics(); // Refresh the topics list
        } else {
          throw new Error("Failed to delete topic");
        }
      } catch (error) {
        console.error("Error deleting topic:", error);
      }
    }
  };

  return (
    <button onClick={removeTopic} className="text-red-500">
      <HiTrash size={24} />
    </button>
  );
}