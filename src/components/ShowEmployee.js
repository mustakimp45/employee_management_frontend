import React from "react";
import Axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import CameraAltRoundedIcon from "@mui/icons-material/CameraAltRounded";
import AddAPhotoSharpIcon from "@mui/icons-material/AddAPhotoSharp";
import ImageSearchIcon from "@mui/icons-material/ImageSearch";
import PanoramaIcon from "@mui/icons-material/Panorama";

function ShowEmployee() {
  const [EmployeeList, setEmployeeList] = useState([]);

  const showEmployee = () => {
    Axios.get("/allEmployees", {}).then((response) => {
      setEmployeeList(response.data);
    });
  };

  const deleteEmployee = (empId) => {
    Axios.delete(`/delete/${empId}`).then((response) => {
      setEmployeeList(
        EmployeeList.filter((value) => {
          return value.empId !== empId;
        })
      );
      alert("succesfully deleted");
    });
    alert("DO YOU WANT TO DELETE PERMANENTLY?");
  };

  //PDF FOR INDIVIDUAL EMPLOYEE
  const pdfEmployee = (empId) => {
    console.log("pdf of one employee is working");
    Axios.get(`/employee/${empId}`, { responseType: "blob" }).then(
      (response) => {
        console.log(typeof response.data);
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `employee-${empId}.pdf`);
        document.body.appendChild(link);
        link.click();
      }
    );
  };

  //PDF FOR ALL EMPLOYEE

  const pdfAllEmployee = () => {
    console.log("all employee pdf is working ");
    Axios.get(`/pdfDownload`, { responseType: "blob" }).then((response) => {
      console.log(typeof response.data);
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "AllEmployeeList.pdf");
      document.body.appendChild(link);
      link.click();
    });
  };

  const photoEmployee = () => {
    console.log("photo is working ");
  };

  return (
    <div>
      <div>
        <div className="containers-md"></div>
        <div class="row">
          <div class="col-5"></div>
          <div class="col-5 offset-md-4 grid my-2 mx-3">
            <button
              className="btn btn-success"
              type="button"
              onClick={showEmployee}
            >
              ViewEmp <VisibilityIcon />
            </button>
            <button
              className="btn btn-info float-end "
              type="button"
              onClick={pdfAllEmployee}
            >
              EmpDetails
              <DownloadForOfflineIcon />
            </button>
          </div>
          <div class="col"></div>
        </div>

        <div>
          <table
            className=" container table table-hover border shadow"
            id="DisplayRequest"
          >
            <thead className="text-center">
              <tr>
                <th scope="col">EmpId</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">DOB</th>
                <th scope="col">email ID</th>
                <th scope="col">Phone No</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            {EmployeeList.map((value, key) => (
              <tbody className="text-center">
                <tr>
                  <td>{value.empId}</td>
                  <td>{value.firstName}</td>
                  <td>{value.lastName}</td>
                  <td>{value.dateOfBirth}</td>
                  <td>{value.email}</td>
                  <td>{value.phone}</td>
                  <td>
                    {/* <button className="btn btn-outline-primary" onClick={() => {ViewEmployee(value.id)}} ><VisibilityIcon /></button> */}

                    {/* {edit button} */}
                    <Link
                      className="btn btn-outline-primary"
                      to={`/UpdateEmployee/${value.empId}`}
                    >
                      <EditIcon />
                    </Link>

                    <button
                      className="btn btn-outline-danger mx-1"
                      onClick={() => {
                        deleteEmployee(value.empId);
                      }}
                    >
                      <DeleteIcon />
                    </button>

                    <button
                      className="btn btn-outline-danger"
                      onClick={() => {
                        pdfEmployee(value.empId);
                      }}
                    >
                      <PictureAsPdfIcon />
                    </button>
                    <Link
                      className="btn btn-outline-primary mx-1"
                      to={`/AddPhoto/${value.empId}`}
                    >
                      <AddAPhotoSharpIcon />
                    </Link>
                    <Link
                      className="btn btn-outline-primary "
                      to={`/Viewphoto/${value.empId}`}
                    >
                      <PanoramaIcon />
                    </Link>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
          <div>
            <div className=" text-center footer text-light ">
              <h6 className="my-3">@Estuate Inc</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowEmployee;
