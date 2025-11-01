import { useMemo } from "react";

export default function PersonalDataInput(props) {
    const handleFileChange = (e) => {
        console.log("File selected")
        props.setSelectedFile(URL.createObjectURL(e.target.files[0]));
    }

    const removeFile = () => {
        props.setSelectedFile(null)
    }

    const handleNameChange = useMemo(() => (e, fieldName) => {
        if(fieldName === "Name") props.setUserName(e.target.value);
        else if(fieldName === "Surname") props.setSurName(e.target.value);
        else if(fieldName === "Email") props.setMail(e.target.value);
        else if(fieldName === "Telephone number") props.setPhoneNumber(e.target.value);
        else if(fieldName === "Residence (city)") props.setResidence(e.target.value);
        else if(fieldName === "Link to your website") props.setWebsite(e.target.value);
        else if(fieldName === "About me (max 160 characters)") props.setAboutMe(e.target.value);
    }, [])

    const setValue = (valueFieldName) => {
        valueFieldName === "Name" ? props.userName : "";
        valueFieldName === "Surname" ? props.surName : "";
        valueFieldName === "Email" ? props.mail : "";
        valueFieldName === "Telephone number" ? props.phoneNumber : "";
        valueFieldName === "Residence (city)" ? props.residence : "";
        valueFieldName === "Link to your website" ? props.website : "";
        valueFieldName === "About me (max 160 characters)" ? props.aboutMe : "";
    }

    const formFields = useMemo(() => [
        {name: "Name", id: crypto.randomUUID(), required: true},
        {name: "Surname", id: crypto.randomUUID(), required: true},
        {name: "Email", id: crypto.randomUUID(), required: true},
        {name: "About me (max 160 characters)", id: crypto.randomUUID()},
        {name: "Link to your website", id: crypto.randomUUID()},
        {name: "Telephone number", id: crypto.randomUUID(), required: true},
        {name: "Residence (city)", id: crypto.randomUUID()},
    ], [])

    function getInputField(field) {
        if(field === "Email*") return "email";
        else if(field === "Link to your website") return "url";
        else if(field === "Telephone number*") return "tel"
        else return "text"
    }

    return (
        <>
            <h3>Personal Data</h3>
            <p>Do you have a photo that fits on your CV? Add it.</p>
            <p>You can also add an "about me" section to help</p>
            <p>recruiters know your career goals.</p>

            {!props.selectedFile ? (
                <label className="addPhoto" htmlFor="uploadPhoto">     
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>account-circle-outline</title><path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M7.07,18.28C7.5,17.38 10.12,16.5 12,16.5C13.88,16.5 16.5,17.38 16.93,18.28C15.57,19.36 13.86,20 12,20C10.14,20 8.43,19.36 7.07,18.28M18.36,16.83C16.93,15.09 13.46,14.5 12,14.5C10.54,14.5 7.07,15.09 5.64,16.83C4.62,15.5 4,13.82 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,13.82 19.38,15.5 18.36,16.83M12,6C10.06,6 8.5,7.56 8.5,9.5C8.5,11.44 10.06,13 12,13C13.94,13 15.5,11.44 15.5,9.5C15.5,7.56 13.94,6 12,6M12,11A1.5,1.5 0 0,1 10.5,9.5A1.5,1.5 0 0,1 12,8A1.5,1.5 0 0,1 13.5,9.5A1.5,1.5 0 0,1 12,11Z" /></svg>
                    <div>
                        <p>Upload photo</p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>plus</title><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>
                        <input type="file" name="uploadPhoto" id="uploadPhoto" accept="image/*" onChange={handleFileChange} style={{opacity: 0}} />
                    </div>    
                </label>
            ) : (
                <div className="removePhoto" onClick={removeFile}>     
                    <img src={props.selectedFile}/>
                    <div>
                        <p>Remove Photo</p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>close</title><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg>
                    </div>    
                </div>
            )}
            

            <div className="form personalDataForm">
                {formFields.map((field) => (
                    <label htmlFor={field.name} key={field.id}>
                        <p>
                            {field.name} {' '}
                            {field.required && (
                                <span>*</span>
                            )}
                        </p>
                        
                        {field.name === "About me (max 160 characters)" ? (
                            <textarea name={field.name} rows="6" cols="30" onChange={(e) => handleNameChange(e, field.name)} value={setValue(field.name)}></textarea>
                        ) : (
                            <>
                            <input type={getInputField(field.name)} name={field.name} id={field.name} onChange={(e) => handleNameChange(e, field.name)} value={setValue(field.name)}
                            /> 
                            </>
                        )}
                    </label>
                ))}
            </div>
            <button className="btn-workexp" onClick={() => props.setActiveSection("Experience")}>
                <p>Continue to work experience</p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>arrow-right-thin</title><path d="M14 16.94V12.94H5.08L5.05 10.93H14V6.94L19 11.94Z" /></svg>
            </button>
        </>   
    )
}