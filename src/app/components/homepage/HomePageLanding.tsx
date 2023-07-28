import Image from "next/image";
import veniceMap from "@/app/resources/VeniceMap.png";
import {HomePageLink} from "@/app/components/homepage/HomePageLink";
import React from "react";

export function HomePageLanding() {
    return(
        <div className={"relative mb-10"}>
            <Image className={"absolute -z-10 my-80 sm:my-20 lg:mx-10"} placeholder={"blur"} src={veniceMap} alt={"map of venice"}></Image>
            <div className={"sm:mt-64 lg:mt-80 text-white grid xl:grid-cols-2 gap-0 bg-no-repeat mx-5 lg:mx-20 gap-y-10 lg:gap-y-20"}>
                <div className={"grid place-content-end"}>
                    <div className={"text-2xl sm:text-3xl font-bold"}>
                        <p className={"my-10"}>
                            For 30 years we have been studying solutions to preserve and improve life in the city of Venice.
                        </p>
                        <HomePageLink href={"/program"}>
                            <h1 className={"text-base font-bold"}>Future wpi Students</h1>
                        </HomePageLink>
                    </div>
                </div>
                <div className={"collapse md:invisible"}/>
                <div className={"collapse md:invisible"}/>
                <div className = {"flex-col md:flex-row flex"}>
                    <div className = {"my-5 text-4xl font-bold mr-5  basis-2/12"}>
                        <div className={"grid grid-cols-2 lg:justify-items-center mb-2"}>
                            <div className={"col-span-2 flex-row flex"}>
                                <h1 className={""}>
                                    OPEN
                                </h1>
                                <div className={"mx-2 place-items-center grid"}>
                                    <div className={"h-0 w-48 border border-white"} ></div>
                                </div>
                            </div>
                        </div>
                        <h1 className={"ml-20 md:mr-32"}>
                            DATA
                        </h1>
                    </div>
                    <div className={"flex flex-col"}>
                        <div className={""}>
                            <p className = {"my-5"}>
                                Years of activity have allowed us to collect a considerable amount of data concerning the city.
                                This data is the basis for the operation of many services useful to the community, and are used daily by applications and predictive models. We are proud of our Open approach, giving access to our data in order to support and enhance the quality of life in the city.
                            </p>
                        </div>
                        <div className={"w-60"}>
                            <HomePageLink href={"/opendata"}>
                                <h1 className={"text-base font-bold"}>See All</h1>
                            </HomePageLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}