import React from "react";
import { useState } from "react";
import axios from "axios";
import { useParams, NavLink, useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddPhoto() {
  const { id } = useParams();
  const [file, setFile] = useState();
  const [preview, setPreview] = useState();
  const navigate = useNavigate();

  function handleChange(event) {
    setFile(event.target.files[0]);
    setPreview(URL.createObjectURL(event.target.files[0]));
  }

  function handleSubmit(event) {
    event.preventDefault();
    let data = new FormData();
    data.append("file", file);
    data.append("empId", id);

    axios
      .post(`/setProfilePicture/${id}`, data)
      .then((response) => {
        console.log(response.data);
        console.log("photo is working ");
        toast.success("Photo Saved successfuly ");
        setTimeout(() => {
          navigate("/viewEmp");
        }, 3000);
      })

      .catch((error) => {
        toast.error(error);
      });
  }

  return (
    <div className="Container  text-center my-4 ">
      <div className="border col-md-6 offset-md-3 text-center  my-4 shadow ">
        <form onSubmit={handleSubmit} className="flex-center my-4">
          <h2>UPLOAD PHOTO</h2>
          <div className="border col-md-8 offset-md-2 text-center my-3">
            <input className="my-1  " type="file" onChange={handleChange} />
            <img style={{ width: "30%", height: "35%" }} src={preview} />
          </div>
          <div>
            <NavLink className="btn btn-danger  my-3 " to="/ViewEmp">
              <ArrowBackIcon /> Back
            </NavLink>
            <button className="btn btn-success mx-3" type="submit">
              <FileUploadIcon /> Upload
            </button>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}
export default AddPhoto;
