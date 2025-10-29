import { useState } from "react"

export default function Skills(props) {
    const [forms, setForms] = useState([]);

    const addForm = () => {
        setForms([...forms, <SkillInfo key={crypto.randomUUID()} {...props}/>])
    }

    return (
        <>
            <h3>Skills</h3>
            <p>Show off what you excel at and what you can do.</p>
            <p>Confirm your previous experience or work goals.</p>

            <h4>Basic Skill</h4>

            <div className="skill-info">
                {forms}
            </div>
            
            <button className="add-skill" onClick={addForm}>
                <p>Add a skill</p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>plus</title><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>
            </button>

            <button className="btn-others">
                <p>Continue to others</p> 
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>arrow-right-thin</title><path d="M14 16.94V12.94H5.08L5.05 10.93H14V6.94L19 11.94Z" /></svg>
            </button>

        </>
    )
}

function SkillInfo(props) {
    const removeField = (e) => {
        if(e.target.tagName === 'path') {
            e.target.parentElement.parentElement.remove();
        }
        else {
            e.target.parentElement.remove();
        }
    }

    return (
        <div className="skill-field">
            <label htmlFor="skillName" id={crypto.randomUUID()}>
                <input type="text" name="skillName" onChange={(e) => props.setSkills(e.target.value)}/>
            </label>
            <svg onClick={removeField} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>close-thick</title><path d="M20 6.91L17.09 4L12 9.09L6.91 4L4 6.91L9.09 12L4 17.09L6.91 20L12 14.91L17.09 20L20 17.09L14.91 12L20 6.91Z" /></svg>
        </div>
    )
}