import { useState } from "react"

export default function Skills() {
    const [forms, setForms] = useState([]);

    const addForm = () => {
        setForms([...forms, <SkillInfo key={crypto.randomUUID()} />])
    }
    return (
        <div className="skills">
            <h3>Skills</h3>
            <p>Show off what you excel at and what you can do.</p>
            <p>Confirm your previous experience or work goals.</p>

            <h4>Basic Skill</h4>

            <button className="add-skill" onClick={addForm}>
                Add a skill
                {/* <img src="" alt="" /> */}
            </button>

            <div className="skill-info">
                {forms}
            </div>

            <button className="btn-education">
                Continue to others 
                {/* <img src="" alt="" /> */}
            </button>

        </div>
    )
}

function SkillInfo() {
    return (
        <div className="form-fields">
            <label htmlFor="skillName" id={crypto.randomUUID()}>
                <input type="text" name="skillName" />
            </label>
        </div>
    )
}