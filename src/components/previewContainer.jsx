export default function PreviewContainer(props) {
    return (
        <div className="resume">
            <div className="left-side">
                <LeftSide
                    aboutMe={props.aboutMe}
                />
            </div>
            <div className="right-side">
                <RightSide 
                    userName={props.userName}
                    surName={props.surName}
                    mail={props.mail}
                    phoneNumber={props.phoneNumber}
                    residence={props.residence}
                    website={props.website}
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
                <p>{props.aboutMe}</p>
                {/* about-me_userInput */}
            </div>

            <div className="skills">
                Skills
                <ul>
                    {/* <li>s</li> */}
                </ul>
            </div>

            <div className="language">
                {/* languages */}
            </div> 

            <div className="interest">
                {/* interest */}
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
                        <p className="company">Company, </p>
                        <p className="position">Position</p>
                    </div>
                    <div className="job-duration-location">
                        <p className="job-duration">2020-2023 | </p>
                        <p className="job-location">Ohio</p>
                    </div>
                    <div className="job-desc">
                        Job very good very bad hhahah
                    </div>
                    <div className="job-term">
                        <p>Reason for termination: </p>
                        <p className="reason-term">Farts too much</p>
                    </div>
                </div>
            </div>

            <div className="education">
                <h4>Education</h4>
                <p className="school-name">Buisness School</p>

                <div className="school-duration">
                    <p className="year-start">2015</p>
                    <p className="year-end">2020</p>
                </div>
                
                <div className="school-type-role">
                    <p className="school-type">Secondary school</p>
                    <p className="school-role">Buisness academy</p>
                </div>
            </div>

            <div className="certification">
                <h4>Certification</h4>
                <p><a href="https://google.com">Certificate name</a></p>
            </div>
        </>
    )
}