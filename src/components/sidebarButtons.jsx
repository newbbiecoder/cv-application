import { useState } from "react";
import PersonalDataInput from "./personalData";
import ExperienceInput from "./experience";
import Education from "./education";
import Skills from "./skills";

export default function SideBarButtons() {
    const [activeSection, setActiveSection] = useState('');

    const buttonNames = [
        {name: "Personal data", id: crypto.randomUUID()},
        {name: "Experience", id: crypto.randomUUID()},
        {name: "Education", id: crypto.randomUUID()},
        {name: "Skills", id: crypto.randomUUID()},
        {name: "Other", id: crypto.randomUUID()},
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
    }
    return (
        <>
            <div className="sideBarButtons">
                <p>CV data</p>
                <ul>
                    {buttonNames.map((button) => (
                        <li key={button.id}>
                            <button onClick={() => handleClick(button.name)}>{button.name}</button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="activeSection">{renderActiveSection()}</div>
        </>
    )
}