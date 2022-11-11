import React from "react";
import { useState } from "react";
//import './App.css'
import Axios from "axios";
import styled from "styled-components";
import "./Home.css";
import img1 from "./image/ems1.png";

import ShowEmployee from "./components/ShowEmployee";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

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

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export default function Home() {

  // const ViewEmployee = ({ isShowLogin }, id) => {
  //   Axios.get(`http://localhost:3001/viewEmployee`, {}).then((response) => {
  //     <div className={`${!isShowLogin ? "active" : ""} show`}>
  //       <div className="Login-form">
  //         <div className="form-box solid">
  //           <table className="table table-hover">
  //             <tbody>
  //               <tr>{setEmployeeList(response.data.e_name)}</tr>
  //             </tbody>
  //           </table>
  //         </div>
  //       </div>
  //     </div>;
  //   });
  // };

  return (
    <div className="">
      <div>
        <div className="float-start  col-6 text-center show_word ">
          <div className=" col-10 mx-5 shadow ">
            <h1 className="hometext ">EMPLOYEE MANAGEMENT</h1>
            <h1 className="hometext">SYSTEM</h1>
          </div>
          {/* <div>
            <button className="btn btn-primary">see</button>
          </div> */}
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

      {/* <ShowEmployee /> */}
    </div>
  );
}
