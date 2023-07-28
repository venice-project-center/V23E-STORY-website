import Link from "next/link";
import Image from "next/image";
import veniceMap from "@/app/resources/VeniceMap.png";

export function ImpactsSection() {

    const impactsPictures = ["https://s3.amazonaws.com/hive-engine/applications/imgs/000/000/061/original/61.png?1536744567","https://s3.amazonaws.com/hive-engine/publications/imgs/000/000/067/medium/p10.png?1536675289","https://s3.amazonaws.com/hive-engine/publications/imgs/000/000/062/medium/open-uri20180830-1548-15efokn?1535634876","https://s3.amazonaws.com/hive-engine/applications/imgs/000/000/060/original/60.png?1536744062","https://s3.amazonaws.com/hive-engine/theses/imgs/000/001/483/medium/open-uri20180817-3363-1dw7lu2?1534507130",veniceMap];
    const impactsCaptions = ["","","","","",""];
    const impactsLinks = ["http://dashboard.cityknowledge.net/#/venice","/","/","/","/","http://dashboard.cityknowledge.net/#/venice"];

    return(
        <div className = {"impacts flex flex-col"}>
            <h1 className = {"impactsTitle"}><p className = {"text-white"}>Impacts</p></h1>
            <div className={"impactsDescription"}>
                <p className = {"text-white"}>We believe that our work through the years, by supporting local institutions and activities, has significantly contributed to improving the living conditions in the city.</p>
            </div>
            <div className = {"sixImpacts flex flex-row"}>
                <div className = {"leftImpacts flex flex-row"}>
                    <div className = {"bigImpact"}>
                        <Link href={impactsLinks[0]} target = {"_blank"}>
                            <div className={"picContainer"}>
                                <Image src={impactsPictures[0]} width={"500"} height={"500"} max-width={"100%"} alt={"iqp image"} className = {"impactPic"}></Image>
                                <div className="impactTitle">{impactsCaptions[0]}</div>
                            </div></Link>
                    </div>
                    <div className = {"limpacts flex flex-col"}>
                        <Link href = {impactsLinks[1]}>
                            <div className={"picContainer"}>
                                <Image src={impactsPictures[1]} width={"500"} height={"500"} max-width={"100%"} alt={"iqp image"} className = {"impactPic"}></Image>
                                <div className="impactTitle">{impactsCaptions[1]}</div>
                            </div></Link>
                        <Link href = {impactsLinks[2]}>
                            <div className={"picContainer"}>
                                <Image src={impactsPictures[2]} width={"500"} height={"500"} max-width={"100%"} alt={"iqp image"} className = {"impactPic"}></Image>
                                <div className="impactTitle">{impactsCaptions[2]}</div>
                            </div></Link>
                    </div>
                </div>
                <div className = {"rightImpacts flex flex-row"}>
                    <div className = {"rimpacts flex flex-col"}>
                        <Link href = {impactsLinks[3]}>
                            <div className={"picContainer"}>
                                <Image src={impactsPictures[2]} width={"500"} height={"500"} max-width={"100%"} alt={"iqp image"} className = {"impactPic"}></Image>
                                <div className="impactTitle">{impactsCaptions[3]}</div>
                            </div></Link>
                        <Link href = {impactsLinks[4]}>
                            <div className={"picContainer"}>
                                <Image src={impactsPictures[1]} width={"500"} height={"500"} max-width={"100%"} alt={"iqp image"} className = {"impactPic"}></Image>
                                <div className="impactTitle">{impactsCaptions[4]}</div>
                            </div></Link>
                    </div>
                    <div className = {"bigImpact"}>
                        <Link href = {impactsLinks[5]} target = {"_blank"}>
                            <div className={"picContainer"}>
                                <Image src={impactsPictures[0]} width={"500"} height={"500"} max-width={"100%"} alt={"iqp image"} className = {"impactPic"}></Image>
                                <div className="impactTitle">{impactsCaptions[5]}</div>
                            </div></Link>
                    </div>
                </div>
            </div>
            <button className = {"seeAll"}><Link href={"/impacts"}>See All {"-->"}</Link></button>
        </div>
    )
}