import { useState } from "react"

export default function Others({language, setLanguage, interest, setInterest, certificate, setCertificate}) {

    // Language
    const addLanguage = () => {
        const newLanguage = {
            id: crypto.randomUUID(),
            langName: ""
        }
        setLanguage([...language, newLanguage]);
    }

    const updateLanguage = (id, field, value) => {
        setLanguage(prev => 
            prev.map(lang => lang.id === id ? { ...lang, [field]: value } : lang)
        )
    }

    const removeLanguage = (id) => {
        setLanguage(prev => prev.filter(lang => lang.id !== id))
    }

    // Interest
    const addInterest = () => {
        const newInterest = {
            id: crypto.randomUUID(),
            interestName: ""
        }
        setInterest([...interest, newInterest]);
    }

    const updateInterest = (id, field, value) => {
        setInterest(prev => 
            prev.map(inter => inter.id === id ? { ...inter, [field]: value } : inter)
        )
    }  

    const removeInterest = (id) => {
        setInterest(prev => prev.filter(inter => inter.id !== id))
    }

    // Certificate
    const addCertificate = () => {
        const newCertificate = {
            id: crypto.randomUUID(),
            certificateText: "",
            certificateLink: ""
        }
        setCertificate([...certificate, newCertificate]);
    }

    const updateCertificate = (id, field, value) => {
        setCertificate(prev => 
            prev.map(cert => cert.id === id ? { ...cert, [field]: value } : cert)
        )
    }

    const removeCertificate = (id) => {
        setCertificate(prev => prev.filter(cert => cert.id !== id))
    }

    return (
        <>
            <h3>Language</h3>
            <p>Add languages that you are able to communicate </p>
            <p>at least a little.</p>

            <button className="add-language" onClick={addLanguage}>
                <p>Add a language</p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>plus</title><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>
            </button>

            <div className="lang-info">
                {language.map(lang => (
                    <LanguageInfo 
                        key={lang.id}
                        language={lang}
                        updateLanguage={updateLanguage}
                        removeLanguage={removeLanguage}
                    />
                ))}
            </div>


            <h3>Interest</h3>
            <p>Add your interests</p>

            <button className="add-interests" onClick={addInterest}>
                <p>Add an interest</p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>plus</title><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>
            </button>
            
            <div className="interest-info">
                {interest.map(inter => (
                    <InterestsInfo 
                        key={inter.id}
                        interest={inter}
                        updateInterest={updateInterest}
                        removeInterest={removeInterest}
                    />
                ))}
            </div>


            <h3>Certificates</h3>
            <p>Add your certificates</p>

            <button className="add-certificates" onClick={addCertificate}>
                <p>Add a certificate</p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>plus</title><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>
            </button>

            <div className="certificate-info">
                {certificate.map(cert => (
                    <CertificatesInfo 
                        key={cert.id}
                        certificate={cert}
                        updateCertificate={updateCertificate}
                        removeCertificate={removeCertificate}
                    />
                ))}
            </div>
            

            <button className="finish">
                Finish CV
                {/* <img src="" alt="" /> */}
            </button>
        </>
    )
}

function LanguageInfo({ language, updateLanguage, removeLanguage }) {
    const handleChange = (e) => {
        updateLanguage(language.id, e.target.name, e.target.value)
    }

    return (
        <div className="other-fields">
            <label htmlFor="langName" id={crypto.randomUUID()}>
                <input type="text" name="langName" value={language.langName} onChange={handleChange}/>
            </label>
            <svg onClick={() => removeLanguage(language.id)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>close-thick</title><path d="M20 6.91L17.09 4L12 9.09L6.91 4L4 6.91L9.09 12L4 17.09L6.91 20L12 14.91L17.09 20L20 17.09L14.91 12L20 6.91Z" /></svg>
        </div>
    )
}

function InterestsInfo({ interest, updateInterest, removeInterest }) {
    const handleChange = (e) => {
        updateInterest(interest.id, e.target.name, e.target.value)
    }

    return(
        <div className="other-fields">
            <label htmlFor="interestName" id={crypto.randomUUID()}>
                <input type="text" name="interestName" value={interest.interestName} onChange={handleChange}/>
            </label>
            <svg onClick={() => removeInterest(interest.id)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>close-thick</title><path d="M20 6.91L17.09 4L12 9.09L6.91 4L4 6.91L9.09 12L4 17.09L6.91 20L12 14.91L17.09 20L20 17.09L14.91 12L20 6.91Z" /></svg>
        </div>
    )
}

function CertificatesInfo({ certificate, updateCertificate, removeCertificate }) {
    const [fieldsHide, setFieldsHide] = useState(false);

    const addFields = (e) => {
        setFieldsHide(!fieldsHide);
        console.log(e.target);
        !fieldsHide ? (
            (e.target.tagName.toLowerCase() === 'p' || e.target.tagName.toLowerCase() === 'svg') ? e.target.parentNode.parentNode.classList.add('hide')
            : (e.target.tagName.toLowerCase() === 'path') ? e.target.parentNode.parentNode.parentNode.classList.add('hide')
            : e.target.parentNode.classList.add('hide')
            ) : (e.target.tagName.toLowerCase() === 'p' || e.target.tagName.toLowerCase() === 'svg') ? e.target.parentNode.parentNode.classList.remove('hide')
            : (e.target.tagName.toLowerCase() === 'path') ? e.target.parentNode.parentNode.parentNode.classList.remove('hide')
            : e.target.parentNode.classList.remove('hide');
    }

    const removeForm = (e) => {
        e.target.parentElement.parentElement.parentElement.remove();
    }

    const handleChange = (e) => {
        updateCertificate(certificate.id, e.target.name, e.target.value)
    }

    return (
        <div className="others-info">
            <button onClick={addFields}>
                <p>New Course/Certification</p>
                {fieldsHide ? (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>plus</title><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>
                ): (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>close</title><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg>
                )}
            </button>
            <div className={fieldsHide ? "certificate-fields hidden" : "certificate-fields"}>
                <label htmlFor="link-text">
                    <p>Link Text</p>
                    <input type="text" name="certificateText" value={certificate.certificateText} onChange={handleChange}/>
                </label>
                <label htmlFor="URL">
                    <p>URL</p>
                    <input type="url" name="certificateLink" value={certificate.certificateLink} onChange={handleChange}/>
                </label>
                <button className="remove-certificate" onClick={() => removeCertificate(certificate.id)}>
                    <p>Remove this certificate</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>close</title><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg>
                </button>
            </div>
        </div>
    )
}