import React from 'react'
import { useLocation } from 'react-router-dom';

const ViewEmployeeComponent = () => {

    const location = useLocation();
    const data = location.state.data;
    console.log(data)

  return (
      <div>
          <br></br>
          <div className="card col-md-6 offset-md-3">
              <h3 className="text-center"> View Employee Details</h3>
              <div className="card-body">
                  <div className="view-row">
                      <label> Employee First Name: </label>{"ㅤ"}
                      <div> { data.firstName }</div>
                  </div>
                  <div className="view-row">
                      <label> Employee Last Name: </label>{"ㅤ"}
                      <div> { data.lastName }</div>
                  </div>
                  <div className="view-row">
                      <label> Employee Email ID: </label>{"ㅤ"}
                      <div> { data.emailId }</div>
                  </div>
              </div>

          </div>
      </div>
  )
}

export default ViewEmployeeComponent
