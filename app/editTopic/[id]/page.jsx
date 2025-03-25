import EditTopicForm from "@/components/EditTopicForm";



const getTopicByid = async (id) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/topics/${id}`, {
            cache: "no-store",
        });

        console.log("API response status:", res.status);
        if (!res.ok) {
            console.error("API responded with error:", res.statusText);
            throw new Error("Failed to fetch topic!");
        }

        const data = await res.json();
        console.log("Fetched topic data:", data); // Log the data
        return data;
    } catch (error) {
        console.error("Error in getTopicById:", error.message);
        return null; // Return null if an error occurs
    }
};



export default async function EditTopic({params}){
    console.log("editTopic is called mean button clicked on pencil logo");
    const { id } = await params;

    const topicData= await getTopicByid(id);
    console.log("received data after hit the api,...",topicData);
    if (!topicData) {
        return <p>Topic not found or an error occurred!</p>; // Graceful fallback
    }
    const {title,description} = topicData.topic;
    console.log("data after destructruing", title,description);
    return <EditTopicForm id={id} title={title} description={description} />
}   