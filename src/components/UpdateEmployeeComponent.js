import axios from 'axios';
import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';

const UpdateEmployeeComponent = () => {

    // const EMPLOYEE = "http://localhost:8080/api/v1/employees";

    let navigate = useNavigate();
    const location = useLocation();  // useNavigate를 이용해 전송된 데이터를 받을 수 있다.

    const employeeId = location.pathname.split("/")[2]

    const [form, setForm] = useState({  // 적어야 할 기본 정보들
        firstName: '',
        lastName: '',
        emailId: '',
    });

    const handleChange = (e) => {
        const {name, value} = e.target; // 같이 둘 것 분류를 위해!
        setForm({
            ...form,  // 기본 + 추가 될 것들 모아둔 폼!! form => 제일 큰 배열에 추가
            [name]: value
        })
    }

    const handleUpdate = async (e) => {
        e.preventDefault();
        
        try{
            await axios.put("http://localhost:8080/api/v1/employees/" + employeeId, form)  // post로 보내기
            navigate("/") // 메인으로 넘겨준다
        } catch(err) {
            console.log(err)
        }         
    }
    
    console.log(form)

  return (
    <div>
    <br></br>
    <div className="container">
        <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
                <div className="card-body">
                    <form onSubmit={handleUpdate}>
                        <div className="form-group">
                            <label> First Name: </label>
                            <input 
                                  placeholder="First Name" 
                                  name="firstName" 
                                  className="form-control"
                                  value={form.firstName}
                                  onChange={handleChange}
                                  type='text'
                            />
                        </div>
                        <div className="form-group">
                            <label> Last Name: </label>
                            <input 
                                  placeholder="Last Name" 
                                  name="lastName" 
                                  className="form-control"
                                  value={form.lastName}
                                  onChange={handleChange}
                                  type='text'
                            />
                        </div>
                        <div className="form-group">
                            <label> Email Id: </label>
                            <input 
                                  placeholder="Email Address" 
                                  name="emailId" 
                                  className="form-control"
                                  value={form.emailId}
                                  onChange={handleChange}
                                  type='text'
                            />
                        </div>
                          <br/>
                        <button className="btn btn-success" type='submit'>Save</button>
                        <Link to="/">
                          <button className="btn btn-danger" style={{ marginLeft: "10px" }}>Cancel</button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>

    </div>
</div>
  )
}

export default UpdateEmployeeComponent
