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
            <div className="about-me">
                <h4>About Me</h4>
                <p>{props.aboutMe}</p>
            </div>

            <div className="skills">
                <h4>Skills</h4>
                <ul>
                    <li>{props.skills}</li>
                </ul>
            </div>

            <div className="language">
                <h4>Languages</h4>
                <p>{props.languages}</p>
            </div> 

            <div className="interest">
                <h4>Interests</h4>
                <p>{props.interests}</p>
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
                <div>
                    <div className="mail">
                        {/* <img src="" alt="" /> */}
                        <p>{props.mail}</p>
                    </div>
                    
                    <div className="phoneNumber">
                        {/* <img src="" alt="" /> */}
                        <p>{props.phoneNumber}</p>
                    </div>
                </div>  

                <div>
                    <div className="residence">
                        {/* <img src="" alt="" /> */}
                        <p>{props.residence}</p>
                    </div>
                    <div className="website">
                        {/* <img src="" alt="" /> */}
                        <p>{props.website}</p>
                    </div>
                </div>
            </div>

            <div className="work-exp">
                <h3>Work Experience</h3>
                <div className="new-job-exp">
                    <div className="about-job">
                        <p className="company">{props.company}</p>
                        <p className="position">{props.position}</p>
                    </div>
                    <div className="job-duration-location">
                            {props.monthEnd === "" ? (
                                <p className="job-duration">{props.monthArr} {props.yearArr} present</p> 
                            ) : (
                                <p className="job-duration">{props.monthArr} {props.yearArr}-{props.monthEnd} {props.yearEnd}</p>
                            )}
                        <p className="job-location">{props.locality}</p>
                    </div>
                    <div className="job-desc">
                        {props.positionDesc}
                    </div>
                    <div className="job-term" style={{display: props.monthEnd === "" ? 'none' : 'block'}}>
                        <p>Reason for termination: </p>
                        <p className="reason-term">{props.reasonTerm}</p>
                    </div>
                </div>
            </div>

            <div className="education">
                <h4>Education</h4>
                <p className="school-name">{props.schoolName}</p>

                <div className="school-duration">
                    {props.schoolEndYear === "" ? (
                        <p className="year-start">{props.schoolStartYear} present</p> 
                    ) : (
                        <p className="year-start-end">{props.schoolStartYear}-{props.schoolEndYear}</p>
                    )}
                </div>
                
                <div className="school-type-role">
                    <p className="school-type">{props.schoolType}</p>
                    <p className="school-role">{props.schoolRole}</p>
                </div>
            </div>

            <div className="certification">
                <h4>Certification</h4>
                <p><a href={props.certificateLink}>{props.certificateText}</a></p>
            </div>
        </>
    )
}