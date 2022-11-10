import React from 'react'
import {useState} from 'react'
import Axios from 'axios'




export function UpdateEmployee() {


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
  const updateEmployeeWage = (id) => {
        Axios.put("/update/{    }", {
      
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
    
  return (
    <div>
      UpdateEmployee
      {updateEmployeeWage}</div>
  )
}

// export default UpdateEmployee