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
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [locality, setLocality] = useState("");
  const [positionDesc, setPositionDesc] = useState("");
  const [monthArr, setMonthArr] = useState("");
  const [yearArr, setYearArr] = useState("");
  const [monthEnd, setMonthEnd] = useState("");
  const [yearEnd, setYearEnd] = useState("");
  const [reasonTerm, setReasonTerm] = useState("");

  //Education
  const [schoolName, setSchoolName] = useState("");
  const [schoolRole, setSchoolRole] = useState("");
  const [schoolType, setSchoolType] = useState("");
  const [schoolStartYear, setSchoolStartYear] = useState("");
  const [schoolEndYear, setSchoolEndYear] = useState("");

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
          company={company} setCompany={setCompany}  
          position={position} setPosition={setPosition}   
          locality={locality} setLocality={setLocality} 
          positionDesc={locality} setPositionDesc={setPositionDesc}
          monthArr={monthArr} setMonthArr={setMonthArr}
          yearArr={yearArr} setYearArr={setYearArr}
          monthEnd={monthEnd} setMonthEnd={setMonthEnd}
          yearEnd={yearEnd} setYearEnd={setYearEnd}
          reasonTerm={reasonTerm} setReasonTerm={setReasonTerm}

          //Education
          schoolName={schoolName} setSchoolName={setSchoolName}
          schoolRole={schoolRole} setSchoolRole={setSchoolRole}
          schoolType={schoolType} setSchoolType={setSchoolType}
          schoolStartYear={schoolStartYear} setSchoolStartYear={setSchoolStartYear}
          schoolEndYear={schoolEndYear} setSchoolEndYear={setSchoolEndYear}
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
          company={company}
          position={position}
          locality={locality}
          positionDesc={positionDesc}
          monthArr={monthArr}
          yearArr={yearArr}
          monthEnd={monthEnd}
          yearEnd={yearEnd}
          reasonTerm={reasonTerm}

          //Education
          schoolName={schoolName}
          schoolRole={schoolRole}
          schoolType={schoolType}
          schoolStartYear={schoolStartYear}
          schoolEndYear={schoolEndYear}
        /> 
      </div>
    </>
  )
}