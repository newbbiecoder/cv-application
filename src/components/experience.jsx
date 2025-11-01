import { useState, useMemo } from "react";

export default function ExperienceInput({ experiences, setExperiences, setActiveSection }) {
    const addExperience = () => {
        const newExperience = {
            id: crypto.randomUUID(),
            company: "",
            position: "",
            locality: "",
            positionDesc: "",
            monthArr: "",
            yearArr: "",
            monthEnd: "",
            yearEnd: "",
            reasonTerm: "",
        };
        setExperiences([...experiences, newExperience]);
    };

  const updateExperience = (id, field, value) => {
    setExperiences(prev =>
      prev.map(exp => exp.id === id ? { ...exp, [field]: value } : exp)
    );
  };

  const removeExperience = (id) => {
    setExperiences(prev => prev.filter(exp => exp.id !== id));
  };

    return (
        <>
            <h3>Work experience</h3>
            <p>Complete your work experience from the newest to</p>
            <p>the oldest. Remember that the recruiter will devote</p>
            <p>a few seconds to your CV, so fill in the job</p>
            <p>description as briefly as possible. Ideally in points.</p>

            <div className="btn-container">
                <div className="jobs">
                    {experiences.map(exp => (
                        <JobInfo
                            key={exp.id}
                            experience={exp}
                            updateExperience={updateExperience}
                            removeExperience={removeExperience}
                        />
                    ))}
                </div>
                

                <button className="add-position" onClick={addExperience}>
                    <p>Add a position</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>plus</title><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>
                </button>

                <button className="btn-education" onClick={() => setActiveSection("Education")}>
                    <p>Continue to education</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>arrow-right-thin</title><path d="M14 16.94V12.94H5.08L5.05 10.93H14V6.94L19 11.94Z" /></svg>
                </button>
            </div>           
        </>
    )
}

function JobInfo({ experience, updateExperience, removeExperience }) {
    const [fieldsHide, setFieldsHide] = useState(false);

    const handleChange = (e) => {
        updateExperience(experience.id, e.target.name, e.target.value);
    };
    
    const formFields = useMemo(() => [
        { label: "Position", name: "position", id: crypto.randomUUID() },
        { label: "Company", name: "company", id: crypto.randomUUID() },
        { label: "Locality", name: "locality", id: crypto.randomUUID() }
    ], []);

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
                            {field.name.charAt(0).toUpperCase() + field.name.slice(1)} {' '}
                            <span>*</span>
                        </p>
                        <input type="text" name={field.name} id={field.name} 
                        value={experience[field.name]} onChange={handleChange}
                        />
                    </label>
                ))}
                
                <label htmlFor="pos-desc">
                    Position description 
                    <textarea name="positionDesc" id="positionDesc" value={experience.positionDesc} onChange={handleChange}></textarea>
                </label>
                
                <div className="company-arrival">
                    <label htmlFor="month-arr">
                        Month of Arrival
                        <input type="text" name="monthArr" id="monthArr" value={experience.monthArr} onChange={handleChange}/>
                    </label>
                    <label htmlFor="year-arr">
                        Year of entry
                        <input type="number" name="yearArr" id="yearArr" value={experience.yearArr} onChange={handleChange}/>
                    </label>
                </div>
                

                <div className="still-working">
                    <span onClick={addTick}></span> <p>I'm still working here</p>
                </div>

                
                <div className="company-left">
                    <label htmlFor="month-end">
                        End Month
                        <input type="text" name="monthEnd" id="monthEnd" value={experience.monthEnd} onChange={handleChange}/>
                    </label>
                    <label htmlFor="year-end">
                        Year of termination
                        <input type="number" name="yearEnd" id="yearEnd" value={experience.yearEnd} onChange={handleChange}/>
                    </label>
                </div>
                               
                <label htmlFor="reason-term">
                    Reason for termination
                    <textarea name="reasonTerm" id="reasonTerm" value={experience.reasonTerm} onChange={handleChange}></textarea>
                </label>
                
                <button className="remove-position" onClick={() => removeExperience(experience.id)}>
                    <p>Remove this position</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>close</title><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg>
                </button>
            </div>
        </div>
    )
}