import React from "react";
import {useState} from 'react'
//import './App.css'
import Axios from 'axios'
import styled from "styled-components";

import showEmployee from './components/ShowEmployee'
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';



export const containers = styled.div`
  width: 100%;
  align-content:center;
  background-color: rgba(9, 53, 148);
  display: flex;
  flex-direction: column;
  @media (min-width: 700px) {
    height: 80px;
  }
`;

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export default function Home() {

  const [EmployeeList , setEmployeeList] = useState([])


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

  const showEmployee = () =>{
    Axios.get("http://localhost:3001/showEmployee",{
    
  }).then((response)=>{setEmployeeList(response.data)})
}

const ViewEmployee =  ({isShowLogin},id) =>{
  Axios.get(`http://localhost:3001/viewEmployee`,{
  
  }).then((response) => {
    <div className={`${!isShowLogin ? "active" : ""} show`}>
      <div className="Login-form">
            <div className="form-box solid">
              <table className="table table-hover">
                  <tbody>
                    <tr>
                      {setEmployeeList(response.data.e_name )}
                    </tr>
                  </tbody>
              </table>
            </div>
      </div>
  </div>
  })
}

const updateEmployeeWage = (id) => {
  Axios.put("http://localhost:3001/update", {e_name : NewEname, salary: NewSalary, id: id }).then(
    (response) => {
      setEmployeeList(
        EmployeeList.map((value) => {
          return value.id === id
            ? {
                id: value.id,
                e_name: NewEname,
                e_age: value.e_age,
                country: value.country,
                position: value.position,
                salary: NewSalary,
              }
            : value;
        })
      );
    }
  );
};

const deleteEmployee = (id) => {
  // alert("This Will Be Permanently removed from DataBase")
  Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
    setEmployeeList(
      EmployeeList.filter((val) => {
        return val.id !== id;  
      })
    );
  });
};


  return (
    <div>
      <showEmployee />
      {/* <div className="containers">
      <SearchBar placeholder="Enter a Book Name..." data={BookData}/>
      </div>
      <div class="row">
    <div class="col">
    </div>
    <div class="col-5">
    <button className='btn btn-success'  type='button' onClick={showEmployee}>Show Employee's</button>
    </div>
    <div class="col"> 
    </div>
  </div>
      {EmployeeList.map((value,key) =><div>

        <table className='table table-hover' id="DisplayRequest">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Country</th>
              <th scope="col">Position</th>
              <th scope="col">Salary</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
          <td>{value.e_name}</td>
            <td>{value.e_age}</td>
            <td>{value.country}</td>
            <td>{value.position}</td>
            <td>{value.salary}</td>
            <td>
              <button className="btn btn-outline-primary" onClick={() => {ViewEmployee(value.id)}} ><VisibilityIcon /></button>
              <button className="btn btn-outline-primary" onClick={() => { updateEmployeeWage(value.id); } }><EditIcon /></button>
              <button className='btn btn-outline-danger' onClick={() => { deleteEmployee(value.id); } }><DeleteIcon /></button>
            </td>
            </tr>
          </tbody>
        </table>
        <div> */}
          {/* <input
            type="text"
            placeholder="Name"
            onChange={(event) => {
              setNewEname(event.target.value);
            } } />
          <input
            type="number"
            placeholder="Salary CTC"
            onChange={(event) => {
              setNewSalary(event.target.value);
            } } />

          <button className="btn btn-primary"
            onClick={() => {
              updateEmployeeWage(value.id);
            } }
          >{""}Update</button>
        
    <button className='btn btn-danger'onClick={() => {deleteEmployee(value.id);}}>
                   Delete
                    </button>  */}
        {/* </div>
      </div>)} */}
      <h3>
        * Home page to show the existing data from data base  </h3>
      <h3>* search bar the data by name</h3>  
       <h3>* Actions View button (View By PDF Form of the data & download the PDF)</h3>
       <h3>* update the existing data  (Alert As Updated)</h3>
     <h3> * delete the entire data row (Alert as Deleted) & Add Comment why to update the data</h3> 
      <h3> * Api request by sujith </h3>
    </div>
  );
}
