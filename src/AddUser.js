import React from "react";
import {useState} from 'react'
//import './App.css'
import Axios from 'axios'
import'./AddUser.css'

export default function AddUser() {

  const [e_name , setName] = useState("")
  const [e_age , setAge] = useState(0)
  const [country , setCountry] = useState("")
  const [position , setPosition] = useState("")
  const [salary , setSalary] = useState(0)

  const addEmployee = () =>{
    Axios.post("http://localhost:3001/create",{
      e_name :e_name,
      e_age:e_age,
      country:country,
      position:position,
      salary:salary
    }).then(()=>{
      
     })}


  return (
  <div>   
      <div className="container">
      <div className="row">
      <div className="col">
      <div className="col-6">
    <div className ="form-group">
<form>
<input type ="text" placeholder="First Name" className='form-control' onChange={(e) =>{setName(e.target.value)}}/>

<input type ="number" placeholder="Age" className='form-control' onChange={(e) =>{setAge(e.target.value)}}/>

<input type ="text" placeholder="Country" className='form-control' onChange={(e) =>{setCountry(e.target.value)}} />

<input type ="text" placeholder="Position" className='form-control' onChange={(e) =>{setPosition(e.target.value)}}/>

<input type ="number" placeholder="Salary(CTC)" className='form-control' onChange={(e) =>{setSalary(e.target.value)}}/>

 <button className="btn btn-success" type='button' onClick={addEmployee}>Submit</button>
 </form>    
       </div>
      </div>
      </div>
        </div> 
      </div> 
    <h3>Input Tags has to have sumbit button with API Calls for the sumbit Button</h3>
    <h3> A Cancel button to close the current instance</h3>
    <h3>no Null values are allowed to sumbit the database</h3>
    <h3>validation for the Date Picker & name should not be allow the text type</h3>
    <h3>add the hooks to show the instance change if the user already existing or the phone number not correct it should be 10 digits</h3>
    <h3>Add User To add Every Input Tags with validation by anoop</h3>
  </div>)
}
