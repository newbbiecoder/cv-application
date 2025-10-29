export default function PreviewContainer(props) {
    return (
        <div className="resume">
            <div className="left-side">
                <LeftSide
                    //PersonalInput
                    aboutMe={props.aboutMe}

                    //Skills
                    skills={props.skills}

                    //Others
                    languages={props.languages}
                    interests={props.interests}
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
                    company={props.company}
                    position={props.position}
                    locality={props.locality}
                    positionDesc={props.positionDesc}
                    monthArr={props.monthArr}
                    yearArr={props.yearArr}
                    monthEnd={props.monthEnd}
                    yearEnd={props.yearEnd}
                    reasonTerm={props.reasonTerm}

                    //Education
                    schoolName={props.schoolName}
                    schoolRole={props.schoolRole}
                    schoolType={props.schoolType}
                    schoolStartYear={props.schoolStartYear}
                    schoolEndYear={props.schoolEndYear}

                    //Others
                    certificateText={props.certificateText}
                    certificateLink={props.certificateLink}
                />
            </div>
        </div>
    )
}

function LeftSide(props) {
    return (
        <>
            {/* <img src="" alt="" /> */}
            <div className="about-me" style={{display: props.aboutMe === "" ? 'none' : 'block'}}>
                <h3>About Me</h3>
                <p>{props.aboutMe}</p>
            </div>

            <div className="skills" style={{display: props.skills === "" ? 'none' : 'block'}}>
                <h4>Skills</h4>
                <p>-&gt; {props.skills}</p>
            </div>

            <div className="language" style={{display: props.languages === "" ? 'none' : 'block'}}>
                <h4>Languages</h4>
                <p>-&gt; {props.languages}</p>
            </div> 

            <div className="interest" style={{display: props.interests === "" ? 'none' : 'block'}}>
                <h4>Interests</h4>
                <p>-&gt; {props.interests}</p>
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

            <div className="work-exp" style={{display: props.position === "" && props.company === "" && props.monthArr === "" && props.yearArr === "" && props.monthEnd === "" && props.yearEnd === "" && props.locality === "" && props.positionDesc === "" && props.reasonTerm === "" ? 'none' : 'block'}}>
                <h3>Work Experience</h3>
                <div className="new-job-exp">
                    <div className="about-job" >
                        <p className="company" style={{display: props.company === "" ? 'none' : 'flex'}}>{props.company},</p>
                        <p className="position" style={{display: props.position === "" ? 'none' : 'flex'}}>{props.position}</p>
                    </div>
                    <div className="job-duration-location">
                            {props.monthEnd === "" && props.yearEnd === "" ? (
                                <p className="job-duration" style={{display: props.monthArr === "" && props.yearArr === "" ? 'none' : 'flex'}}>{props.monthArr} {props.yearArr} present</p> 
                            ) : (
                                <p className="job-duration">{props.monthArr} {props.yearArr} - {props.monthEnd} {props.yearEnd}</p>
                            )}
                        <p className="job-location" style={{display: props.locality === "" ? 'none' : 'flex'}}>| {props.locality}</p>
                    </div>
                    <div className="job-desc">
                        {props.positionDesc}
                    </div>
                    <div className="job-term" style={{display: props.monthEnd === "" ? 'none' : 'flex'}}>
                        <p>Reason for termination: </p>
                        <p className="reason-term">{props.reasonTerm}</p>
                    </div>
                </div>
            </div>

            <div className="education" style={{display: props.schoolName === "" && props.schoolStartYear === "" && props.schoolEndYear === "" && props.schoolRole === "" && props.schoolType === "" ? 'none' : 'block'}}>
                <h4>Education</h4>
                <p className="school-name">{props.schoolName}</p>

                <div className="school-duration">
                    {props.schoolEndYear === "" ? (
                        <p className="year-start" style={{display: props.schoolStartYear === "" ? 'none' : 'flex'}}>{props.schoolStartYear} present</p> 
                    ) : (
                        <p className="year-start-end">{props.schoolStartYear} - {props.schoolEndYear}</p>
                    )}
                </div>
                
                <div className="school-type-role">
                    <p className="school-type" style={{display: props.schoolType === "" ? 'none' : 'flex'}}>{props.schoolType},</p>
                    <p className="school-role">{props.schoolRole}</p>
                </div>
            </div>

            <div className="certification" style={{display: props.certificateLink === "" && props.certificateText === "" ? 'none' : 'block'}}>
                <h4>Certification</h4>
                <p><a href={props.certificateLink}>{props.certificateText}</a></p>
            </div>
        </>
    )
}