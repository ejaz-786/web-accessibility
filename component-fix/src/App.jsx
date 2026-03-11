
import './App.css'
import AccessibleAccrordian from './component/accordian-issue/AccessibleAccrordian'
import AccordianIssue from './component/accordian-issue/AccordianIssue'
import AccessibleDropdown from './component/dropdown-issue/AccessibleDropdown'
import DropdownIssue from './component/dropdown-issue/DropdownIssue'
import AccessibleMoal from './component/modal-issue/AccessibleMoal'
import ModalIssue from './component/modal-issue/modal'
import AccessibleTab from './component/tab-issue/AccessibleTab'
import AccessibleTabs from './component/tab-issue/AccessibleTabs'
import TabIssue from './component/tab-issue/TabIssue'

function App() {

  return (
    <>
      <div>
        {/* <ModalIssue /> */}
        {/* <AccessibleMoal /> */}
        {/* <AccordianIssue /> */}
        {/* <AccessibleAccrordian/> */}
        {/* <DropdownIssue />
        <AccessibleDropdown /> */}
        <TabIssue />
        <br />
        {/* <AccessibleTab /> */}
        <AccessibleTabs />
      </div>

    </>
  )
}

export default App
