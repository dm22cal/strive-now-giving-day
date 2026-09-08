import { getStore } from "@netlify/blobs";

export default async (request) => {
    const store = getStore("giving-day");

    const savedCount = await store.get("donate-clicks");
    let count = savedCount ? Number(savedCount) : 0;

    // Return the current count
    if (request .method === "GET") {
        return new Response(
            JSON.stringify({ count: count }),
            {
                status: 200,
                headers: {
                    "Content-Type": "application/json",
                },
            }
        )
    }

    // Add one when a Donate button is clicked
    if (request.method === "POST") {
        count++;

        await store.set("donate-clicks", String(count));

        return new Response(
            JSON.stringify({ count: count }),
            {
                status: 200,
                headers: {
                    "Content-Type": "application/json",
                },
            },
        );
    }

    // Reject any other request type
    return new Response(
        JSON.stringify({ error: "Method not allowed:"}),
        {
            status: 405,
            headers: {
                "Content-Type": "application/json",
            },
        }
    );

};