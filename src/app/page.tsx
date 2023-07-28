import Image from 'next/image'
import {Navlist} from "@/app/components/nav/Navlist";
import veniceMap from "@/app/resources/VeniceMap.png";


import Link from "next/link";

import './homePage.css';
import './components/random/AutoSlideshow.css';
import {menuToggle} from "@/app/components/nav/menuToggle";
import {request} from "https";
import {AutoSlideshow} from "@/app/components/random/AutoSlideshow";
import {ProjectRequestResponse} from "@/app/api/projects/datatypes/ProjectRequestResponse";
import {HomePageLink} from "@/app/components/homepage/HomePageLink";
import {HomePageLanding} from "@/app/components/homepage/HomePageLanding";
import {StudentProjectsSection} from "@/app/components/homepage/StudentProjects/StudentProjectsSection";
import {PublicationSection} from "@/app/components/homepage/PublicationSection";
import {ApplicationSection} from "@/app/components/homepage/ApplicationSection";
import {ImpactsSection} from "@/app/components/homepage/ImpactsSection";

export default function Home() {


    // useEffect(() => {
    //     const getPublicationData = async() => {
    //         let response = await fetch(`/api/random/AutoSlideshow/?id=${publicationID}`,{
    //             method: "GET",
    //         });
    //
    //         console.log(response);
    //         const publicationResponse = await response.json();
    //         if(publicationResponse != undefined) {
    //             setPublicationData(publicationResponse);
    //             console.log(publicationResponse.backgroundColors);
    //             console.log(publicationResponse.slideDelay);
    //         }
    //     }
    //
    //     getPublicationData();
    //     return () => {
    //
    //     }
    // },[]);

    // @ts-ignore


    // @ts-ignore
    // const enterSlideshow = async (event) => {
    //     console.log("Enter Slideshow method entered");
    //     event.preventDefault();
    //     if(event.target == null) {
    //         console.log("target is null");
    //     } else {
    //         console.log("Creating Request");
    //         let request = {
    //             type:"enterSlideshow",
    //             backgroundColors:publicationColors,
    //             pictureCaptions:publicationCaptions,
    //             slideDelay: publicationSlideDelay,
    //             pictures: publicationPictures,
    //             links:publicationLinks,
    //             picWidth: publicationPicWidth,
    //             picHeight: publicationPicHeight
    //         };
    //         console.log("Request Created");
    //
    //         let response = await fetch("/api/random/AutoSlideshow",{
    //             method: "POST",
    //             body: JSON.stringify(request)
    //         });
    //         console.log("method successfully fetched");
    //         let responseJSON = await response.json();
    //         console.log(responseJSON);
    //
    //         console.log(responseJSON.response);
    //     }
    //
    // }

    return (
        <div className = {"homePage flex flex-col"}>
            <HomePageLanding></HomePageLanding>
            <StudentProjectsSection></StudentProjectsSection>
            <PublicationSection></PublicationSection>
            <ApplicationSection></ApplicationSection>
            <ImpactsSection></ImpactsSection>
        </div>

    );
}
