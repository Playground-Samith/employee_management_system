import {useEffect, useState} from "react";
import {createEmployee, getEmployee, updateEmployee} from "../service/EmployeeService.js";
import {useNavigate, useParams} from "react-router-dom";

export const EmployeeForm = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const navigator=useNavigate();
    const {id} = useParams();

    useEffect(()=>{
        getEmployee(id).then((response)=>{
            console.log(response.data);
            setFirstName(response.data.data.firstName);
            setLastName(response.data.data.lastName);
            setEmail(response.data.data.email);
        }).catch(error =>{
            console.error(error);
        })

    },[id])


    const [errors, setErrors] = useState({firstName:"",lastName:"",email:""});

    function handleFirstName(e){
        setFirstName(e.target.value);
    }

    function handleLastName(e){
        setLastName(e.target.value);
    }

    function handleEmail(e){
        setEmail(e.target.value);
    }
    function validForm(){
        let valid=true;

        const errorsCopy={...errors};

        if(firstName.trim()){
            errorsCopy.firstName="";
        }else {
            errorsCopy.firstName="First Name is required";
            valid=false;
        }

        if(lastName.trim()){
            errorsCopy.lastName="";
        }else {
            errorsCopy.lastName="Last Name is required";
            valid=false;
        }

        if(email.trim()){
            errorsCopy.email="";
        }else {
            errorsCopy.email="Email is required";
            valid=false;
        }

        setErrors(errorsCopy);

        return valid;

    }
    function saveOrUpdateEmployee(e){
        e.preventDefault();

        const employee={firstName,lastName,email}



       if(validForm()){

           if(id){
               updateEmployee(id,employee).then((response)=>{
                   console.log(response.data);
                   navigator("/");
               }).catch(error =>{
                   console.error(error);
               })
           }else{
               createEmployee(employee).then((response)=>{
                   console.log(response.data);
                   navigator("/");
               }).catch(error =>{
                   console.error(error);
               });
           }


       }

    }

    function pageTitle(){
        if(id){
            return <h1 className="text-center mt-3">Update Employee</h1>
        }else{
            return <h1 className="text-center mt-3">Add Employee</h1>
        }
    }
    return (

        <div className="container p-5">
            <div className="row">
            <div className="card col-md-6 offset-md-3">
            <div className="card-body ">
                {
                    pageTitle()
                }
                <form>
                    <div className="form-group mb-2">
                        <label >First Name</label>
                        <input type="text"
                               className={`form-control ${errors.firstName? "is-invalid":""}`}
                               name="firstName"
                               value={firstName}
                               placeholder="Enter First Name"
                               onChange={handleFirstName}
                        />
                        {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}

                    </div>
                    <div className="form-group mb-2">
                        <label >Last Name</label>
                        <input type="text"
                               className={`form-control ${errors.lastName? "is-invalid":""}`}
                               name="lastName"
                               value={lastName}
                               placeholder="Enter Last Name"
                               onChange={handleLastName}
                        />
                        {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}

                    </div>

                    <div className="form-group mb-2">
                        <label >Email address</label>
                        <input type="email"
                               className={`form-control ${errors.email? "is-invalid":""}`}
                               placeholder="Enter email"
                               name="email"
                               value={email}
                               onChange={handleEmail}
                        />
                        {errors.email && <div className="invalid-feedback">{errors.email}</div>}

                    </div>

                    <button type="submit" className="btn btn-primary" onClick={saveOrUpdateEmployee}>Submit</button>
                </form>
            </div>
            </div>
            </div>

        </div>
    )
}