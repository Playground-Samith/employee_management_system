import {useEffect, useState} from "react";
import {listEmployees} from "../service/EmployeeService.js";
import {useNavigate} from "react-router-dom";


export const EmployeeList = () => {

    const [employees, setEmployees] = useState([]);
    const navigator = useNavigate();

    useEffect(()=>{
        listEmployees().then((response)=>{
            setEmployees(response.data.data);
            console.log(response);
        }).catch(error =>{
            console.error(error);
        })
    },[]);

    function AddEmployee(){
        navigator("/add-employee");
    }



    return (
        <>
            <div className="container">

                <h1 className="text-center m-5">Employee List</h1>
                <button className="btn btn-info mb-2" onClick={AddEmployee}>Add Employee</button>
                <table className="table table-striped table-bordered">
                    <thead>
                    <tr >
                        <th>Employee Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                    </tr>
                    </thead>
                    <tbody>
                    {employees.map(employee =>
                        <tr key={employee.employeeId}>
                            <td>{employee.employeeId}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>

                        </tr>
                    )}

                    </tbody>
                </table>
            </div>

        </>
    )
}