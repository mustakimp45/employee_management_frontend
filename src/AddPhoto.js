import React from "react";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function AddPhoto() {
  const { id } = useParams();
  const [file, setFile] = useState();

  function handleChange(event) {
    setFile(event.target.files[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let data = new FormData();
    data.append("file", file);
    data.append("empId", id);

    axios
      .post(`/upload/${id}`, data)
      .then((response) => {
        console.log(response.data);
        console.log("photo is working ");
        alert("Photo Saved successfuly ");
      })
      .catch((error) => {
        alert(error);
      });
  }

  return (
    <div className="Container  text-center my-4 ">
      <div className="border col-md-6 offset-md-3 text-center  my-4 shadow">
        <form onSubmit={handleSubmit} className="flex-center my-4">
          <h2>UPLOAD PHOTO</h2>
          <div className="border col-md-8 offset-md-2 text-center my-3">
            <input type="file" onChange={handleChange} />
            <button type="submit">Upload</button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default AddPhoto;
