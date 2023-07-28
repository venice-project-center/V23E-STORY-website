import Link from "next/link";
import Image from "next/image";
import React from "react";
import {newSudentProjectData, StudentProjectCard} from "@/app/components/homepage/StudentProjects/StudentProjectCard";
import {HomePageLink} from "@/app/components/homepage/HomePageLink";

export function StudentProjectsSection() {
    const studentProjects = [
        newSudentProjectData("#000000","Preserving Venetian Bell Towers Through Virtual Experiences Documenting the Bells and Bell Towers de Ultra","https://s3.amazonaws.com/hive-engine/theses/imgs/000/001/483/medium/open-uri20180817-3363-1dw7lu2?1534507130","/"),
        newSudentProjectData("#000000","A Greener Venice: An Exploration and Mapping of Green Spaces in the Venice Islands","https://s3.amazonaws.com/hive-engine/theses/imgs/000/001/479/medium/open-uri20180817-3363-1es27lv?1534507111","/"),
        newSudentProjectData("#000000","Vacation Rentals and Residential Housing in Venice","https://s3.amazonaws.com/hive-engine/theses/imgs/000/001/472/medium/open-uri20180817-3363-fawu1h?1534507071","/")
    ]
    return(
        <div className={"text-white"}>
            <div className={"flex flex-col  xl:flex-row md:mx-40 my-10 md:mr-60"}>
                <div className={"xl:ml-28"}>
                    <div className={"flex flex-row mb-2"}>
                        <h1 className={"text-4xl font-bold"}>
                            STUDENTS
                        </h1>
                        <div className={"grid place-items-center mx-2"}>
                            <div className={"h-0 w-36 md:w-48 border border-white"}></div>
                        </div>
                    </div>
                    <h1 className={"ml-20 text-4xl font-bold"}>
                        PROJECT
                    </h1>
                </div>
                <div className={"mx-5 studentProjectsDescription"}>
                    <p className={"flex shrink text-white my-5"}>
                        Every year since 1988, WPI students have carried out relevant projects in order to solve issues and problems of the city of Venice with a scientific and technological approach. In 30 years of activity, the projects have covered a wide range of topics, from conservation of cultural heritage to in-depth analysis of the hydrogeological data of the lagoon. Many of these projects have inspired and started the creation of Venetian start-ups.
                    </p>
                    <HomePageLink href={"/projects"}>
                        <h1 className={"text-base font-bold"}>See All</h1>
                    </HomePageLink>
                </div>
            </div>
            <div className = {"sampleProjects flex-col xl:flex-row flex"}>
                {studentProjects.map((project)=> {
                    // eslint-disable-next-line react/jsx-key
                    return <StudentProjectCard data={project}></StudentProjectCard>
                })}
            </div>
        </div>
    )
}