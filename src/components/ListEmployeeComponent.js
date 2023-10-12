import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import {Api} from '../services/EmployeeService'

const ListEmployeeComponent = () => {

    const EMPLOYEE = "http://localhost:8080/api/v1/employees";

    const [data, setdata] = useState([])
    useEffect(() => {
        axios.get(EMPLOYEE)
        .then(response => setdata(response.data))
        .catch(error => console.log(error))
    }, []);
    

    const handleDelete = async(id) => {
        try {
            await axios.delete(EMPLOYEE + "/" + id)  // index 46
            window.location.reload()
        } catch(err) {
            console.log(err)
        }
    }

    console.log(data)
  
    return (
      <div>
          <h2 className="text-center">Employees List</h2>
          <Link to="/add-employee">
            <div className="row">
                  <button className="btn btn-primary" >Add Employee</button>
            </div>
          </Link>
          <br></br>
          <div className="row">
              <table className="table table-striped table-bordered">

                  <thead>
                      <tr>
                          <th> Employee First Name</th>
                          <th> Employee Last Name</th>
                          <th> Employee Email Id</th>
                          <th> Actions</th>
                      </tr>
                  </thead>
                  <tbody>  
                      {
                          data.map((employee, idx) => {
                              return <tr key={idx}>
                                  <td> {employee.firstName} </td>
                                  <td> {employee.lastName}</td>
                                  <td> {employee.emailId}</td>
                                  <td>
                                      <button className="btn btn-info"><Link to={`/update-employee/${employee.id}`}>Update</Link></button>
                                      <button style={{ marginLeft: "10px" }} className="btn btn-danger" onClick={()=>handleDelete(employee.id)}>Delete </button>
                                      <button style={{ marginLeft: "10px" }} className="btn btn-info">
                                        <Link to={`/view-employee/${employee.id}`} state={{ data: employee}}>View</Link>
                                    </button>
                                  </td>
                              </tr>
                          }
                          )
                      }
                  </tbody>
              </table>

          </div>
      </div>
  )
}

export default ListEmployeeComponent
