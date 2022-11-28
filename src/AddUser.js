import React from "react";
import { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./AddUser.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AddUser() {
  const navigate = useNavigate();
  //initialising the initial value as null
  const initialValues = {
    empId: 0,
    estuate_ID: "",
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    phone: "",
  };
  //creating state for formValue . FormError , Submit
  const [formValue, setformValue] = useState(initialValues);
  const [formError, setformError] = useState({});
  const [isSubmit, setisSubmit] = useState(true);

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

    //sending data to backend

    let employee = {
      firstName: e.target.firstname.value,
      lastName: e.target.lastname.value,
      dateOfBirth: e.target.dob.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
    };
    axios
      .post("/register", employee)
      .then((response) => {
        console.log(response);
        e.target.reset();
        toast.success(`${response.data.firstName}-Sucessfully Added`);

        setTimeout(() => {
          navigate("/viewEmp");
        }, 3000); //5s
      })

      .catch((error) => {
        // console.log(error);
        toast.warn(error.response.data.errorCode);
      });
  };

  //useEffect for render only when change in formValue ,
  //formValue as dependency
  useEffect(() => {
    console.log(formError);
    if (Object.keys(formError).length === 0) {
    }
  }, [formError]);

  // function to reset form
  const reset = () => {
    setformValue({ ...initialValues });
  };

  //function for validating input fields
  const validate = (value) => {
    //age verification
    var dateofbirth = formValue.dob;
    var year = Number(dateofbirth.substring(0, 4));
    var month = Number(dateofbirth.substring(4, 2)) - 1;
    var day = Number(dateofbirth.substring(6, 2));
    var today = new Date();
    var age = today.getFullYear() - year;
    if (
      today.getMonth() < month ||
      (today.getMonth() == month && today.getDate() < day)
    ) {
      age--;
      console.log(age);
    }
    //=============================
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
    } else if (!(age > 18)) {
      toast.error((errors.dob = "Employee Must Be 18 year of Age"));
      setisSubmit(false);
    } else if (age > 18) {
      setisSubmit(true);
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
    return errors;
  };

  return (
    <>
      <div className="container ">
        <div className="row">
          <div className="col">
            <div className="col-md-4 offset-md-4 border border-secondary my-2 rounded  grid ">
              <div className="form-group border rounded my-3 mx-3 formBackground ">
                <form
                  onSubmit={handleSubmit}
                  className="my-3 mx-3 "
                  enctype="multipart/form-data"
                >
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
                      required
                      title="ENTER ONLY ALFABETS"
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
                      required
                      title="ENTER ONLY ALFABETS"
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
                      // pattern="\d{1,2}/\d{1,2}/\d{4}"
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
                      pattern="[A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
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
                      required
                      title="ENTER 10 DIGIT ONLY"
                      placeholder="Enter your 10 digit number"
                      className="form-control"
                      value={formValue.phone}
                      onChange={handleChange}
                    />
                    <p className="mt-1 text-center">{formError.phone}</p>
                  </div>

                  <div className="text-center my-3">
                    <NavLink className="btn btn-danger " to="/">
                      Cancel
                    </NavLink>

                    <button
                      className="btn btn-success mx-2 btn-lg "
                      type="submit"
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
                <ToastContainer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
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
