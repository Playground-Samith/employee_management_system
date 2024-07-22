export const EmployeeForm = () => {
    return (

        <div className="container p-5">
            <div className="row">
            <div className="card col-md-6 offset-md-3">
            <div className="card-body ">
                <h2>Add Employee Form</h2>
                <form>
                    <div className="form-group mb-2">
                        <label >First Name</label>
                        <input type="text"
                               className="form-control"
                               name="firstName"
                               // value={firstName}
                               placeholder="Enter First Name"/>

                    </div>
                    <div className="form-group mb-2">
                        <label >Last Name</label>
                        <input type="text"
                               className="form-control"
                               name="lastName"
                            // value={firstName}
                               placeholder="Enter Last Name"/>

                    </div>

                    <div className="form-group mb-2">
                        <label >Email address</label>
                        <input type="email"
                               className="form-control"
                               placeholder="Enter email"
                               name="email"
                               // value={email}
                        />

                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
            </div>
            </div>

        </div>
    )
}