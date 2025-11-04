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

    let heightLeft = imgHeight;
    let position = 0;

    //Add first page
    pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    //Add extra pages(if needed)
    while (heightLeft > 0) {
      position -= pageHeight;
      pdf.addPage();
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    //remove accidental blank last page
    if (heightLeft < -pageHeight / 2) {
      pdf.deletePage(pdf.internal.getNumberOfPages());
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
          handleDownloadPDF={handleDownloadPDF}
          
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
          handleDownloadPDF={handleDownloadPDF}
        /> 
      </div>     
    </>
  )
}