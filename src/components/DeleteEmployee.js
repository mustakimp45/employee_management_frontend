import React from 'react'
import {useState} from 'react'
import Axios from 'axios'
function DeleteEmployee() {

    const [EmployeeList , setEmployeeList] = useState([])

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
    <div>DeleteEmployee</div>
  )
}

export default DeleteEmployee