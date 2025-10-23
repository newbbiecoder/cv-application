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
            <p>Add languages that you are able to communicate </p>
            <p>at least a little.</p>

            <button className="add-language" onClick={addLang}>
                <p>Add a language</p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>plus</title><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>
            </button>

            <div className="lang-info">
                {langs}
            </div>


            <h3>Interest</h3>
            <p>Add your interests</p>

            <button className="add-interests" onClick={addInterests}>
                <p>Add an interest</p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>plus</title><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>
            </button>
            
            <div className="interest-info">
                {interests}
            </div>


            <h3>Certificates</h3>
            <p>Add your certificates</p>

            <button className="add-certificates" onClick={addCertificates}>
                <p>Add a certificate</p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>plus</title><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>
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
    const removeField = (e) => {
        if(e.target.tagName === 'path') {
            e.target.parentElement.parentElement.remove();
        }
        else {
            e.target.parentElement.remove();
        }
    }

    return (
        <div className="other-fields">
            <label htmlFor="langName" id={crypto.randomUUID()}>
                <input type="text" name="langName" />
            </label>
            <svg onClick={removeField} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>close-thick</title><path d="M20 6.91L17.09 4L12 9.09L6.91 4L4 6.91L9.09 12L4 17.09L6.91 20L12 14.91L17.09 20L20 17.09L14.91 12L20 6.91Z" /></svg>
        </div>
    )
}

function InterestsInfo() {
    const removeField = (e) => {
        if(e.target.tagName === 'path') {
            e.target.parentElement.parentElement.remove();
        }
        else {
            e.target.parentElement.remove();
        }
    }

    return(
        <div className="other-fields">
            <label htmlFor="interestName" id={crypto.randomUUID()}>
                <input type="text" name="interestName" />
            </label>
            <svg onClick={removeField} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>close-thick</title><path d="M20 6.91L17.09 4L12 9.09L6.91 4L4 6.91L9.09 12L4 17.09L6.91 20L12 14.91L17.09 20L20 17.09L14.91 12L20 6.91Z" /></svg>
        </div>
    )
}

function CertificatesInfo() {
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
                <label htmlFor="link-text" key={crypto.randomUUID()}>
                    <p>Link Text</p>
                    <input type="text" name="link-text" />
                </label>
                <label htmlFor="URL" key={crypto.randomUUID()}>
                    <p>URL</p>
                    <input type="url" name="URL" />
                </label>
                <button className="remove-certificate" onClick={removeForm}>
                    <p>Remove this certificate</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>close</title><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg>
                </button>
            </div>
        </div>
    )
}