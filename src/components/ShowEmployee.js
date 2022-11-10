import React from 'react'
import Axios from 'axios'
import {useState} from 'react'

import './showEmployee.css'

//ICONS
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

//UPDATE FUNCTION
import { UpdateEmployee } from './UpdateEmployee';


// import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { responsivePropType } from 'react-bootstrap/esm/createUtilityClasses';







function ShowEmployee() {

    const [firstName , setfirstName] = useState("")
  const [lastName , setlastName] = useState(0)
  const [dateOfBirth , setdateOfBirth] = useState("")
  const [email , setemail] = useState("")
  const [phone , setphone] = useState(0)

  const [NewfirstName, setNewfirstName] = useState(0);
  const [NewlastName, setNewlastName] = useState(0);
  const [NewdateOfBirth, setNewdateOfBirth] = useState(0);
  const [Newemail, setNewemail] = useState(0);
  const [Newphone , setNewphone] = useState(0)

  const [EmployeeList , setEmployeeList] = useState([])

  const showEmployee = () =>{
    Axios.get("/allEmployees",{
    
  }).then((response)=>{setEmployeeList(response.data)})
  }
  const deleteEmployee = (empId) => {
    Axios.delete(`/delete/${empId}`).then((response) => {
      setEmployeeList(
        EmployeeList.filter((val) => {
          return val.empId !== empId
        })
      );
    });
  }; 

  const ViewEmployee = () =>{
    Axios.get(`/pdfDownload`,{responseType:'blob'}).then((response) =>{
      console.log(typeof(response.data))
      const url = window.URL.createObjectURL(new Blob ([response.data]))
      const link = document.createElement('a')
      link.href = url

      link.setAttribute('download','employeeView.pdf')

      document.body.appendChild(link)

      link.click()
    })
  }

  const ViewEmployeeById = (empId) =>{
    Axios.get(`/employee/${empId}`,{responseType:'blob'}).then((response) =>{
      console.log(typeof(response.data))
      const url = window.URL.createObjectURL(new Blob ([response.data]))
      const link = document.createElement('a')
      link.href = url
    link.setAttribute('download',`employeeView.pdf`)

      document.body.appendChild(link)

      link.click()
    })
  }


  return (
    <div className='MainContainer'>
         <div>
             <div className="containers-md">
                 <div class="row">
                        <div className="col-5">
                              <div className="col-5 offset-md-4 my-4 d-flex p-2 ">
                              
                                {/* <input className='' placeholder="Search"/> */}
                                    <button className='btn btn-success'  type='button' onClick={showEmployee}>Show Employee's</button>
                                          <button className='btn btn-outline-danger' onClick={ViewEmployee}><PictureAsPdfIcon/></button>
                              </div>
                        </div> 
                </div>
          </div>
      <div>
        <table className='table table-hover' id="DisplayRequest">
          <thead>
            <tr>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">DOB</th>
              <th scope="col">email ID</th>
              <th scope="col">Phone No</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          {EmployeeList.map((value,key) =><tbody>
            <tr>
              {EmployeeList.m}
          <td>{value.firstName}</td>
            <td>{value.lastName}</td>
            <td>{value.dateOfBirth}</td>
            <td>{value.email}</td>
            <td>{value.phone}</td>
            <td>
              <button className="btn btn-outline-danger" onClick={() => {ViewEmployeeById(value.empId)}} ><PictureAsPdfIcon/></button>
              <button className="btn btn-outline-primary" onClick={UpdateEmployee}><EditIcon /></button>
              <button className='btn btn-outline-danger' onClick={() => {deleteEmployee(value.empId)} }><DeleteIcon /></button>
            </td>
            </tr>
          </tbody>)}
        </table>
      </div>
      </div>
        </div>
  )
}

export default ShowEmployee