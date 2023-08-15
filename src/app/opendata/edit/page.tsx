"use client"
import {EditableProject} from "@/app/components/ProjectContent/editingCode/EditableProject";
import {Dataurl, IqpTeam, Project} from "@prisma/client";
import {FullProject} from "@/app/components/ProjectContent/FullProject";

export default function Page() {
    let project: FullProject = {} as FullProject;
    project.id = "";
    project.description = "click on the data elements to edit them"
    project.year = new Date().getFullYear();
    project.type = "DATA";
    project.dataurls = []
    return(
        <EditableProject project={project as FullProject}></EditableProject>
    )
}