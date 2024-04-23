import Image from "next/image";
import veniceMap from "@/app/resources/VeniceMap.png";
import {HomePageLink} from "@/app/components/homepage/HomePageLink";
import React from "react";

export function HomePageLanding() {
    return (<div className={"relative mb-10"}>
            <Image className={"absolute -z-10 my-80 sm:my-20 w-full"} placeholder={"blur"} src={veniceMap}
                   alt={"map of venice"}></Image>
            <div
                className={"sm:mt-64 lg:mt-80 text-white grid xl:grid-cols-2 gap-0 bg-no-repeat mx-5 lg:mx-20 gap-y-10 lg:gap-y-20"}>
                <div className={"grid place-content-end"}>
                    <div className={"text-2xl sm:text-3xl font-bold"}>
                        <p className={"my-10"}>
                            Starting from 1988, we have been studying solutions to preserve and improve life in the city of
                            Venice.
                        </p>
                        <HomePageLink href={"/program"}>
                            <h1 className={"text-base font-bold"}>Future WPI Students</h1>
                        </HomePageLink>
                    </div>
                </div>
                <div className={"collapse md:invisible"}/>
                <div className={"collapse md:invisible"}/>
                <div className={"flex-col md:flex-row flex"}>
                    <div className={"flex flex-col"}>
                        <div className={""}>
                            <p className={"my-5"}>
                                Every year since 1988, WPI students have carried out relevant projects in order to solve
                                issues and problems of the city of Venice with a scientific and technological approach.
                                In almost 5 decades of activity, the projects have covered a wide range of topics, from
                                conservation of cultural heritage to in-depth analysis of the hydrogeological data of
                                the lagoon. Many of these projects have inspired and started the creation of Venetian
                                start-ups.
                            </p>
                        </div>
                        <div className={"w-60"}>
                            <HomePageLink href={"/projects"}>
                                <h1 className={"text-base font-bold"}>See All</h1>
                            </HomePageLink>
                        </div>
                    </div>
                    <div className={"my-5 text-4xl font-bold mr-5  basis-2/12"}>
                        <div className={"grid grid-cols-2 lg:justify-items-center mb-2"}>
                            <div className={"col-span-2 flex-row flex"}>
                                <div className={"mx-2 place-items-center grid"}>
                                    <div className={"h-0 w-36 border border-white"}></div>
                                </div>
                                <h1 className={""}>
                                    STUDENTS
                                </h1>

                            </div>
                        </div>
                        <h1 className={"ml-10 md:mr-28"}>
                            PROJECTS
                        </h1>
                    </div>
                </div>
                <div className={"flex-col md:flex-row flex"}>
                    <div className={"my-5 text-4xl font-bold mr-5  basis-2/12"}>
                        <div className={"grid grid-cols-2 lg:justify-items-center mb-2"}>
                            <div className={"col-span-2 flex-row flex"}>
                                <h1 className={""}>
                                    TOOLS AND
                                </h1>
                                <div className={"mx-2 place-items-center grid"}>
                                    <div className={"h-0 w-36 border border-white"}></div>
                                </div>
                            </div>
                        </div>
                        <h1 className={"ml-10 md:mr-28"}>
                            APPLICATIONS
                        </h1>
                    </div>
                    <div className={"flex flex-col"}>
                        <div className={""}>
                            <p className={"my-5"}>
                                Over the years we have implemented several projects, tools and applications based on the data collected through the work of the students.

                                Some of these aim to become real start-ups with the goal of creating work in the city and providing useful tools to its inhabitants
                            </p>
                        </div>
                        <div className={"w-60"}>
                            <HomePageLink href={"/applications"}>
                                <h1 className={"text-base font-bold"}>See All</h1>
                            </HomePageLink>
                        </div>
                    </div>
                </div>
                <div className={"collapse md:invisible"}/>
                <div className={"collapse md:invisible"}/>
                <div className={"flex-col md:flex-row flex"}>
                    <div className={"flex flex-col"}>
                        <div className={""}>
                            <p className={"my-5"}>
                                We have always tried to give back to the city and to people the knowledge gathered during the years of activity by publishing articles and collaborating in scientific publications.
                            </p>
                        </div>
                        <div className={"w-60"}>
                            <HomePageLink href={"/publications"}>
                                <h1 className={"text-base font-bold"}>See All</h1>
                            </HomePageLink>
                        </div>
                    </div>
                    <div className={"my-5 text-4xl font-bold flex-row basis-2/12"}>
                        <div className={"flex flex-row lg:justify-items-center mb-2"}>
                            <div className={"col-span-2 flex-row flex"}>
                                <div className={"mx-2 place-items-center grid"}>
                                    <div className={"h-0 w-36 border border-white"}></div>
                                </div>
                                <h1 className={""}>
                                    PUBLICATIONS
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"flex-col md:flex-row flex"}>
                    <div className={"my-5 text-4xl font-bold mr-5  basis-2/12"}>
                        <div className={"grid grid-cols-2 lg:justify-items-center mb-2"}>
                            <div className={"col-span-2 flex-row flex"}>
                                <h1 className={""}>
                                    OPEN
                                </h1>
                                <div className={"mx-2 place-items-center grid"}>
                                    <div className={"h-0 w-36 border border-white"}></div>
                                </div>
                            </div>
                        </div>
                        <h1 className={"ml-20 md:mr-28"}>
                            DATA
                        </h1>
                    </div>
                    <div className={"flex flex-col"}>
                        <div className={""}>
                            <p className={"my-5"}>
                                Years of activity have allowed us to collect a considerable amount of data concerning
                                the city.
                                This data is the basis for the operation of many services useful to the community, and
                                are used daily by applications and predictive models. We are proud of our Open approach,
                                giving access to our data in order to support and enhance the quality of life in the
                                city.
                            </p>
                        </div>
                        <div className={"w-60"}>
                            <HomePageLink href={"/opendata"}>
                                <h1 className={"text-base font-bold"}>See All</h1>
                            </HomePageLink>
                        </div>
                    </div>
                </div>
                <div className={"collapse md:invisible"}/>
                <div className={"collapse md:invisible"}/>
                <div className={"flex-col md:flex-row flex"}>
                    <div className={"flex flex-col"}>
                        <div className={""}>
                            <p className={"my-5"}>
                                We believe that our work through the years, by supporting local institutions and activities, has significantly contributed to improving the living conditions of the City.
                            </p>
                        </div>
                        <div className={"w-60"}>
                            <HomePageLink href={"/impacts"}>
                                <h1 className={"text-base font-bold"}>See All</h1>
                            </HomePageLink>
                        </div>
                    </div>
                    <div className={"my-5 text-4xl font-bold flex-row basis-2/12"}>
                        <div className={"flex flex-row lg:justify-items-center mb-2"}>
                            <div className={"col-span-2 flex-row flex"}>
                                <div className={"mx-2 place-items-center grid"}>
                                    <div className={"h-0 w-36 border border-white"}></div>
                                </div>
                                <h1 className={""}>
                                    IMPACTS
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}