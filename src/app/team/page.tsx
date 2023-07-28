import './team.css';
import {TeamMember} from "@/app/components/random/TeamMember";
import fabio from "@/app/team/fabio.jpg"
import Tomaso from "@/app/team/tomaso.jpg"
import sarah from "@/app/team/sarah.png"
import ane from "@/app/team/ane.jpg"
import nicola from "@/app/team/nicola.jpg"
import andrea from "@/app/team/andrea.jpg"
import michel from "@/app/team/michele.jpg"
import giacomo from "@/app/team/giacomo.jpg"
import nick from "@/app/team/Nick.jpg"



export default function Page() {

    let teamMembers = ["Prof. Fabio Carrera",
        "Tomaso Minelli",
        "Sarah Puccio",
        "Ane Pina",
        "Nicola Musolino",
        "Andrea Scarpa",
        "Michele Montanari",
        "Giacomo Giugie",
        "Nick Leslie"
    ];
    let teamMemberPics = [
        fabio,
        Tomaso,
        sarah,
        ane,
        nicola,
        andrea,
        michel,
        giacomo,
        nick
    ];
    let teamMemberRoles = ["Founder & Director",
        "CTO",
        "Administration & Facilities",
        "Director Assistant",
        "Full Stack Developer",
        "Full Stack Developer",
        "Backend Developer",
        "Intern",
        "Student Developer"
    ];

    return (
        <div className = {"teamPage flex flex-row"}>
            <div className = {"contact"}>
                <h1>TEAM</h1>
                <h2>Contacts</h2>
                <p>carrera@wpi.edu</p>
                <a href="https://app.daaab.it/location-h3">
                    <p>
                        H3 (Ex-Herion)
                        Campo SS. Cosma e Damiano, 624-625
                        Giudecca
                        30133 – Venice - Italy
                    </p>
                </a>
            </div>
            <div className = {"members"}>
                {teamMembers.map((teamMember,index) => (
                    <TeamMember sourceImage={teamMemberPics[index]} memberName={teamMember} memberRole={teamMemberRoles[index]} key = {index}></TeamMember>
                ))}
            </div>
        </div>
    );
}


