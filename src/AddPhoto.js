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

    //prerview
    // const reader = new FileReader()
    // reader.addEventListener('loadend', () =>{
    //   //console.log(reader.result);
    //   setFileData(reader.result);
    // });
    // reader.readAsDataURL(file);

    // let empId = id;
    // const config = {
    //   headers: {
    //     "content-type": "multipart/form-data",
    //   },
    // };
    axios
      .post(`/upload/${id}`, data)
      .then((response) => {
        console.log(response.data);
        console.log("photo is working ");
        alert("Photo Saved successfuly ");
      })
      .catch((error) => {
        // console.log(error);
        alert(error);
      });
  }

  return (
    <div className="Container  text-center my-4">
      <form onSubmit={handleSubmit} className="flex-center">
        <h1>Upload Employee Photo</h1>
        <input type="file" onChange={handleChange} />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}
export default AddPhoto;
