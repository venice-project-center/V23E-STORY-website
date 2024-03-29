import {Project} from "@prisma/client";
import Image from "next/image";
import Link from 'next/link'
import {reduceTextSection, wordListToString} from "@/helpers/stringHelpers";
import {FullProject} from "@/app/components/ProjectContent/FullProject";
import {margin} from "polished";
interface ProjectLinkProps {
    project: FullProject
}


export function ProjectWidget({project}: ProjectLinkProps) {
    let imgSrc = "";
    if(project.img != null) {
        imgSrc = project.img
    }

    let projectTags = "Categories: "
    if(project.tags != null) {
        for (let i = 0; i < project.tags.length; i++) {
            if (i < project.tags.length - 1) {
                projectTags += project.tags[i].name + ", "
            } else {
                projectTags += project.tags[i].name;
            }
        }
    }
    else{
        projectTags = "";
    }
    /*if(project.categories != null) {
            projectTags = "Categories: " + project.categories;
    }*/
    let reducedProjectDescription = project.description.split(".")[0];
    //reducedProjectDescription.push("[more]");
    // @ts-ignore
    let categoryTags = ""; // If year is not entered, we will have a value of 0 instead, and it's not aesthetically pleasing, so we create the year | tags here
    if (project.year != 0 && projectTags != ""){
        categoryTags = project.year.toString() + " | " + projectTags;
    }
    else if(project.year == 0 && projectTags != ""){ //sometimes we have no year but there are tags
        categoryTags = projectTags;
    }
    else if(project.year != 0 && projectTags == ""){ //sometimes we have no tags but there are year
        categoryTags = project.year.toString();
    }
    else if(categoryTags == "Categories: ") {  //and wouldn't you believe it but sometimes we've got no tags and no years! pathetic.
        categoryTags = ""
    }
    return(
        <Link className={"mx-2 my-4 md:m-4"} href={`${urlPathFromProject(project)}/${project.id}`}>
            <div className={"text-white flex flex-row"}>
                <Image className={"rounded-full aspect-square mx-5 w-[75px] h-[75px]"} src={imgSrc} height={75} width={75} alt={"iqp image"}></Image>
                <div>
                    <div className={"flex flex-row"}>
                        <div className={"flex"} style={{marginBottom: "1%"}}>
                            <div style={{flexGrow: "4"}}>
                                <h1 className={"font-bold"}>
                                    {project.title}
                                </h1>
                            </div>
                            </div>
                            <div style={{flexGrow: "6"}}>
                                <h1 className={""} style={{textAlign: "right"}}>
                                    {categoryTags}
                                </h1>
                            </div>

                        </div>
                        <h1 className={"basis-full shrink"} style={{textAlign: "justify"}}>
                            {reducedProjectDescription}
                        </h1>
                    </div>
                </div>
                {/*<div className={"flex flex-col"}>*/}
                {/*    {projectTags}*/}
                {/*</div>*/}
        </Link>
    )
}

export function urlPathFromProject(project:Project) {
    switch (project.type) {
        case "APP":
            return "/applications"
        case "PUBLICATION":
            return "/publications"
        case "DATA":
            return "/opendata"
        case "IQP":
            return "/projects"
        case "IMPACT":
            return "/impacts"
    }
}
