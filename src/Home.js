import React from "react";
import styled from "styled-components";
import "./Home.css";
import img1 from "./image/ems1.png";

export const containers = styled.div`
  width: 100%;
  align-content: center;
  background-color: rgba(9, 53, 148);
  display: flex;
  flex-direction: column;
  @media (min-width: 700px) {
    height: 50px;
  }
`;

export default function Home() {
<<<<<<< HEAD
  const [EmployeeList, setEmployeeList] = useState([]);

  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState(0);
  const [dateOfBirth, setdateOfBirth] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState(0);

  const [NewfirstName, setNewfirstName] = useState(0);
  const [NewlastName, setNewlastName] = useState(0);
  const [NewdateOfBirth, setNewdateOfBirth] = useState(0);
  const [Newemail, setNewemail] = useState(0);
  const [Newphone, setNewphone] = useState(0);

  const showEmployee = () => {
    Axios.get("http://localhost:3001/showEmployee", {}).then((response) => {
      setEmployeeList(response.data);
    });
  };

  const ViewEmployee = ({ isShowLogin }, id) => {
    Axios.get(`http://localhost:3001/viewEmployee`, {}).then((response) => {
      <div className={`${!isShowLogin ? "active" : ""} show`}>
        <div className="Login-form">
          <div className="form-box solid">
            <table className="table table-hover">
              <tbody>
                <tr>{setEmployeeList(response.data.e_name)}</tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>;
    });
  };

  const updateEmployeeWage = (id) => {
    Axios.put("http://localhost:3001/update", {}).then((response) => {
      setEmployeeList(
        EmployeeList.map((value) => {
          return value.id === id ? {} : value;
        })
      );
    });
  };

  const deleteEmployee = (id) => {
    // alert("This Will Be Permanently removed from DataBase")
    Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
      setEmployeeList(
        EmployeeList.filter((val) => {
          return val.id !== id;
        })
      );
    });
  };

=======
>>>>>>> 91166ebf997f0dcf4bd7f216e3562d26a660cb45
  return (
    <div className="">
      <div>
        <div className="float-start  col-6 text-center show_word ">
          <div className=" col-10 mx-5 shadow ">
            <h1 className="hometext ">EMPLOYEE MANAGEMENT</h1>
            <h1 className="hometext">SYSTEM</h1>
          </div>
        </div>
        <div className="float-end my-4 mx-3 col-6 text-center show_image">
          <div>
            <img src={img1} className="img-thumbnail" />
          </div>
        </div>
      </div>
      <div className=" text-center footer text-light ">
        <h6 className="my-3">@Estuate Inc</h6>
      </div>
    </div>
  );
}
