import React from "react";

import styled from "styled-components";

import SearchBar from "./components/SearchBar";
import BookData from "./Data.json";
  
export const container = styled.div`
  width: 100%;
  
  background-color: rgba(9, 53, 148);
  display: flex;
  flex-direction: column;
  @media (min-width: 700px) {
    height: 80px;
  }
`;

export default function Home() {
  return (
    <div>
      <div className="container">
      <SearchBar placeholder="Enter a Book Name..." data={BookData}/>
      </div>
      <h3>
        * Home page to show the existing data from data base  </h3>
      <h3>* search bar the data by name</h3>  
       <h3>* Actions View button (View By PDF Form of the data & download the PDF)</h3>
       <h3>* update the existing data  (Alert As Updated)</h3>
     <h3> * delete the entire data row (Alert as Deleted) & Add Comment why to update the data</h3> 
      <h3> * Api request by sujith </h3>
    </div>
  );
}
