"use client"

import Image from 'next/image'
import {Navlist} from "@/app/components/nav/Navlist";
import VeniceMapThing from "@/app/resources/VeniceMap.png";
import fabioPic from "@/app/resources/IMG-1346.png";
import fabio1 from "@/app/resources/Fabio1.jpg";
import fabio2 from "@/app/resources/Fabio2.jpg";
import fabio3 from "@/app/resources/Fabio3.webp";
import fabio4 from "@/app/resources/Fabio4.jpg";
import fabio5 from "@/app/resources/Fabio5.png";
import {openDataPicURLToggle} from "@/app/edit/openDataPicURLToggle";


import Link from "next/link";

import React, {useEffect, useState} from 'react';
import './homeEdit.css';
import '../components/random/AutoSlideshow.css';
import {menuToggle} from "@/app/components/nav/menuToggle";
import {request} from "https";
import {AutoSlideshow} from "@/app/components/random/AutoSlideshow";
import {ProjectRequestResponse} from "@/app/api/projects/datatypes/ProjectRequestResponse";

export default function Home() {

    const [vpcStatementEditable,setVpcStatementEditable] = useState<any | undefined>("false");
    const [openDataParagraphEditable,setOpenDataParagraphEditable] = useState<any | undefined>("false");

    let vpcStatement = "For 30 years we have been studying solutions to preserve and improve life in the city of Venice.";
    let openDataParagraph = "Yeeeeeeeeeeeeeears of activity have allowed us to collect a considerable amount of data concerning the city.\n" +
        "                        This data is the basis for the operation of many services useful to the community, and are used daily by applications and predictive models. We are proud of our Open approach, giving access to our data in order to support and enhance the quality of life in the city.";
    let openDataPic = "https://s3.amazonaws.com/hive-engine/publications/imgs/000/000/067/medium/p10.png?1536675289";

    const studentProjectColors = ["#000000","#000000","#000000"];
    const studentProjectCaptions = ["Preserving Venetian Bell Towers Through Virtual Experiences Documenting the Bells and Bell Towers de Ultra","A Greener Venice: An Exploration and Mapping of Green Spaces in the Venice Islands","Vacation Rentals and Residential Housing in Venice"];
    const studentProjectPictures = ["https://s3.amazonaws.com/hive-engine/theses/imgs/000/001/483/medium/open-uri20180817-3363-1dw7lu2?1534507130","https://s3.amazonaws.com/hive-engine/theses/imgs/000/001/479/medium/open-uri20180817-3363-1es27lv?1534507111","https://s3.amazonaws.com/hive-engine/theses/imgs/000/001/472/medium/open-uri20180817-3363-fawu1h?1534507071"];

    let publicationColors = ["#00FFFF", "#FF00FF", "#FFFF00"];
    let publicationCaptions = ["Yoooooo looooook at these bridges broooooo","21 can you do something for me","Je suis un pomme"];
    let publicationPictures = ["https://s3.amazonaws.com/hive-engine/publications/imgs/000/000/067/medium/p10.png?1536675289","https://s3.amazonaws.com/hive-engine/publications/imgs/000/000/072/medium/open-uri20180830-1548-iarn2f?1535634888","https://s3.amazonaws.com/hive-engine/publications/imgs/000/000/062/medium/open-uri20180830-1548-15efokn?1535634876"];
    let publicationLinks = ["https://veniceprojectcenter.org/projects/7de04672-c6f4-48b1-a2b6-1c78fe561c88","https://veniceprojectcenter.org/projects/64705bd4-043e-42eb-b794-59ea6eef8732","https://veniceprojectcenter.org/projects/f5e17928-bdc7-4389-9e38-68796409a9e4"];
    let publicationPicWidth = 700;
    let publicationPicHeight = 500;
    let publicationSlideDelay = 3600;

    const publicationID = "first";

    const [publicationData,setPublicationData] = useState<any | undefined>(undefined);

    let applicationsToolsColors:string[] = ["#000000","#000000","#000000"];
    let applicationsToolsCaptions = ["Dashboard","Bridges story map","Wifi hotspots"];
    let applicationsToolsPictures = ["https://s3.amazonaws.com/hive-engine/applications/imgs/000/000/061/original/61.png?1536744567","https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Ponte_delle_Tette_%28Venice%29.jpg/1200px-Ponte_delle_Tette_%28Venice%29.jpg","https://s3.amazonaws.com/hive-engine/applications/imgs/000/000/060/original/60.png?1536744062"];
    let applicationsToolsLinks = ["http://dashboard.cityknowledge.net/#/venice","https://storymaps.arcgis.com/stories/0e9aea9fc6c54b0eb9df8a5d80a37130","http://wifi.veniceprojectcenter.org/"];

    const impactsPictures = ["https://s3.amazonaws.com/hive-engine/applications/imgs/000/000/061/original/61.png?1536744567","https://s3.amazonaws.com/hive-engine/publications/imgs/000/000/067/medium/p10.png?1536675289","https://s3.amazonaws.com/hive-engine/publications/imgs/000/000/062/medium/open-uri20180830-1548-15efokn?1535634876","https://s3.amazonaws.com/hive-engine/applications/imgs/000/000/060/original/60.png?1536744062","https://s3.amazonaws.com/hive-engine/theses/imgs/000/001/483/medium/open-uri20180817-3363-1dw7lu2?1534507130",VeniceMapThing];
    const impactsCaptions = ["","","","","",""];

    useEffect(() => {
        const getPublicationData = async() => {
            let response = await fetch(`/api/random/AutoSlideshow/?id=${publicationID}`,{
                method: "GET",
            });

            console.log(response);
            const publicationResponse = await response.json();
            setPublicationData(publicationResponse);
            console.log(publicationResponse.backgroundColors);
            console.log(publicationResponse.slideDelay);
        }

        getPublicationData();
        return () => {

        }
    },[]);

    if(publicationData != undefined) {
        publicationColors = publicationData.backgroundColors;
        publicationCaptions = publicationData.pictureCaptions;
        publicationPictures = publicationData.pictures;
        publicationSlideDelay = publicationData.slideDelay;
        publicationLinks = publicationData.links;
        publicationPicWidth = publicationData.picWidth;
        publicationPicHeight = publicationData.picHeight;
    }
    // @ts-ignore


    // @ts-ignore
    const enterSlideshow = async (event) => {
        console.log("Enter Slideshow method entered");
        event.preventDefault();
        if(event.target == null) {
            console.log("target is null");
        } else {
            console.log("Creating Request");
            let request = {
                type:"enterSlideshow",
                backgroundColors:publicationColors,
                pictureCaptions:publicationCaptions,
                slideDelay: publicationSlideDelay,
                pictures: publicationPictures,
                links:publicationLinks,
                picWidth: publicationPicWidth,
                picHeight: publicationPicHeight
            };
            console.log("Request Created");

            let response = await fetch("/api/random/AutoSlideshow",{
                method: "POST",
                body: JSON.stringify(request)
            });
            console.log("method successfully fetched");
            let responseJSON = await response.json();
            console.log(responseJSON);

            console.log(responseJSON.response);
        }

    }

    // @ts-ignore
    const enterOpenDataSectionData = async (event) => {
        console.log("Enter Open Data data method entered");
        event.preventDefault();
        if (event.target == null) {
            console.log("target is null");
        } else {
            console.log("Creating Request");
            let request = {
                type: "enterOpenData",
                vpcStatement: vpcStatement,
                openDataParagraph: openDataParagraph,
                openDataPic: openDataPic
            };
            console.log("Request Created");

            let response = await fetch("/api/random/AutoSlideshow", {
                method: "POST",
                body: JSON.stringify(request)
            });
            console.log("method successfully fetched");
            let responseJSON = await response.json();
            console.log(responseJSON);

            console.log(responseJSON.response);
        }
    }

    return (
        <div className = {"homePage flex flex-col"}>
            <div className={"opendata"}>
                <div className = {"lefttt"}>
                    <Image src={openDataPic} width = {420} height = {420} alt={"iqp image"} className={"veniceMapHomepage"}></Image>
                    <div className = {"editOpenDataPic flex flex-row"}>
                        <button className={"bg-white my-1 mx-2"} type="button" onClick = {() => {{openDataPicURLToggle()}
                            console.log("In Editing mode");}}>Edit URL</button>
                        <button className={"bg-white my-1 mx-2"} type="button" onClick = {() => {{openDataPicURLToggle()}
                            console.log("Committed");}}>Commit</button>
                        <p className = {"openDataPicURL text-white"} suppressContentEditableWarning contentEditable={"true"}>{openDataPic}</p>
                    </div>
                    <div className = {"vpcStatement"}><p contentEditable={vpcStatementEditable} className = {"text-white"}>{vpcStatement}</p></div>
                    <div className = {"flex flex-row"}>
                        <button className={"bg-white my-1 mx-2"} type="button" onClick = {() => {setVpcStatementEditable("true");
                            console.log("In Editing mode");}}>Edit</button>
                        <button className={"bg-white my-1 mx-2"} type="button" onClick = {() => {setVpcStatementEditable("false");
                            console.log("Committed");}}>Commit</button>
                    </div>
                </div>
                <div className = {"rightt"}>
                    <div className = {"titleBox"}>
                        <button className = {"opendataTitle"}><Link href={"/"}>Back to Home</Link></button>
                    </div>
                    <div className = {"opendataParagraph"}><p contentEditable={openDataParagraphEditable} className = {"text-white"}>{openDataParagraph}</p></div>
                    <button className={"bg-white my-1"} type="button" onClick = {() => {setOpenDataParagraphEditable("true");
                                                                    console.log("In Editing mode");}}>Edit</button>
                    <button className={"bg-white my-1"} type="button" onClick = {() => {setOpenDataParagraphEditable("false");
                                                                    console.log("Committed");}}>Commit</button>
                </div>
            </div>
            <div className={"studentProjects"}>
                <h1 className={"sptitle"}><p className = {"text-white"}>Student Projects</p></h1>
                <div className={"studentProjectsDescription"}>
                    <p className = {"text-white"}>Every year since 1988, WPI students have carried out relevant projects in order to solve issues and problems of the city of Venice with a scientific and technological approach. In almost 5 decades of activity, the projects have covered a wide range of topics, from conservation of cultural heritage to in-depth analysis of the hydrogeological data of the lagoon. Many of these projects have inspired and started the creation of Venetian start-ups.</p>
                </div>
                <div className = {"sampleProjects"}>
                    {studentProjectColors.map((backgroundColor,index) => (
                        <div className = "sampleProject"
                             key = {index}
                             style = {{backgroundColor}}>
                            <figure className = {"picContainer"}>
                                <Image src={studentProjectPictures[index]} width={500} height = {"500"} alt={"iqp image"} className={"studentProjectPic"}></Image>
                                <figcaption className="studentProjectTitle">{studentProjectCaptions[index]}</figcaption>
                            </figure>
                        </div>
                    ))}
                </div>
                <button className = {"seeAll"}><Link href={"/projects"}>See All {"-->"} </Link></button>
            </div>
            <div className = {"publications"}>
                <h1 className={"ptitle"}><p className = {"text-white"} onClick={enterSlideshow}>Publications</p></h1>
                <AutoSlideshow backgroundColors={publicationColors} pictureCaptions={publicationCaptions} slideDelay={publicationSlideDelay} pictures={publicationPictures} links = {publicationLinks} picWidth={publicationPicWidth} picHeight={publicationPicHeight}/>
                <button className = {"seeAll"}><Link href={"/"}>See All {"-->"}</Link></button>
            </div>
            <div className = {"applicationsTools"}>
                <h1 className={"attitle"}><p className = {"text-white"}>Applications & Tools</p></h1>
                <div className={"applicationsToolsDescription"}>
                    <p className = {"text-white"}>Thanks to the knowledge collected over the years, we have produced a wide range of applications and tools, ranging from data visualization tools to tourist flow management models.</p>
                </div>
                <div className = {"sampleTools"}>
                    {applicationsToolsColors.map((backgroundColor,index) => (
                        <div className = "sampleTool"
                             key = {index}
                             style = {{backgroundColor}}>
                            <button>
                                <figure className = {"picContainer"}>
                                    <Link href={applicationsToolsLinks[index]} target={"_blank"}>
                                        <Image src={applicationsToolsPictures[index]} width={"500"} height = {"500"} alt={"iqp image"} className={"applicationToolPic"}></Image></Link>
                                    <figcaption className="applicationToolTitle">{applicationsToolsCaptions[index]}</figcaption>
                                </figure></button>
                        </div>
                    ))}
                </div>
                <button className = {"seeAll"}><Link href={"/"}>See All {"-->"}</Link></button>
            </div>
            <div className = {"impacts"}>
                <h1 className = {"impactsTitle"}><p className = {"text-white"}>Impacts</p></h1>
                <div className={"impactsDescription"}>
                    <p className = {"text-white"}>We believe that our work through the years, by supporting local institutions and activities, has significantly contributed to improving the living conditions in the city.</p>
                </div>
                <div className = {"sixImpacts flex flex-row"}>
                    <div className = {"leftImpacts flex flex-row"}>
                        <div className = {"bigImpact"}>
                            <div className={"picContainer"}>
                                <Image src={impactsPictures[0]} width={"500"} height={"500"} max-width={"100%"} alt={"iqp image"} className = {"impactPic"}></Image>
                                <div className="impactTitle">{impactsCaptions[0]}</div>
                            </div>
                        </div>
                        <div className = {"limpacts flex flex-col"}>
                            <div className={"picContainer"}>
                                <Image src={impactsPictures[1]} width={"500"} height={"500"} max-width={"100%"} alt={"iqp image"} className = {"impactPic"}></Image>
                                <div className="impactTitle">{impactsCaptions[1]}</div>
                            </div>
                            <div className={"picContainer"}>
                                <Image src={impactsPictures[2]} width={"500"} height={"500"} max-width={"100%"} alt={"iqp image"} className = {"impactPic"}></Image>
                                <div className="impactTitle">{impactsCaptions[2]}</div>
                            </div>
                        </div>
                    </div>
                    <div className = {"rightImpacts flex flex-row"}>
                        <div className = {"rimpacts flex flex-col"}>
                            <div className={"picContainer"}>
                                <Image src={impactsPictures[2]} width={"500"} height={"500"} max-width={"100%"} alt={"iqp image"} className = {"impactPic"}></Image>
                                <div className="impactTitle">{impactsCaptions[3]}</div>
                            </div>
                            <div className={"picContainer"}>
                                <Image src={impactsPictures[1]} width={"500"} height={"500"} max-width={"100%"} alt={"iqp image"} className = {"impactPic"}></Image>
                                <div className="impactTitle">{impactsCaptions[4]}</div>
                            </div>
                        </div>
                        <div className = {"bigImpact"}>
                            <div className={"picContainer"}>
                                <Image src={impactsPictures[0]} width={"500"} height={"500"} max-width={"100%"} alt={"iqp image"} className = {"impactPic"}></Image>
                                <div className="impactTitle">{impactsCaptions[5]}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className = {"seeAll"}><Link href={"/"}>See All {"-->"}</Link></button>
            </div>
        </div>
    )
}
