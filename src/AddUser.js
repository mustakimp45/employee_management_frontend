import React from "react";
import { useState, useEffect } from "react";

import Axios from "axios";
import "./AddUser.css";

export default function AddUser() {
  const initialValues = {
    firstname: "",
    lastname: "",
    dob: "",
    email: "",
    phone: "",
    photo: "",
  };

  const [formValue, setformValue] = useState(initialValues);
  const [formError, setformError] = useState({});
  const [isSubmit, setisSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformValue({ ...formValue, [name]: value });
    console.log(formValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setformError(validate(formValue));
    setisSubmit(true);
  };

  useEffect(() => {
    console.log(formError);
    if (Object.keys(formError).length === 0 && isSubmit) {
      console.log(formValue);
    }
  }, [formError]);

  const validate = (value) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!value.firstname) {
      errors.firstname = "firstname is required";
    }
    if (!value.lastname) {
      errors.lastname = "lastname is required";
    }
    if (!value.dob) {
      errors.dob = "dob is required";
    }
    if (!value.email) {
      errors.email = "email is required";
    } else if (!regex.test(value.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!value.phone) {
      errors.phone = "phone number is required";
    } else if (value.phone.length < 10) {
      errors.phone = "phone number must be 10 digit";
    }
    if (!value.photo) {
      errors.photo = "photo is required";
    }
    return errors;
  };

  const addEmployee = () => {
    Axios.post("/register", {
      
    }).then(() => {console.log("empty test")});
  };

  return (
    <div>
      <div className="container ">
        <div className="row">
          <div className="col ">
            <div className="col-md-4 offset-md-4 border border-secondary my-2 rounded   grid">
              <div className="form-group border rounded my-3 mx-3 formBackground ">
                <form onSubmit={handleSubmit} className="my-3 mx-3">
                  <div>
                    <header className="text-center">
                      <h3>REGISTER </h3>
                    </header>
                  </div>
                  <div className="field mb-2">
                    <label>FIRST NAME</label>
                    <input
                      type="text"
                      name="firstname"
                      pattern="[a-zA-Z]{4,}"
                      placeholder="first Name"
                      className="form-control"
                      value={formValue.firstname}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="field mb-2">
                    <label>LAST NAME</label>
                    <input
                      type="text"
                      name="lastname"
                      pattern="[a-zA-Z]{4,}"
                      placeholder="last Name"
                      className="form-control"
                      value={formValue.lastname}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="field mb-2">
                    <label>DATE OF BIRTH</label>
                    <input
                      type="date"
                      name="dob"
                      placeholder="date of birth"
                      className="form-control"
                      value={formValue.dob}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="field mb-2">
                    <label>EMAIL</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Example@gmail.com"
                      className="form-control"
                      value={formValue.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="field mb-2">
                    <label>PHONE NUMBER</label>
                    <input
                      type="text"
                      name="phone"
                      pattern="[1-9]{1}[0-9]{9}"
                      placeholder="Enter your 10 digit number"
                      className="form-control"
                      value={formValue.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="field mb-2">
                    <label>PHOTO</label>
                    <input
                      type="file"
                      name="photo"
                      placeholder="Upload Photo"
                      className="form-control"
                      value={formValue.photo}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="text-center my-3">
                    {/* <button className="btn btn-danger  " type="cancel">
                      Cancel
                    </button> */}
                    <button
                      className="btn btn-success mx-2  "
                      type="submit"
                      onClick={addEmployee}
                    >
                      Submit
                    </button>
                    {/* <button className="btn btn-warning " type="reset">
                      Reset
                    </button> */}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <h3>
Input Tags has to have sumbit button with API Calls for the sumbit
Button
</h3>
<h3> A Cancel button to close the current instance</h3>
<h3>no Null values are allowed to sumbit the database</h3>
<h3>
validation for the Date Picker & name should not be allow the text type
</h3>
<h3>
add the hooks to show the instance change if the user already existing
or the phone number not correct it should be 10 digits
</h3>
<h3>Add User To add Every Input Tags with validation by anoop</h3> */
}
