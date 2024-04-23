import {Dataurl, IqpTeam, Project} from "@prisma/client";
import {FullProject} from "@/app/components/ProjectContent/FullProject";

export async function CommitProject(project:FullProject):Promise<string> {
    console.log(project.dataurls)
    let createResponse = await fetch(window.location.origin+"/api/projects",{
        method:"POST",
        body:JSON.stringify(project),
    });
    let projectData:FullProject = await createResponse.json();
    console.log(projectData);
    return projectData.id
}