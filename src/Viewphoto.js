import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DownloadIcon from "@mui/icons-material/Download";
import defaultImage from "./image/DefaultImage.png";

function Viewphoto() {
  const { id } = useParams();
  const [view, setView] = useState();
  // const defaultImage = <img src="http://localhost:8080/getImages/2"></img>;

  axios.get(`/getProfilePicture/${id}`).then((response) => {
    setView(response.data);
    // console.log(view);
  });

  function downloadphoto() {
    axios({
      url: `/getProfilePicture/${id}`,
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
    <div className="container col-md-6 offset-md-4 text-center ">
      <div className="border border-secondary shadow my-4 w-75 h-50 ">
        <div className=" ">
          <div className="col-md-6 offset-md-3 text-center border my-4 border-warning ">
            <div className="text-center ">
              {Viewphoto} <h3>Profile Picture</h3>
              <img
                className="img-thumbnail"
                src={`http://localhost:8080/getProfilePicture/${id}`}
                alt="NO IMAGE FOUND"
                onError={(event) => {
                  event.target.src = defaultImage;
                  event.onerror = null;
                }}
              />
            </div>
          </div>

          <div className=" ">
            <div className="text-center my-4">
              <NavLink className="btn btn-danger mx-2 " to="/ViewEmp">
                <ArrowBackIcon /> Back
              </NavLink>
              <button onClick={downloadphoto} className="btn btn-success">
                Photo <DownloadIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Viewphoto;
