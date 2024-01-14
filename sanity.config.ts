import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import project from "./sanity/schemas/project-schema";

const config = defineConfig({
    projectId: "9hbyp3l4",
    dataset: "production",
    title: "KENYA SAFARIS",
    apiVersion: "2024-01-14",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: { types: [project] }
})

export default config;