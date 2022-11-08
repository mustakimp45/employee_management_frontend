import React from "react";
import {useState} from 'react'
//import './App.css'
import Axios from 'axios'
import styled from "styled-components";

import ShowEmployee from './components/ShowEmployee'
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
  Axios.put("http://localhost:3001/update", {

  }).then(
    (response) => {
      setEmployeeList(
        EmployeeList.map((value) => {
          return value.id === id
            ? {
               
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
      <ShowEmployee />
    </div>
  );
}
