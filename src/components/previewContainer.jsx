export default function PreviewContainer() {
    return (
        <div className="resume">
            <div className="left-side">
                <LeftSide />
            </div>
            <div className="right-side">
                <RightSide />
            </div>
        </div>
    )
}

function LeftSide() {
    return (
        <>
            {/* <img src="" alt="" /> */}
            <div className="about-me">
                <p>About Me</p>
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

function RightSide() {
    return (
        <>
            <h2>Name</h2>
            <div className="header">
                <div>
                    <div className="mail">
                        {/* <img src="" alt="" /> */}
                        <p>newmail@gmail.com</p>
                    </div>
                    
                    <div className="phoneNumber">
                        {/* <img src="" alt="" /> */}
                        <p>123456789</p>
                    </div>
                </div>  

                <div>
                    <div className="residence">
                        {/* <img src="" alt="" /> */}
                        <p>Delhi</p>
                    </div>
                    <div className="website">
                        {/* <img src="" alt="" /> */}
                        <p>google.com</p>
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