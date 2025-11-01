import { useState } from "react";

export default function Education({education, setEducation, setActiveSection}) {
    const addEducation = () => {
        const newEducation = {
            id: crypto.randomUUID(),
            schoolName: "",
            schoolRole: "",
            schoolType: "",
            schoolStartYear: "",
            schoolEndYear: ""
        }
        setEducation([...education, newEducation]);
    }

    const updateEducation = (id, field, value) => {
        setEducation(prev => 
            prev.map(edu => edu.id === id ? { ...edu, [field]: value } : edu)
        )
    }

    const removeEducation = (id) => {
        setEducation(prev => prev.filter(edu => edu.id !== id))
    }

    return (
        <>
            <h3>Education</h3>
            <p>Your education data can help recruiters determine</p>
            <p>if you're a good fit for the position.</p>
            
            <div className="educations">
                {education.map(edu => (
                    <EducationInfo 
                        key={edu.id}
                        education={edu}
                        updateEducation={updateEducation}
                        removeEducation={removeEducation}
                    />
                ))}
            </div>

            <button className="add-education" onClick={addEducation}>
                <p>Add Education</p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>plus</title><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>
            </button>

            <button className="btn-skills" onClick={() => setActiveSection("Skills")}>
                <p>Continue to skills</p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>arrow-right-thin</title><path d="M14 16.94V12.94H5.08L5.05 10.93H14V6.94L19 11.94Z" /></svg>
            </button>
        </>
    )
}

function EducationInfo({ education, updateEducation, removeEducation }) {
    const [fieldsHide, setFieldsHide] = useState(false);

    const handleChange = (e) => {
        updateEducation(education.id, e.target.name, e.target.value)
    }

    const addFields = (e) => {
        setFieldsHide(!fieldsHide);
        console.log(e.target);
        !fieldsHide ? (
            (e.target.tagName.toLowerCase() === 'p' || e.target.tagName.toLowerCase() === 'svg') ? e.target.parentNode.parentNode.classList.add('hide')
            : (e.target.tagName.toLowerCase() === 'path') ? e.target.parentNode.parentNode.parentNode.classList.add('hide')
            : e.target.parentNode.classList.add('hide')
            ) : (e.target.tagName.toLowerCase() === 'p' || e.target.tagName.toLowerCase() === 'svg') ? e.target.parentNode.parentNode.classList.remove('hide')
            : (e.target.tagName.toLowerCase() === 'path') ? e.target.parentNode.parentNode.parentNode.classList.remove('hide')
            : e.target.parentNode.classList.remove('hide');
    }

    const addTick = (e) => {
        if(!e.target.classList.contains('tick')) {
            e.target.classList.add('tick')
            e.target.textContent = '✓';
            e.target.parentNode.nextElementSibling.classList.add('studying-hidden');
        }else {
            e.target.classList.remove('tick');
            e.target.textContent = '';
            e.target.parentNode.nextElementSibling.classList.remove('studying-hidden');
        }   
    }


    return (
        <div className="education-info">
            <button onClick={addFields}>
                <p>New education</p>

                {fieldsHide ? (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>plus</title><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>
                ): (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>close</title><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg>
                )}
            </button>
            <div className={fieldsHide ? "form-fields hidden" : "form-fields"}>
                <label htmlFor="school-name" id="school-name">
                    <p>
                        Name of institution
                        <span>*</span>
                    </p>
                    <input type="text" name="schoolName" id="school-name" value={education.schoolName} onChange={handleChange}/>
                </label>
                <label htmlFor="field-study" id="field-study">
                    Field of study
                    <input type="text" name="schoolRole" id="field-study" value={education.schoolRole} onChange={handleChange}/>
                </label>
                <div className="school-type">
                    <div>
                        <input type="radio" name="schoolType" id="elem-sch" value="Elementary school" checked={education.schoolType === "Elementary school"} onChange={handleChange} />
                        <label htmlFor="elem-sch" id="elem-sch">Elementary school</label>
                    </div>
                    
                    <div>
                        <input type="radio" name="schoolType" id="sec-voc-sch" value="Secondary vocational school" checked={education.schoolType === "Secondary vocational school"} onChange={handleChange}/>
                        <label htmlFor="sec-voc-sch" id="elem-sch">Secondary vocational school</label>
                    </div>
                    
                    <div>
                        <input type="radio" name="schoolType" id="high-sch" value="High school" checked={education.schoolType === "High school"} onChange={handleChange}/>
                        <label htmlFor="high-sch" id="high-sch">High school</label>
                    </div>
                    
                    <div>
                        <input type="radio" name="schoolType" id="high-voc-sch" value="Higher Vocational School" checked={education.schoolType === "Higher Vocational School"} onChange={handleChange}/>
                        <label htmlFor="high-voc-sch" id="high-sch">Higher Vocational School</label>
                    </div>
                    
                    <div>
                        <input type="radio" name="schoolType" id="college" value="College" checked={education.schoolType === "College"} onChange={handleChange}/>
                        <label htmlFor="college">College</label>
                    </div> 
                </div>

                <label htmlFor="school-start" id="school-start">
                    <p>
                        Year of start of study
                        <span>*</span>
                    </p>
                    <input type="number" name="schoolStartYear" id="school-start" value={education.schoolStartYear} onChange={(e) => {if (/^\d{0,4}$/.test(e.target.value)) handleChange(e)}} />
                </label>

                <div className="still-studying">
                    <span onClick={addTick}></span> <p>I'm still studying here</p>
                </div>

                <label htmlFor="school-end">
                    <p>
                        Year of Graduation
                        <span>*</span>
                    </p>
                    <input type="number" name="schoolEndYear" id="school-end" value={education.schoolEndYear} onChange={(e) => {if (/^\d{0,4}$/.test(e.target.value)) handleChange(e)}}/>
                </label>

                <button className="remove-education" onClick={() => removeEducation(education.id)}>
                    <p>Remove this education</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>close</title><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg>
                </button>
            </div>
        </div>
    )
}