import React from "react";
import Axios from "axios";
import { useState, useEffect } from "react";
import AddCircleOutlineTwoToneIcon from "@mui/icons-material/AddCircleOutlineTwoTone";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { json, useNavigate, useParams } from "react-router-dom";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";

function ArchivedEmp() {
  const navigate = useNavigate();
  const { empId } = useParams();
  const [EmployeeList, setEmployeeList] = useState([]);

  useEffect(() => {
    Axios.get("/allExEmployees", {}).then((response) => {
      setEmployeeList(response.data);
      console.log(JSON.stringify(response.data));
      console.log(typeof JSON.stringify(response.data));
      console.log(response.data);
      console.log(typeof response.data);
    });
  }, []);

  const rejoinEmployee = (empId) => {
    console.log("rejoin is working");
    Axios.post(`/rejoin/${empId}`)
      .then((response) => {
        console.log(response);
        console.log(empId);
        toast.success(`Sucessfully Rejoined`);
        setTimeout(() => {
          navigate("/viewEmp");
        }, 3000); //3s
      })
      .catch((error) => {
        toast.warn(error.response.data.errorCode);
      });
  };

  const downloadCsvFile = () => {
    console.log("csv is working ");
    Axios.get(`/exportToCSv`, { responseType: "blob" }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "ArchiveList.csv");
      document.body.appendChild(link);
      link.click();
    });
  };

  return (
    <div>
      <div className="shadow">
        <h2 className=" text-danger">RESIGNED EMPLOYEES</h2>
      </div>
      <div>
        <div className="containers-md"></div>
        <div class="row">
          <div class="col-5"></div>
          <div class="col-5 offset-md-4 grid my-1 mx-3">
            <button
              className="float-end btn btn-success shadow"
              onClick={downloadCsvFile}
            >
              <InsertDriveFileIcon /> ExtractDetails
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
                <th scope="col">EstId</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">DOB</th>
                <th scope="col">email ID</th>
                <th scope="col">Phone No</th>
                <th scope="col">Rejoin</th>
              </tr>
            </thead>
            {EmployeeList.map((value, key) => (
              <tbody className="text-center">
                <tr>
                  <td>EST-{value.empId}</td>
                  <td>{value.firstName}</td>
                  <td>{value.lastName}</td>
                  <td>{value.dateOfBirth}</td>
                  <td>{value.email}</td>
                  <td>{value.phone}</td>
                  <td>
                    <button
                      className="btn btn-outline-success mx-1"
                      onClick={() => {
                        rejoinEmployee(value.empId);
                      }}
                    >
                      <AddCircleOutlineTwoToneIcon color="action" />
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}

export default ArchivedEmp;
