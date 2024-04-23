"use client";
import {Navlist} from "@/app/components/nav/Navlist";
import {NavListSearch} from "@/app/components/nav/NavListSearch";
import React, {Suspense, useState} from "react";
import NavLoading from "@/app/components/nav/NavLoading";
import {FilterByTagMainPage} from "@/app/components/nav/FilterByTagMainPage";

export default function Page() {
    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const handleCheckboxChange = (checkedValues: string[]) => {
        setSelectedTags(checkedValues);
    };
    return(
        <div className={"flex-col xl:flex-row flex mx-10"}>
            <div className={"basis-2/6 back"}>
                <div className={""}>
                    <div className={"flex flex-col text-white mr-5"}>
                        <div className={""}>
                            <h1 className={"text-4xl font-bold mb-5"}>STUDENT PROJECTS</h1>
                        </div>
                        <div className={"static"}>
                            <p className={"my-4"}>
                                Every year since 1988, WPI students have carried out relevant projects in order to solve issues and problems of the city of Venice with a scientific and technological approach.
                            </p>
                            <p className={"my-4"}>
                                In almost 5 decades of activity, the projects have covered a wide range of topics, from conservation of cultural heritage to in-depth analysis of the hydrogeological data of the lagoon.
                            </p>
                            <p className={"my-4"}>
                                Many of these projects have inspired and started the creation of Venetian start-ups.
                            </p>
                        </div>
                        <FilterByTagMainPage onCheckboxChange={handleCheckboxChange}/>
                    </div>
                </div>
            </div>
            <div className={"w-fit basis-full"}>
                <NavListSearch type={"IQP"} tagsToFilter={selectedTags}></NavListSearch>
            </div>
        </div>
    );
}