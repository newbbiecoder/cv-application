export default function Skills({skill, setSkill, setActiveSection}) {
    const addSkill = () => {
        const newSkill = {
            id: crypto.randomUUID(),
            skillName: ""
        }
        setSkill([...skill, newSkill]);
    }

    const updateSkill = (id, field, value) => {
        setSkill(prev => 
            prev.map(ski => ski.id === id ? { ...ski, [field]: value } : ski)
        )
    }

    const removeSkill = (id) => {
        setSkill(prev => prev.filter(ski => ski.id !== id))
    }

    return (
        <>
            <h3>Skills</h3>
            <p>Show off what you excel at and what you can do.</p>
            <p>Confirm your previous experience or work goals.</p>

            <h4>Basic Skill</h4>

            <div className="skill-info">
                {skill.map(ski => (
                    <SkillInfo 
                        key={ski.id}
                        skill={ski}
                        updateSkill={updateSkill}
                        removeSkill={removeSkill}
                    />
                ))}
            </div>
            
            <button className="add-skill" onClick={addSkill}>
                <p>Add a skill</p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>plus</title><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>
            </button>

            <button className="btn-others" onClick={() => setActiveSection("Other")}>
                <p>Continue to others</p> 
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>arrow-right-thin</title><path d="M14 16.94V12.94H5.08L5.05 10.93H14V6.94L19 11.94Z" /></svg>
            </button>

        </>
    )
}

function SkillInfo({ skill, updateSkill, removeSkill }) {
    const handleChange = (e) => {
        updateSkill(skill.id, e.target.name, e.target.value)
    }

    return (
        <div className="skill-field">
            <label htmlFor="skillName" id={crypto.randomUUID()}>
                <input type="text" name="skillName" value={skill.skillName} onChange={(e) => {if (/^.{0,18}$/.test(e.target.value)) handleChange(e)}}/>
            </label>
            <svg onClick={() => removeSkill(skill.id)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>close-thick</title><path d="M20 6.91L17.09 4L12 9.09L6.91 4L4 6.91L9.09 12L4 17.09L6.91 20L12 14.91L17.09 20L20 17.09L14.91 12L20 6.91Z" /></svg>
        </div>
    )
}