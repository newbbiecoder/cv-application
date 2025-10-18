import { useState } from "react"

export default function Others() {
    const [langs, setLang] = useState([]);
    const [interests, setInterests] = useState([]);
    const [certificates, setCertificates] = useState([]);

    const addLang = () => {
        setLang([...langs, <LanguageInfo key={crypto.randomUUID()} />]);
    }

    const addInterests = () => {
        setInterests([...interests, <InterestsInfo key={crypto.randomUUID()} />]);
    }

    const addCertificates = () => {
        setCertificates([...certificates, <CertificatesInfo key={crypto.randomUUID()} />]);
    }

    return (
        <div className="others">
            <h3>Language</h3>
            <p>Add your language skills</p>

            <button className="add-language" onClick={addLang}>
                Add a language
                {/* <img src="" alt="" /> */}
            </button>

            <div className="lang-info">
                {langs}
            </div>


            <h3>Interest</h3>
            <p>Add your interests</p>

            <button className="add-interests" onClick={addInterests}>
                Add an interest
                {/* <img src="" alt="" /> */}
            </button>
            
            <div className="interest-info">
                {interests}
            </div>


            <h3>Certificates</h3>
            <p>Add your certificates</p>

            <button className="add-certificates" onClick={addCertificates}>
                Add a certificate
                {/* <img src="" alt="" /> */}
            </button>

            <div className="certificate-info">
                {certificates}
            </div>
            

            <button className="finish">
                Finish CV
                {/* <img src="" alt="" /> */}
            </button>
        </div>
    )
}

function LanguageInfo() {
    return (
        <div className="form-fields">
            <label htmlFor="langName" id={crypto.randomUUID()}>
                <input type="text" name="langName" />
            </label>
        </div>
    )
}

function InterestsInfo() {
    return(
        <div className="form-fields">
            <label htmlFor="interestName" id={crypto.randomUUID()}>
                <input type="text" name="interestName" />
            </label>
        </div>
    )
}

function CertificatesInfo() {
    return (
        <div className="certificate-fields">
            <label htmlFor="link-text" key={crypto.randomUUID()}>
                Link Text
                <input type="text" name="link-text" />
            </label>
            <label htmlFor="URL" key={crypto.randomUUID()}>
                URL
                <input type="url" name="URL" />
            </label>

        </div>
    )
}