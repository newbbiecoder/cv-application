import "./App.css"
import SideBarButtons from "./components/sidebarButtons"
import PreviewContainer from "./components/previewContainer"
import { useState } from "react"
import html2canvas from "html2canvas"
import jsPDF from "jspdf"

export default function makeContainers() {
  //PersonalInput
  const [userName, setUserName] = useState("");
  const [surName, setSurName] = useState("");
  const [mail, setMail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [residence, setResidence] = useState("");
  const [website, setWebsite] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

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

  const handleDownloadPDF = async () => {
    const preview = document.querySelector(".resume");

    if (!preview) return alert("Preview not found!");

    preview.style.backgroundColor = "#ebf4ff";
    preview.style.display = "flex";
    preview.style.alignItems = "stretch";

    const canvas = await html2canvas(preview, {
      scale: 2,
      useCORS: true,
      backgroundColor: "#ebf4ff",
      scrollX: 0,
      scrollY: -window.scrollY,
    });

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");

    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const imgWidth = pageWidth;
    const imgHeight = (canvas.height * pageWidth) / canvas.width;

    if (imgHeight <= pageHeight) {
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
    } else {
      let position = 0;
      let heightLeft = imgHeight;
      while (heightLeft > 0) {
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
        if (heightLeft > 0) pdf.addPage();
        position -= pageHeight;
      }
    }

    pdf.save("My_CV.pdf");
  };


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
          selectedFile={selectedFile} setSelectedFile={setSelectedFile}

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
          selectedFile={selectedFile}

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

        <div className="cv-buttons">
          {/* <div className="reset-button">     FOR FUTURE
            <p>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>reload</title><path d="M2 12C2 16.97 6.03 21 11 21C13.39 21 15.68 20.06 17.4 18.4L15.9 16.9C14.63 18.25 12.86 19 11 19C4.76 19 1.64 11.46 6.05 7.05C10.46 2.64 18 5.77 18 12H15L19 16H19.1L23 12H20C20 7.03 15.97 3 11 3C6.03 3 2 7.03 2 12Z" /></svg>
              Reset
            </p>
          </div> */}

          <div className="download-pdf" onClick={handleDownloadPDF}>
            <p>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>download</title><path d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" /></svg>
              Download PDF
            </p>      
          </div>
        </div>
      </div>     
    </>
  )
}