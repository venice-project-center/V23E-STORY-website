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

    const categoryNames = (project.tags ?? [])
        .map((tag) => tag.name?.trim())
        .filter((name): name is string => !!name);
    const categoriesText = categoryNames.length > 0 ? `Categories: ${categoryNames.join(", ")}` : "";
    const hasYear = project.year != null && project.year !== 0;

    let reducedProjectDescription = project.description.split(".")[0];
    const categoryTags = [hasYear ? project.year.toString() : "", categoriesText]
        .filter(Boolean)
        .join(" | ");
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
                            {categoryTags && (
                                <div style={{flexGrow: "6"}}>
                                    <h1 className={""} style={{textAlign: "right"}}>
                                        {categoryTags}
                                    </h1>
                                </div>
                            )}

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
