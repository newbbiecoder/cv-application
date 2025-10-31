import "./App.css"
import SideBarButtons from "./components/sidebarButtons"
import PreviewContainer from "./components/previewContainer"
import { useState } from "react"

export default function makeContainers() {
  //PersonalInput
  const [userName, setUserName] = useState("");
  const [surName, setSurName] = useState("");
  const [mail, setMail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [residence, setResidence] = useState("");
  const [website, setWebsite] = useState("");
  const [aboutMe, setAboutMe] = useState("");

  //Experience
  const [experiences, setExperiences] = useState([]);

  //Education
  const [schoolName, setSchoolName] = useState("");
  const [schoolRole, setSchoolRole] = useState("");
  const [schoolType, setSchoolType] = useState("");
  const [schoolStartYear, setSchoolStartYear] = useState("");
  const [schoolEndYear, setSchoolEndYear] = useState("");

  //Skills
  const [skills, setSkills] = useState("");

  //Languages
  const [languages, setLanguages] = useState("");
  const [interests, setInterests] = useState("");
  const [certificateText, setCertificateText] = useState("");
  const [certificateLink, setCertificateLink] = useState("");

  return (
    <>
      <div className="edit-container">
        < SideBarButtons  
          // PersonalInput
          userName={userName} setUserName={setUserName}
          surName={surName} setSurName={setSurName}
          mail={mail} setMail={setMail}
          phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber}
          residence={residence} setResidence={setResidence}
          website={website} setWebsite={setWebsite}
          aboutMe={aboutMe} setAboutMe={setAboutMe}

          // Experience
          experiences={experiences} setExperiences={setExperiences}

          //Education
          schoolName={schoolName} setSchoolName={setSchoolName}
          schoolRole={schoolRole} setSchoolRole={setSchoolRole}
          schoolType={schoolType} setSchoolType={setSchoolType}
          schoolStartYear={schoolStartYear} setSchoolStartYear={setSchoolStartYear}
          schoolEndYear={schoolEndYear} setSchoolEndYear={setSchoolEndYear}

          //Skills
          skills={skills} setSkills={setSkills}

          //Languages
          languages={languages} setLanguages={setLanguages}
          interests={interests} setInterests={setInterests}
          certificateText={certificateText} setCertificateText={setCertificateText}
          certificateLink={certificateLink} setCertificateLink={setCertificateLink}
        />
      </div>
      <div className="preview-container">
        <PreviewContainer  
          // PersonalData
          userName={userName}
          surName={surName}
          mail={mail}
          phoneNumber={phoneNumber}
          residence={residence}
          website={website}
          aboutMe={aboutMe}

          // Experience
          experiences={experiences}

          //Education
          schoolName={schoolName}
          schoolRole={schoolRole}
          schoolType={schoolType}
          schoolStartYear={schoolStartYear}
          schoolEndYear={schoolEndYear}

          //Skills
          skills={skills}

          //Others
          languages={languages}
          interests={interests}
          certificateText={certificateText}
          certificateLink={certificateLink}
        /> 
      </div>
    </>
  )
}