import { useState } from "react";

export default function ExperienceInput() {
    const [forms, setForms] = useState([]);

    const addForm = () => {
        setForms([...forms, <JobInfo key={crypto.randomUUID()} />])
    }
    

    return (
        <div className="experience">
            <h3>Work experience</h3>
            <p>Complete your work experience from the newest to</p>
            <p>the oldest. Remember that the recruiter will devote</p>
            <p>a few seconds to your CV, so fill in the job</p>
            <p>description as briefly as possible. Ideally in points.</p>

            <div className="btn-container">
                {forms}

                <button className="add-position" onClick={addForm}>
                    <p>Add a position</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>plus</title><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>
                </button>

                <button className="btn-education">
                    <p>Continue to education</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>arrow-right-thin</title><path d="M14 16.94V12.94H5.08L5.05 10.93H14V6.94L19 11.94Z" /></svg>
                </button>
            </div>           
        </div>
    )
}

function JobInfo() {
    const [fieldsHide, setFieldsHide] = useState(false);
    
    const formFields = [
        {name: "Position", id: crypto.randomUUID()},
        {name: "Company", id: crypto.randomUUID()},
        {name: "Locality", id: crypto.randomUUID()}
    ]

    const addFields = (e) => {
        setFieldsHide(!fieldsHide);
        console.log(e.target);
        !fieldsHide ? (
            (e.target.tagName.toLowerCase() === 'p' || e.target.tagName.toLowerCase() === 'svg') ? e.target.parentNode.parentNode.classList.add('hide')
            : (e.target.tagName.toLowerCase() === 'path') ? e.target.parentNode.parentNode.parentNode.classList.add('hide')
            : e.target.parentNode.classList.add('hide')
        ) : e.target.parentNode.classList.remove('hide');
    }

    const removeForm = (e) => {
        e.target.parentElement.parentElement.parentElement.remove();
    }

    return (
        <div className="job-info">
            <button onClick={addFields}>
                <p>Company, Position</p>

                {fieldsHide ? (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>plus</title><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>
                ): (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>close</title><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg>
                )}
            </button>
            <div className={fieldsHide ? "form-fields hidden" : "form-fields"}>
                {formFields.map(field => (
                    <label htmlFor={field.name} key={field.id}>
                        <p>
                            {field.name} {' '}
                            <span>*</span>
                        </p>
                        <input type="text" name={field.name} id={field.name} />
                    </label>
                ))}
                <label htmlFor="pos-desc" key={crypto.randomUUID()}>
                    Position description 
                    <textarea name="pos-desc" id="pos-desc"></textarea>
                </label>

                <div className="company-arrival">
                    <label htmlFor="month-arr" key={crypto.randomUUID()}>
                        Month of Arrival
                        <input type="text" name="month-arr" id="month-arr"/>
                    </label>
                    <label htmlFor="year-arr" key={crypto.randomUUID()}>
                        Year of entry
                        <input type="number" name="year-arr" id="year-arr" />
                    </label>
                </div>

                <div className="still-working">
                    <span></span> <p>I'm still working here</p>
                </div>

                <div className="company-left">
                    <label htmlFor="month-end" key={crypto.randomUUID()}>
                        End Month
                        <input type="text" name="month-end" id="month-end" />
                    </label>
                    <label htmlFor="year-end" key={crypto.randomUUID()}>
                        Year of termination
                        <input type="number" name="year-end" id="year-end" />
                    </label>
                </div>

                <label htmlFor="reason-term" key={crypto.randomUUID()}>
                    Reason for termination
                    <textarea name="reason-term" id="reason-term"></textarea>
                </label>

                <button className="remove-position" onClick={removeForm}>
                    <p>Remove this position</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>close</title><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg>
                </button>
            </div>
        </div>
    )
}