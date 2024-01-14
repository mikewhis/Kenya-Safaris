import { groq } from "next-sanity";

export async function getProjects() {
    const client = createClient({
        projectId: "9hbyp3l4",
        dataset: "production",
        apiVersion: "2024-01-14",
    });

    return client.fetch(
        groq`*[__type = "project"]{
            __id,
            __createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content
        }`
    )
    
}