import { useState } from "react";

export default function Education() {
    const [forms, setForms] = useState([]);

    const addForm = () => {
        setForms([...forms, <EducationInfo key={crypto.randomUUID()} />])
    }

    return (
        <div className="education">
            <h3>Education</h3>
            <p>Your education data can help recruiters determine</p>
            <p>if you're a good fit for the position.</p>

            <button className="add-education" onClick={addForm}>
                Add Education
                {/* <img src="" alt="" /> */}
            </button>

            {forms}

            <button className="btn-skills">
                Continue to skills 
                {/* <img src="" alt="" /> */}
            </button>
        </div>
    )
}

function EducationInfo() {
    return (
        <div className="education-info">
            <button>
                New education
                {/* <img src="" alt="" /> */}
            </button>
            <div className="form-fields">
                <label htmlFor="school-name" id="school-name">
                    Name of institution*
                    <input type="text" name="school-name" id="school-name" />
                </label>
                <label htmlFor="field-study" id="field-study">
                    Field of study
                    <input type="text" name="field-study" id="field-study" />
                </label>
                <div className="school-type">
                    <div>
                        <input type="radio" name="educ" id="elem-sch" value="Elementary school"/>
                        <label htmlFor="elem-sch" id="elem-sch">Elementary school</label>
                    </div>
                    
                    <div>
                        <input type="radio" name="educ" id="sec-voc-sch" value="Secondary vocational school"/>
                        <label htmlFor="sec-voc-sch" id="elem-sch">Secondary vocational school</label>
                    </div>
                    
                    <div>
                        <input type="radio" name="educ" id="high-sch" value="High school"/>
                        <label htmlFor="high-sch" id="high-sch">High school</label>
                    </div>
                    
                    <div>
                        <input type="radio" name="educ" id="high-voc-sch" value="Higher Vocational School" />
                        <label htmlFor="high-voc-sch" id="high-sch">Higher Vocational School</label>
                    </div>
                    
                    <div>
                        <input type="radio" name="educ" id="college" value="College"/>
                        <label htmlFor="college">College</label>
                    </div> 
                </div>

                <label htmlFor="school-start" id="school-start">
                    Year of start of study*
                    <input type="number" name="school-start" id="school-start" />
                </label>

                <div className="still-studying">
                    <span></span> <p>I'm still studying here</p>
                </div>

                <label htmlFor="school-end">
                    Year of Graduation*
                    <input type="number" name="school-end" id="school-end" />
                </label>
            </div>
        </div>
    )
}