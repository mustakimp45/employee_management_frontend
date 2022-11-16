import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DownloadIcon from "@mui/icons-material/Download";

function Viewphoto() {
  const { id } = useParams();
  const [view, setView] = useState();
  axios.get(`/getImages/${id}`).then((response) => {
    setView(response.data);
    console.log(view);
  });

  function downloadphoto() {
    axios({
      url: `/getImages/${id}`,
      method: "GET",
      responseType: "blob",
    }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "image.jpg");
      document.body.appendChild(link);
      link.click();
    });
  }

  return (
    <div className="container ">
      <div className="border shadow my-4">
        <div className="row-4 ">
          <div className="col-md-6 offset-md-3 text-center border my-4">
            <div className="text-center">
              {Viewphoto} <h3>Profile Picture</h3>
              <img
                className="img-thumbnail"
                src={`http://localhost:8080/getImages/${id}`}
              />
            </div>
          </div>

          <div className=" ">
            <div className="text-center my-4">
              <button onClick={downloadphoto} className="btn btn-success">
                Photo <DownloadIcon />
              </button>
              <NavLink className="btn btn-danger mx-4 " to="/ViewEmp">
                <ArrowBackIcon /> Back
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Viewphoto;
