import axios from 'axios';
import React, { useState, useEffect } from 'react'

const EMPLOYEE = "http://localhost:8080/api/v1/employees";

export const Api = async () => {
    const [data, setdata] = useState([])
    useEffect(() => {
        axios.get(EMPLOYEE)
        .then(response => setdata(response.data))
        .catch(error => console.log(error))
    }, []);

    return data;
};