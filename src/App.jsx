import "./App.css"
import SideBarButtons from "./components/sidebarButtons"
import PersonalDataInput from "./components/personalData"

export default function makeContainers() {
  return (
    <>
      <div className="edit-container">
        < SideBarButtons />
        < PersonalDataInput />
      </div>
      <div className="preview-container">Preview</div>
    </>
  )
}