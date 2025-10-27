import { useState } from "react";

export default function Education(props) {
    const [forms, setForms] = useState([]);

    const removeForm = (id) => {
        setForms(forms.filter((form) => form.id !== id));
    };

    return (
        <div className="education">
            <h3>Education</h3>
            <p>Your education data can help recruiters determine</p>
            <p>if you're a good fit for the position.</p>
            
            <div className="educations">
                {forms}
            </div>

            <button className="add-education" onClick={() => setForms([...forms, <EducationInfo key={crypto.randomUUID()} removeForm={removeForm} {...props}/>])}>
                <p>Add Education</p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>plus</title><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>
            </button>

            <button className="btn-skills">
                <p>Continue to skills</p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>arrow-right-thin</title><path d="M14 16.94V12.94H5.08L5.05 10.93H14V6.94L19 11.94Z" /></svg>
            </button>
        </div>
    )
}

function EducationInfo(props) {
    const [fieldsHide, setFieldsHide] = useState(false);

    const handleNameChange = (e, fieldName) => {
        if(fieldName === "school-name") props.setSchoolName(e.target.value);
        else if(fieldName === "field-study") props.setSchoolRole(e.target.value);
        else if(fieldName === "elem-sch" || fieldName === "sec-voc-sch" 
                || fieldName === "high-sch" || fieldName === "high-voc-sch" 
                || fieldName === "college") props.setSchoolType(e.target.value);
        else if(fieldName === "school-start") props.setSchoolStartYear(e.target.value);
        else if(fieldName === "school-end") props.setSchoolEndYear(e.target.value);
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
                    <input type="text" name="school-name" id="school-name" onChange={(e) => handleNameChange(e, "school-name")}/>
                </label>
                <label htmlFor="field-study" id="field-study">
                    Field of study
                    <input type="text" name="field-study" id="field-study" onChange={(e) => handleNameChange(e, "field-study")}/>
                </label>
                <div className="school-type">
                    <div>
                        <input type="radio" name="educ" id="elem-sch" value="Elementary school" onChange={(e) => handleNameChange(e, "elem-sch")}/>
                        <label htmlFor="elem-sch" id="elem-sch">Elementary school</label>
                    </div>
                    
                    <div>
                        <input type="radio" name="educ" id="sec-voc-sch" value="Secondary vocational school" onChange={(e) => handleNameChange(e, "sec-voc-sch")}/>
                        <label htmlFor="sec-voc-sch" id="elem-sch">Secondary vocational school</label>
                    </div>
                    
                    <div>
                        <input type="radio" name="educ" id="high-sch" value="High school" onChange={(e) => handleNameChange(e, "high-sch")}/>
                        <label htmlFor="high-sch" id="high-sch">High school</label>
                    </div>
                    
                    <div>
                        <input type="radio" name="educ" id="high-voc-sch" value="Higher Vocational School" onChange={(e) => handleNameChange(e, "high-voc-sch")}/>
                        <label htmlFor="high-voc-sch" id="high-sch">Higher Vocational School</label>
                    </div>
                    
                    <div>
                        <input type="radio" name="educ" id="college" value="College" onChange={(e) => handleNameChange(e, "college")}/>
                        <label htmlFor="college">College</label>
                    </div> 
                </div>

                <label htmlFor="school-start" id="school-start">
                    <p>
                        Year of start of study
                        <span>*</span>
                    </p>
                    <input type="number" name="school-start" id="school-start" onChange={(e) => handleNameChange(e, "school-start")}/>
                </label>

                <div className="still-studying">
                    <span onClick={addTick}></span> <p>I'm still studying here</p>
                </div>

                <label htmlFor="school-end">
                    <p>
                        Year of Graduation
                        <span>*</span>
                    </p>
                    <input type="number" name="school-end" id="school-end" onChange={(e) => handleNameChange(e, "school-end")}/>
                </label>

                <button className="remove-education" onClick={props.removeForm}>
                    <p>Remove this education</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>close</title><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg>
                </button>
            </div>
        </div>
    )
}