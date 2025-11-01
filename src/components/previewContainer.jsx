import { useState, useEffect } from "react"

export default function PreviewContainer(props) {
    return (
        <div className="resume">
            <div className="left-side">
                <LeftSide
                    //PersonalInput
                    aboutMe={props.aboutMe}
                    selectedFile={props.selectedFile}

                    //Skills
                    skill={props.skill}

                    //Others
                    language={props.language}
                    interest={props.interest}
                />
            </div>
            <div className="right-side">
                <RightSide 
                    //PersonalInput
                    userName={props.userName}
                    surName={props.surName}
                    mail={props.mail}
                    phoneNumber={props.phoneNumber}
                    residence={props.residence}
                    website={props.website}

                    //Experience
                    experiences={props.experiences}

                    //Education
                    education={props.education}

                    //Others
                    certificate={props.certificate}
                />
            </div>
        </div>
    )
}

function LeftSide(props) {
    const [delayedImage, setDelayedImage] = useState(null);
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        if(props.selectedFile) {
            const timer = setTimeout(() => {
                setDelayedImage(props.selectedFile);
                setFadeIn(false);
                setTimeout(() => setFadeIn(true), 50);
            }, 3000);
            return () => clearTimeout(timer);
        } else {
            setDelayedImage(null);
        }
    }, [props.selectedFile]);

    return (
        <>
            {delayedImage && (
                <img src={props.selectedFile} style={{display: props.selectedFile === null ? 'none' : 'block'}} className={`preview-img ${fadeIn ? 'fade-in': ""}`}/>
            )}
            <div className="about-me" style={{display: props.aboutMe === "" ? 'none' : 'block'}}>
                <h3>About Me</h3>
                <p>{props.aboutMe}</p>
            </div>

            <div className="skills" style={{display: !props.skill || props.skill.length === 0 ? 'none' : 'block'}}>
                <h4>Skills</h4>
                <div className="new-skill">
                    {props.skill.map(ski => (
                        <p>-&gt; {ski.skillName}</p>
                    ))}
                </div>
            </div>

            <div className="language" style={{display: !props.language || props.language.length === 0 ? 'none' : 'block'}}>
                <h4>Languages</h4>
                <div className="new-interest">
                    {props.language.map(lang => (
                        <p>-&gt; {lang.langName}</p>
                    ))}
                </div>
            </div> 

            <div className="interest" style={{display: !props.interest || props.interest.length === 0 ? 'none' : 'block'}}>
                <h4>Interests</h4>
                <div className="new-interest">
                    {props.interest.map(inte => (
                        <p>-&gt; {inte.interestName}</p>
                    ))}
                </div>
            </div>
        </>
    )
}

