import {useEffect, useState} from "react";
import {deleteEmployee, listEmployees, updateEmployee} from "../service/EmployeeService.js";
import {useNavigate} from "react-router-dom";


export const EmployeeList = () => {

    const [employees, setEmployees] = useState([]);
    const navigator = useNavigate();

    useEffect(()=>{
        getAllEmployees();
    },[]);

    function getAllEmployees(){
        listEmployees().then((response)=>{
            setEmployees(response.data.data);
            console.log(response);
        }).catch(error =>{
            console.error(error);
        })
    }

    function addEmployee(){
        navigator("/add-employee");
    }

    function updateEmployee(id){
        navigator(`/edit-employee/${id}`)
    }

    function removeEmployee(id){
        deleteEmployee(id).then((response)=>{
            getAllEmployees();
            console.log(response.data);

        }).catch(error =>{
            console.error(error);
        })
    }



    return (
        <>
            <div className="container">

                <h1 className="text-center m-5">Employee List</h1>
                <button className="btn btn-info mb-2" onClick={addEmployee}>Add Employee</button>
                <table className="table table-striped table-bordered">
                    <thead>
                    <tr >
                        <th>Employee Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {employees.map(employee =>
                        <tr key={employee.employeeId}>
                            <td>{employee.employeeId}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                            <td>
                                <button className="btn btn-info m-1" onClick={() =>updateEmployee(employee.employeeId)}>Update</button>
                                <button className="btn btn-danger" onClick={() =>removeEmployee(employee.employeeId)}>Delete</button>
                            </td>

                        </tr>
                    )}

                    </tbody>
                </table>
            </div>

        </>
    )
}