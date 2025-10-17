import { useState } from "react";
import PersonalDataInput from "./personalData";
import ExperienceInput from "./experience";

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
        // if(!document.querySelector('.edit-container').contains(document.querySelector('.personalData'))) return <PersonalDataInput />
        if(activeSection === "Personal data" ) {
            document.querySelector('.edit-container > .personalData')?.remove();
            return <PersonalDataInput />
        }
        else if(activeSection === "Experience") {
            document.querySelector('.edit-container > .personalData')?.remove();
            return <ExperienceInput />
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