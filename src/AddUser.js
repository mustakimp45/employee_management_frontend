import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./AddUser.css";
import axios from "axios";

export default function AddUser() {
  //initialising the initial value as null
  const initialValues = {
    firstname: "",
    lastname: "",
    dob: "",
    email: "",
    phone: "",
    photo: "",
  };

  //creating state for formValue . FormError , Submit
  const [formValue, setformValue] = useState(initialValues);
  const [formError, setformError] = useState({});
  const [isSubmit, setisSubmit] = useState(false);

  //function to handle the change by user , like change in input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setformValue({ ...formValue, [name]: value });
    console.log(formValue);
  };

  //function for submitting the form after validating
  const handleSubmit = (e) => {
    e.preventDefault();
    setformError(validate(formValue));
    setisSubmit(true);

    //sending data to backend

    const firstname = e.target.firstname.value;
    const lastname = e.target.lastname.value;
    const dob = e.target.dob.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const photo = e.target.photo.value;

    const data = { firstname, lastname, dob, email, phone, photo };

    axios
      .post("/register", {data})
      .then((response) => {
        console.log(response);
        e.target.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //useEffect for render only when change in formValue ,
  //formValue as dependency
  useEffect(() => {
    console.log(formError);
    if (Object.keys(formError).length === 0 && isSubmit) {
      console.log(formValue);
    }
  }, [formError]);

  // function to reset form
  const reset = () => {
    setformValue({ ...initialValues });
  };

  //function for validating input fields
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
      errors.dob = "date of birth is required";
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

  // const addEmployee = () => {
  //   Axios.post("http://localhost:3001/create", {
  //     e_name: e_name,
  //     e_age: e_age,
  //     country: country,
  //     position: position,
  //     salary: salary,
  //   }).then(() => {});
  // };

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
                    <p className="mt-1 text-center">{formError.firstname}</p>
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
                    <p className="mt-1 text-center">{formError.lastname}</p>
                  </div>

                  <div className="field mb-2">
                    <label>DATE OF BIRTH</label>
                    <input
                      type="date"
                      name="dob"
                      pattern="\d{1,2}/\d{1,2}/\d{4}"
                      placeholder="date of birth"
                      className="form-control"
                      value={formValue.dob}
                      onChange={handleChange}
                    />
                    <p className="mt-1 text-center">{formError.dob}</p>
                  </div>

                  <div className="field mb-2">
                    <label>EMAIL</label>
                    <input
                      type="email"
                      name="email"
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                      placeholder="Example@gmail.com"
                      className="form-control"
                      value={formValue.email}
                      onChange={handleChange}
                    />
                    <p className="mt-1 text-center">{formError.email}</p>
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
                    <p className="mt-1 text-center">{formError.phone}</p>
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
                    <p className="mt-1 text-center">{formError.photo}</p>
                  </div>
                  <div className="text-center my-3">
                    <NavLink className="btn btn-danger " to="/">
                      Cancel
                    </NavLink>
                    <button
                      className="btn btn-success mx-2 btn-lg "
                      type="submit"
                      // onClick={addEmployee}
                    >
                      Submit
                    </button>
                    <button
                      className="btn btn-warning "
                      type="reset"
                      onClick={reset}
                    >
                      Reset
                    </button>
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
