import {EmployeeForm} from "./component/EmployeeForm.jsx";
import {EmployeeList} from "./component/EmployeeList.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";


function App() {


  return (
    <>
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<EmployeeList/>}></Route>
              <Route path="/add-employee" element={<EmployeeForm/>}></Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
