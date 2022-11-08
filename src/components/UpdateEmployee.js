import React from 'react'
import {useState} from 'react'
import Axios from 'axios'




export function UpdateEmployee() {
const [EmployeeList , setEmployeeList] = useState([])
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
    
  return (
    <div>UpdateEmployee</div>
  )
}

// export default UpdateEmployee