function RightSide(props) {
    return (
        <>
            <div className="fullName">
                <div className="name">{props.userName}</div>
                <div className="surname">{props.surName}</div>
            </div>
            <div className="header">
                <div className="header-container">
                    <div className="mail" style={{display: props.mail === "" ? 'none' : 'flex'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>email-open-outline</title><path d="M21.03 6.29L12 .64L2.97 6.29C2.39 6.64 2 7.27 2 8V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V8C22 7.27 21.61 6.64 21.03 6.29M20 18H4V10L12 15L20 10V18M12 13L4 8L12 3L20 8L12 13Z" /></svg>
                        <p>{props.mail}</p>
                    </div>
                    
                    <div className="phoneNumber" style={{display: props.phoneNumber === "" ? 'none' : 'flex'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>phone-outline</title><path d="M20,15.5C18.8,15.5 17.5,15.3 16.4,14.9C16.3,14.9 16.2,14.9 16.1,14.9C15.8,14.9 15.6,15 15.4,15.2L13.2,17.4C10.4,15.9 8,13.6 6.6,10.8L8.8,8.6C9.1,8.3 9.2,7.9 9,7.6C8.7,6.5 8.5,5.2 8.5,4C8.5,3.5 8,3 7.5,3H4C3.5,3 3,3.5 3,4C3,13.4 10.6,21 20,21C20.5,21 21,20.5 21,20V16.5C21,16 20.5,15.5 20,15.5M5,5H6.5C6.6,5.9 6.8,6.8 7,7.6L5.8,8.8C5.4,7.6 5.1,6.3 5,5M19,19C17.7,18.9 16.4,18.6 15.2,18.2L16.4,17C17.2,17.2 18.1,17.4 19,17.4V19Z" /></svg>
                        <p>{props.phoneNumber}</p>
                    </div>
                </div>  

                <div className="header-container">
                    <div className="residence" style={{display: props.residence === "" ? 'none' : 'flex'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>arrow-right</title><path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" /></svg>
                        <p>{props.residence}</p>
                    </div>
                    <div className="website" style={{display: props.website === "" ? 'none' : 'flex'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>account-circle-outline</title><path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M7.07,18.28C7.5,17.38 10.12,16.5 12,16.5C13.88,16.5 16.5,17.38 16.93,18.28C15.57,19.36 13.86,20 12,20C10.14,20 8.43,19.36 7.07,18.28M18.36,16.83C16.93,15.09 13.46,14.5 12,14.5C10.54,14.5 7.07,15.09 5.64,16.83C4.62,15.5 4,13.82 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,13.82 19.38,15.5 18.36,16.83M12,6C10.06,6 8.5,7.56 8.5,9.5C8.5,11.44 10.06,13 12,13C13.94,13 15.5,11.44 15.5,9.5C15.5,7.56 13.94,6 12,6M12,11A1.5,1.5 0 0,1 10.5,9.5A1.5,1.5 0 0,1 12,8A1.5,1.5 0 0,1 13.5,9.5A1.5,1.5 0 0,1 12,11Z" /></svg>
                        <p><a href={props.website}>{props.website}</a></p>
                    </div>
                </div>
            </div>

            <div className="work-exp" style={{display: !props.experiences || props.experiences.length === 0 ? 'none' : 'block'}}>
                <h3>Work Experience</h3>
                <DisplayExperience {...props}/>
            </div>

            <div className="education" style={{display: !props.education || props.education.length === 0 ? 'none' : 'block'}}>
                <h4>Education</h4>
                <DisplayEducation {...props}/>
            </div>

            <div className="certification" style={{display: !props.certificate || props.certificate.length === 0 ? 'none' : 'block'}}>
                <h4>Certification</h4>
                <div className="new-certificate">
                    {props.certificate.map(cert => (
                        <p><a href={cert.certificateLink}>{cert.certificateText}</a></p>
                    ))}
                </div>
            </div>
        </>
    )
}

function DisplayExperience({ experiences }) {
    if (!experiences || experiences.length === 0) return null;
    return (
        experiences.map(exp => (
            <div key={exp.id} className="new-job-exp">
            <div className="about-job" >
                <p className="company" style={{display: exp.company === "" ? 'none' : 'flex'}}>{exp.company},</p>
                <p className="position" style={{display: exp.position === "" ? 'none' : 'flex'}}>{exp.position}</p>
            </div>
            <div className="job-duration-location">
                    {exp.monthEnd === "" && exp.yearEnd === "" ? (
                        <p className="job-duration" style={{display: exp.monthArr === "" && exp.yearArr === "" ? 'none' : 'flex'}}>
                            {exp.monthArr} {exp.yearArr} - {exp.monthEnd || "present"} {exp.yearEnd}
                        </p> 
                    ) : (
                        <p className="job-duration">{exp.monthArr} {exp.yearArr} - {exp.monthEnd} {exp.yearEnd}</p>
                    )}
                <p className="job-location" style={{display: exp.locality === "" ? 'none' : 'flex'}}>| {exp.locality}</p>
            </div>
            <div className="job-desc">
                <p>{exp.positionDesc}</p>
            </div>
            <div className="job-term" style={{display: exp.monthEnd === "" ? 'none' : 'flex'}}>
                <p className="reason-term">Reason for termination: {exp.reasonTerm}</p>
            </div>
        </div>
        ))   
    )
}

function DisplayEducation( {education} ) {
    return (
        education.map(edu => (
            <div key={edu.id}className="new=edu-exp">
                <p className="school-name">{edu.schoolName}</p>

                <div className="school-duration">
                    {edu.schoolEndYear === "" ? (
                        <p className="year-start" style={{display: edu.schoolStartYear === "" ? 'none' : 'flex'}}>{edu.schoolStartYear} present</p> 
                    ) : (
                        <p className="year-start-end">{edu.schoolStartYear} - {edu.schoolEndYear}</p>
                    )}
                </div>
                
                <div className="school-type-role">
                    <p className="school-type" style={{display: edu.schoolType === "" ? 'none' : 'flex'}}>{edu.schoolType},</p>
                    <p className="school-role">{edu.schoolRole}</p>
                </div>
            </div>
        ))
    )
}