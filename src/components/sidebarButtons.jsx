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
        return (
            <>
                <div className="personalData" style={{display: activeSection === "Personal data" ? "block" : "none"}}>
                    <PersonalDataInput  
                        userName={props.userName} setUserName={props.setUserName}
                        surName={props.surName} setSurName={props.setSurName}
                        mail={props.mail} setMail={props.setMail}
                        phoneNumber={props.phoneNumber} setPhoneNumber={props.setPhoneNumber}
                        residence={props.residence} setResidence={props.setResidence}
                        website={props.website} setWebsite={props.setWebsite}
                        aboutMe={props.aboutMe} setAboutMe={props.setAboutMe}
                    />
                </div>

                <div className="experience" style={{display: activeSection === "Experience" ? "block" : "none"}}>
                    <ExperienceInput 
                        experiences={props.experiences} 
                        setExperiences={props.setExperiences}
                    />
                </div>

                <div className="education" style={{display: activeSection === "Education" ? "block" : "none"}}> 
                    <Education 
                        education={props.education} 
                        setEducation={props.setEducation}
                    />
                </div>

                <div className="skills" style={{display: activeSection === "Skills" ? "block" : "none"}}> 
                    <Skills 
                        skills={props.skills} setSkills={props.setSkills}
                    />
                </div>
                
                <div className="others" style={{display: activeSection === "Other" ? "block" : "none"}}>
                    <Others 
                        languages={props.languages} setLanguages={props.setLanguages}
                        interests={props.interests} setInterests={props.setInterests}
                        certificateText={props.certificateText} setCertificateText={props.setCertificateText}
                        certificateLink={props.certificateLink} setCertificateLink={props.setCertificateLink}
                    />
                </div>
            </>
        )
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