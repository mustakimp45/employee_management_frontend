import React from "react";

import SearchBar from "./components/SearchBar";
import BookData from "./Data.json";

export default function Home() {
  return (
    <div>
      <SearchBar placeholder="Enter a Book Name..." data={BookData}/>
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
