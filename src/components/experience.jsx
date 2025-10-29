import { useState, useMemo } from "react";

export default function ExperienceInput(props) {
    const [forms, setForms] = useState([]);

    return (
        <>
            <h3>Work experience</h3>
            <p>Complete your work experience from the newest to</p>
            <p>the oldest. Remember that the recruiter will devote</p>
            <p>a few seconds to your CV, so fill in the job</p>
            <p>description as briefly as possible. Ideally in points.</p>

            <div className="btn-container">
                <div className="jobs">
                    {forms}
                </div>
                

                <button className="add-position" onClick={() => setForms([...forms, <JobInfo key={crypto.randomUUID()} {...props}/>])}>
                    <p>Add a position</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>plus</title><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>
                </button>

                <button className="btn-education">
                    <p>Continue to education</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>arrow-right-thin</title><path d="M14 16.94V12.94H5.08L5.05 10.93H14V6.94L19 11.94Z" /></svg>
                </button>
            </div>           
        </>
    )
}

function JobInfo(props) {
    const [fieldsHide, setFieldsHide] = useState(false);

    const handleNameChange = (e, fieldName) => {
        if(fieldName === "Company") props.setCompany(e.target.value);
        else if(fieldName === "Position") props.setPosition(e.target.value);
        else if(fieldName === "Locality") props.setLocality(e.target.value);
        else if(fieldName === "pos-desc") props.setPositionDesc(e.target.value);
        else if(fieldName === "month-arr") props.setMonthArr(e.target.value);
        else if(fieldName === "year-arr") props.setYearArr(e.target.value);
        else if(fieldName === "month-end") props.setMonthEnd(e.target.value);
        else if(fieldName === "year-end") props.setYearEnd(e.target.value);
        else if(fieldName === "reason-term") props.setReasonTerm(e.target.value);
    }
    
    const setValue = (valueFieldName) => {
        valueFieldName === "Company" ? props.company : "";
        valueFieldName === "Position" ? props.position : "";
        valueFieldName === "Locality" ? props.locality : "";
        valueFieldName === "pos-desc" ? props.positionDesc : "";
        valueFieldName === "month-arr" ? props.monthArr : "";
        valueFieldName === "year-arr" ? props.yearArr : "";
        valueFieldName === "month-end" ? props.monthEnd : "";
        valueFieldName === "year-end" ? props.yearEnd : "";
        valueFieldName === "reason-term" ? props.reasonTerm : "";
    }
    
    const formFields = useMemo(() => [
        {name: "Position", id: crypto.randomUUID()},
        {name: "Company", id: crypto.randomUUID()},
        {name: "Locality", id: crypto.randomUUID()}
    ],[]);

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

    const removeForm = (e) => {
        e.target.parentElement.parentElement.parentElement.remove();
    }

    const addTick = (e) => {
        if(!e.target.classList.contains('tick')) {
            e.target.classList.add('tick')
            e.target.textContent = '✓';
            e.target.parentNode.nextElementSibling.classList.add('working-hidden');
            e.target.parentNode.nextElementSibling.nextElementSibling.classList.add('working-hidden');
        }else {
            e.target.classList.remove('tick');
            e.target.textContent = '';
            e.target.parentNode.nextElementSibling.classList.remove('working-hidden');
            e.target.parentNode.nextElementSibling.nextElementSibling.classList.remove('working-hidden');
        }   
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
                        <input type="text" name={field.name} id={field.name} 
                        onChange={(e) => handleNameChange(e, field.name)}
                        value={setValue(field.name)}
                        />
                    </label>
                ))}
                <label htmlFor="pos-desc" key={crypto.randomUUID()}>
                    Position description 
                    <textarea name="pos-desc" id="pos-desc" onChange={(e) => handleNameChange(e, "pos-desc")} value={setValue("pos-desc")}></textarea>
                </label>

                <div className="company-arrival">
                    <label htmlFor="month-arr" key={crypto.randomUUID()}>
                        Month of Arrival
                        <input type="text" name="month-arr" id="month-arr" onChange={(e) => handleNameChange(e, "month-arr")} value={setValue("month-arr")}/>
                    </label>
                    <label htmlFor="year-arr" key={crypto.randomUUID()}>
                        Year of entry
                        <input type="number" name="year-arr" id="year-arr" onChange={(e) => handleNameChange(e, "year-arr")}
                        value={setValue("year-arr")}/>
                    </label>
                </div>

                <div className="still-working">
                    <span onClick={addTick}></span> <p>I'm still working here</p>
                </div>

                <div className="company-left">
                    <label htmlFor="month-end" key={crypto.randomUUID()}>
                        End Month
                        <input type="text" name="month-end" id="month-end" onChange={(e) => handleNameChange(e, "month-end")}
                        value={setValue("month-end")}/>
                    </label>
                    <label htmlFor="year-end" key={crypto.randomUUID()}>
                        Year of termination
                        <input type="number" name="year-end" id="year-end" onChange={(e) => handleNameChange(e, "year-end")}
                        value={setValue("year-end")}/>
                    </label>
                </div>

                <label htmlFor="reason-term" key={crypto.randomUUID()}>
                    Reason for termination
                    <textarea name="reason-term" id="reason-term" onChange={(e) => handleNameChange(e, "reason-term")} value={setValue("reason-term")}></textarea>
                </label>

                <button className="remove-position" onClick={removeForm}>
                    <p>Remove this position</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>close</title><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg>
                </button>
            </div>
        </div>
    )
}