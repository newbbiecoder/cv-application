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

            <button className="add-position" onClick={addForm}>
                Add a position
                {/* <img src="" alt="" /> */}
            </button>

            {forms}

            <button className="btn-education">
                Continue to education 
                {/* <img src="" alt="" /> */}
            </button>
        </div>
    )
}

function JobInfo() {
    const formFields = [
        {name: "Position*", id: crypto.randomUUID()},
        {name: "Company*", id: crypto.randomUUID()},
        {name: "Locality*", id: crypto.randomUUID()}
    ]

    return (
        <div className="job-info">
            <button>
                Company, Position
                {/* <img src="" alt="" /> */}
            </button>
            <div className="form-fields">
                {formFields.map(field => (
                    <label htmlFor={field.name} key={field.id}>
                        {field.name} {' '}
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
            </div>
        </div>
    )
}