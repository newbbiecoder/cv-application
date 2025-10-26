import { useState } from "react";
import PersonalDataInput from "./personalData";
import ExperienceInput from "./experience";
import Education from "./education";
import Skills from "./skills";
import Others from "./others";

export default function SideBarButtons(props) {
    const [activeSection, setActiveSection] = useState('Personal data');

    const buttonNames = [
        {name: "Personal data", id: crypto.randomUUID(), url: "src/assets/images/icons-buttons/personal-data-button.svg"},
        {name: "Experience", id: crypto.randomUUID(), url: "src/assets/images/icons-buttons/experience-button.svg"},
        {name: "Education", id: crypto.randomUUID(), url: "src/assets/images/icons-buttons/education-button.svg"},
        {name: "Skills", id: crypto.randomUUID(), url: "src/assets/images/icons-buttons/skills-button.svg"},
        {name: "Other", id: crypto.randomUUID(), url: "src/assets/images/icons-buttons/others-button.svg"},
    ]

    function renderActiveSection() {
        if(activeSection === "Personal data" ) return <PersonalDataInput  
            userName={props.userName} setUserName={props.setUserName}
            surName={props.surName} setSurName={props.setSurName}
            mail={props.mail} setMail={props.setMail}
            phoneNumber={props.phoneNumber} setPhoneNumber={props.setPhoneNumber}
            residence={props.residence} setResidence={props.setResidence}
            website={props.website} setWebsite={props.setWebsite}
            aboutMe={props.aboutMe} setAboutMe={props.setAboutMe}
        />;
        else if(activeSection === "Experience") return <ExperienceInput />;
        else if(activeSection === "Education") return <Education />;
        else if(activeSection === "Skills") return <Skills />;
        else if(activeSection === "Other") return <Others />;
    }
    return (
        <>
            <div className="sideBarButtons">
                <p>CV data</p>
                <ul>
                    {buttonNames.map((button) => (
                        <li key={button.id}>
                            <button onClick={() => setActiveSection(button.name)}>
                                <img src={button.url} alt={button.name} />
                                <p>{button.name}</p>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="activeSection">{renderActiveSection()}</div>
        </>
    )
}