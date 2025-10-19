import { useState } from "react";
import PersonalDataInput from "./personalData";
import ExperienceInput from "./experience";
import Education from "./education";
import Skills from "./skills";
import Others from "./others";

export default function SideBarButtons() {
    const [activeSection, setActiveSection] = useState('');

    const buttonNames = [
        {name: "Personal data", id: crypto.randomUUID(), url: "src/assets/images/icons-buttons/personal-data-button.svg"},
        {name: "Experience", id: crypto.randomUUID(), url: "src/assets/images/icons-buttons/experience-button.svg"},
        {name: "Education", id: crypto.randomUUID(), url: "src/assets/images/icons-buttons/education-button.svg"},
        {name: "Skills", id: crypto.randomUUID(), url: "src/assets/images/icons-buttons/skills-button.svg"},
        {name: "Other", id: crypto.randomUUID(), url: "src/assets/images/icons-buttons/others-button.svg"},
    ]

    function handleClick(button) {
        setActiveSection(button)
    }

    function renderActiveSection() {
        if(activeSection === "Personal data" ) {
            document.querySelector('.edit-container > .personalData')?.remove();
            return <PersonalDataInput />
        }
        else if(activeSection === "Experience") {
            document.querySelector('.edit-container > .personalData')?.remove();
            return <ExperienceInput />
        }
        else if(activeSection === "Education") {
            document.querySelector('.edit-container > .personalData')?.remove();
            return <Education />
        }
        else if(activeSection === "Skills") {
            document.querySelector('.edit-container > .personalData')?.remove();
            return <Skills />
        }
        else if(activeSection === "Other") {
            document.querySelector('.edit-container > .personalData')?.remove();
            return <Others />
        }
    }
    return (
        <>
            <div className="sideBarButtons">
                <p>CV data</p>
                <ul>
                    {buttonNames.map((button) => (
                        <li key={button.id}>
                            <button onClick={() => handleClick(button.name)}>
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