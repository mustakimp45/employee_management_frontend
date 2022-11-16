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
