import React from "react";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function AddPhoto() {
<<<<<<< HEAD

  const initialValues = {
    firstname: "",
    lastname: "",
    dob: "",
    email: "",
    phone: "",
    photo: "",
  };

  const { id } = useParams();
  const [file, setFile] = useState();
  const [formValue, setformValue] = useState(initialValues);
  const [fileData, setFileData] = useState();
=======
  const { id } = useParams();
  const [file, setFile] = useState();
>>>>>>> 91166ebf997f0dcf4bd7f216e3562d26a660cb45

  function handleChange(event) {
    setFile(event.target.files[0]);
  }

  function handleSubmit(event) {
<<<<<<< HEAD

=======
>>>>>>> 91166ebf997f0dcf4bd7f216e3562d26a660cb45
    event.preventDefault();
    let data = new FormData();
    data.append("file", file);
    data.append("empId", id);

<<<<<<< HEAD
    // let empId = id;
    // const config = {
    //   headers: {
    //     "content-type": "multipart/form-data",
    //   },
    // }
=======
>>>>>>> 91166ebf997f0dcf4bd7f216e3562d26a660cb45
    axios
      .post(`/upload/${id}`, data)
      .then((response) => {
        console.log(response.data);
        console.log("photo is working ");
<<<<<<< HEAD
        alert("Photo Saved successfuly ");}).catch((error) => {
        console.log(error);
        alert(error);
      });
    }
  function ViewImg(event) {
    event.preventDefault();
    axios.get(`/getImages/${id}`).then((response) =>{
     // console.log(typeof response)
      // console.log(response.data)

      // response.arrayBuffer().then(function (buffer) {
      //  // const url = window.URL.createObjectURL(new Blob([buffer]));
      //   const url = window.URL.createObjectURL(object);
      //   const link = document.createElement("a");
      //   link.href = url;
      //   link.download = "image.png";
      //   link.click()})

      const reader = new FileReader()
      reader.addEventListener('loadend', () =>{
        //console.log(reader.result);
        setFileData(reader.result);  
      });
      reader.readAsDataURL(file);
        const url = window.URL.createObjectURL(fileData);
        const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", `employee-${id}.png`);
          //link.download = "image.png";
           link.click()
    }).catch((error) =>{
      console.log(error)
    })
  }
  return (
    <div className="Container  text-center my-4">
      <div className="row justify-content-md-center">
      <form onSubmit={handleSubmit} className="flex-center">
        <h1 className="col-md-auto">React File Upload</h1>
        <input type="file" onChange={handleChange} />
        <button type="submit">Upload</button>
        <br></br>
        <span>
        <img src={fileData} className='border border-primary rounded-circle'></img>
        </span>
        <br></br>
       <button onClick={(e) =>{ViewImg(e)}}>view</button>
      </form>
=======
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
>>>>>>> 91166ebf997f0dcf4bd7f216e3562d26a660cb45
      </div>
    </div>
  );
}
export default AddPhoto;
