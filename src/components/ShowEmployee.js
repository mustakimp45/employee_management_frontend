import React from "react";
import Axios from "axios";
import { useState } from "react";

import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import { UpdateEmployee } from "./UpdateEmployee";

function ShowEmployee() {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState(0);
  const [dateOfBirth, setdateOfBirth] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState(0);

  const [NewfirstName, setNewfirstName] = useState(0);
  const [NewlastName, setNewlastName] = useState(0);
  const [NewdateOfBirth, setNewdateOfBirth] = useState(0);
  const [Newemail, setNewemail] = useState(0);
  const [Newphone, setNewphone] = useState(0);

  const [EmployeeList, setEmployeeList] = useState([]);

  const showEmployee = () => {
    Axios.get("/allEmployees", {}).then((response) => {
      setEmployeeList(response.data);
    });
  };

  const updateEmployee = (id) => {
    Axios.put(`/update/${id}`, {
      id: id,
      firstName: firstName,
      lastName: lastName,
      dateOfBirth: dateOfBirth,
      email: email,
      phone: phone,
    }).then((response) => {
      setEmployeeList(
        EmployeeList.map((value) => {
          return value.id === id
            ? {
                id: value.id,
                firstName: firstName,
                lastName: lastName,
                dateOfBirth: dateOfBirth,
                email: email,
                phone: phone,
              }
            : value;
        })
      );
    });
  };

  const deleteEmployee = (id) => {
    Axios.delete(`/delete/${id}`).then((response) => {
      setEmployeeList(
        EmployeeList.filter((value) => {
          return value.id !== id;
        })
      );
    });
  };

  return (
    <div>
      <div>
        <div className="containers-md"></div>
        <div class="row">
          <div class="col-5"></div>
          <div class="col-5 offset-md-4 grid">
            <button
              className="btn btn-success"
              type="button"
              onClick={showEmployee}
            >
              Show Employee's
            </button>
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
                    {/* <button className="btn btn-outline-primary" onClick={() => {ViewEmployee(value.id)}} ><VisibilityIcon /></button> */}
                    <button
                      className="btn btn-outline-primary"
                      onClick={updateEmployee(value.id)}
                    >
                      <EditIcon />
                    </button>
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => {
                        deleteEmployee(value.id);
                      }}
                    >
                      <DeleteIcon />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <div></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShowEmployee;
