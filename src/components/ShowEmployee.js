import React from 'react'
import Axios from 'axios'
import {useState} from 'react'

import './showEmployee.css'

//ICONS
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

//UPDATE FUNCTION
import  UpdateEmployee  from './UpdateEmployee'

import { Link } from 'react-router-dom';

// commit 23f5c68534faf447312e2b3a49f5bdc2593d3525
// Author: Sujith Priyam <sujithpriyamrajan2709@gmail.com>
// Date:   Thu Nov 10 17:15:20 2022 +0530     

//     Pdf download Working


// commit ea69f3f42092012c54fb4fbf1ef6721e5de366b8
// Author: Sujith Priyam <sujithpriyamrajan2709@gmail.com>
// Date:   Thu Nov 10 17:22:19 2022 +0530     

//     commit render showemployee

function ShowEmployee() {

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

      link.setAttribute('download','AllEmployeeList.pdf')

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
    link.setAttribute('download',`employee-${empId}.pdf`)

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
                              <div className="col-5 offset-md-4 my-4 d-flex p-2  my-2 mx-3">
                                {/* <input className='' placeholder="Search"/> */}
                                    <button className='btn btn-success'  type='button' onClick={showEmployee}>Show Employee's</button>
                                          <button className='btn btn-outline-danger' onClick={ViewEmployee}><PictureAsPdfIcon/></button>
                              </div>
                        </div> 
                </div>
          </div>
          <div class="col"></div>
        </div>
        {EmployeeList.map((value, key) => (
          <div>
            <table className="table table-hover" id="DisplayRequest">
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
              <tbody>
                <tr>
                  <td>{value.firstName}</td>
                  <td>{value.lastName}</td>
                  <td>{value.dateOfBirth}</td>
                  <td>{value.email}</td>
                  <td>{value.phone}</td>
                  <td>
                    <button className="btn btn-outline-danger" onClick={() => {ViewEmployeeById(value.empId)}} ><PictureAsPdfIcon/></button>
                    {/* <button className="btn btn-outline-primary" to={`/UpdateEmployee/${value.empId}`}><EditIcon /></button> */}
                    <Link className='btn btn-outline-primary' to={`/UpdateEmployee/${value.empId}`}><EditIcon/></Link>
                    <button className="btn btn-outline-danger" onClick={() => {deleteEmployee(value.empId);}}><DeleteIcon /></button>
                  </td>
                </tr>
              </tbody>
            </table>
            <div></div>
          </div>
        ))}
      </div>
  )
}

export default ShowEmployee