import React from "react";
import { useState } from "react";
import Axios from "axios";
function DeleteEmployee() {
  const [EmployeeList, setEmployeeList] = useState([]);

  const deleteEmployee = (id) => {
    Axios.delete(`/delete/${id}`).then((response) => {
      setEmployeeList(
        EmployeeList.filter((val) => {
          return val.id !== id;
        })
      );
    });
  };
  return (
    <div>
      DeleteEmployee
      {deleteEmployee()}
    </div>
  );
}

export default DeleteEmployee;
