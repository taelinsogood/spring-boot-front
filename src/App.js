import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';
import './App.css';

function App() { 

  return (
    <>
    <BrowserRouter>
      <HeaderComponent />
        <div className="container">
          <Routes>
            <Route path="/" element={<ListEmployeeComponent/>} />
            <Route path="/employees" element={<ListEmployeeComponent/>} />
            <Route path="/add-employee" element={<CreateEmployeeComponent />} />
            <Route path="/view-employee/:id" element={<ViewEmployeeComponent />} />
            <Route path = "/update-employee/:id" element={<UpdateEmployeeComponent />}></Route>
          </Routes>
        </div>
      <FooterComponent />
    </BrowserRouter>
    </>
  );
}

export default App;
