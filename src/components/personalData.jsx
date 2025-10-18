export default function PersonalDataInput() {
    const formFields = [
        {name: "Name*", id: crypto.randomUUID()},
        {name: "Surname*", id: crypto.randomUUID()},
        {name: "Email*", id: crypto.randomUUID()},
        {name: "About me (max 160 characters)", id: crypto.randomUUID()},
        {name: "Link to your website", id: crypto.randomUUID()},
        {name: "Telephone number*", id: crypto.randomUUID()},
        {name: "Residence (city)", id: crypto.randomUUID()},
    ]

    function getInputField(field) {
        if(field === "Email*") return "email";
        else if(field === "Link to your website") return "url";
        else if(field === "Telephone number*") return "tel"
        else return "text"
    }

    return (
        <div className="personalData">
            <h3>Personal Data</h3>
            <p>Do you have a photo that fits on your CV? Add it.</p>
            <p>You can also add an "about me" section to help</p>
            <p>recruiters know your career goals.</p>

            <div className="addPhoto">
                {/* <img src="" alt="" /> */}
                <a>Upload photo</a>
                {/* <img src="" alt="" /> */}
            </div>

            <div className="form personalDataForm">
                {formFields.map((field) => (
                    <label key={field.id}>
                        {field.name} {' '} 
                        <input type={getInputField(field.name)} name={field.name} id={field.name} />
                    </label>
                ))}
            </div>
            <button className="btn-workexp">
                Continue to work experience
                {/* <img src="" alt="" /> */}
            </button>
        </div>
    )
}