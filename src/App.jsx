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
  const [education, setEducation] = useState([]);

  //Skills
  const [skill, setSkill] = useState([]);

  //Languages
  const [language, setLanguage] = useState([]);
  const [interest, setInterest] = useState([]);
  const [certificate, setCertificate] = useState([]);

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
          education={education} setEducation={setEducation}

          //Skills
          skill={skill} setSkill={setSkill}

          //Others
          language={language} setLanguage={setLanguage}
          interest={interest} setInterest={setInterest}
          certificate={certificate} setCertificate={setCertificate}
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
          education={education}

          //Skills
          skill={skill}

          //Others
          language={language}
          interest={interest}
          certificate={certificate}
        /> 
      </div>
    </>
  )
}