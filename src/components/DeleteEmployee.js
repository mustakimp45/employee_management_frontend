import React from "react";
import { useState } from "react";
import Axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
