import Link from "next/link";
import Image from "next/image";
import {HomePageLink} from "@/app/components/homepage/HomePageLink";

export function ApplicationSection() {
    let applicationsToolsColors: string[] = ["#000000", "#000000", "#000000"];
    let applicationsToolsCaptions = ["Dashboard", "Bridges story map", "Wifi hotspots"];
    let applicationsToolsPictures = ["https://s3.amazonaws.com/hive-engine/applications/imgs/000/000/061/original/61.png?1536744567", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Ponte_delle_Tette_%28Venice%29.jpg/1200px-Ponte_delle_Tette_%28Venice%29.jpg", "https://s3.amazonaws.com/hive-engine/applications/imgs/000/000/060/original/60.png?1536744062"];
    let applicationsToolsLinks = ["http://dashboard.cityknowledge.net/#/venice", "https://storymaps.arcgis.com/stories/0e9aea9fc6c54b0eb9df8a5d80a37130", "http://wifi.veniceprojectcenter.org/"];
    //TODO modify slide show to have it display only 1 at a time
    return <div className={"mx-2 my-10 grid xl:grid-cols-3"}>
        <div className={"flex flex-col my-5"}>
            <div className={"text-white text-5xl font-bold flex flex-col"}>
                <h1 className={""}>APPLICATIONS</h1>
                <h1 className={"ml-20 my-5 xl:ml-56"}>& TOOLS</h1>
            </div>
            <div className={""}>
                <p className={"text-white"}>Thanks to the knowledge collected over the years, we have produced a wide range
                    of applications and tools, ranging from data visualization tools to tourist flow management models.</p>
            </div>
            <div className={"grid justify-items-center"}>
                <HomePageLink href={"/applications"}>
                    <h1 className={"text-white text-base font-bold"}>See All</h1>
                </HomePageLink>
            </div>
        </div>
        <div className={"sampleTools col-span-2 grid grid-cols-2"}>
            {applicationsToolsColors.map((backgroundColor, index) => (
                <div className="sampleTool mx-2"
                     key={index}
                     style={{backgroundColor}}>
                    <button>
                        <figure className={"picContainer"}>
                            <Link href={applicationsToolsLinks[index]} target={"_blank"}>
                                <Image src={applicationsToolsPictures[index]} width={"500"} height={"500"}
                                       alt={"iqp image"} className={"applicationToolPic"}/>
                            </Link>
                            <figcaption className="applicationToolTitle">{applicationsToolsCaptions[index]}</figcaption>
                        </figure>
                    </button>
                </div>
            ))}
        </div>
    </div>
}