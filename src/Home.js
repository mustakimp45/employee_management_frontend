import React from "react";
import SearchBar from "./components/SearchBar";
import BookData from "./Data.json";

export default function Home() {
  return (
    <div>
      <SearchBar placeholder="Enter a Book Name..." data={BookData} />
      Home
    </div>
  );
}
