import './App.css';
import {EmployeeForm} from "./component/EmployeeForm.jsx";
import {EmployeeList} from "./component/EmployeeList.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Footer} from "./component/Footer.jsx";
import {Header} from "./component/Header.jsx";


function App() {


  return (
    <>
        <BrowserRouter>
            <Header/>
            <Routes>
              <Route path="/" element={<EmployeeList/>}></Route>
              <Route path="/add-employee" element={<EmployeeForm/>}></Route>
              <Route path="/edit-employee/:id" element={<EmployeeForm/>}></Route>
            </Routes>
            <Footer/>
        </BrowserRouter>
    </>
  )
}

export default App
