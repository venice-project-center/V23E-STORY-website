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
import {PublicationSection} from "@/app/components/homepage/publications/PublicationSection";
import {ApplicationSection} from "@/app/components/homepage/ApplicationSection";
import {ImpactsSection} from "@/app/components/homepage/impacts/ImpactsSection";
import {PublicationCard} from "@/app/components/homepage/publications/PublicationCard";

export default function Home() {
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
