import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import SearchBar from "./components/SearchBar";
// import BookData from "./Data.json";

// import SearchBar from "./components/SearchBar";
// import BookData from "./Data.json";

import AddUser from "./AddUser";
import Home from "./Home";
import UpdateEmployee from "./components/UpdateEmployee";
import ShowEmployee from "./components/ShowEmployee";
import AddPhoto from "./AddPhoto";
import Viewphoto from "./Viewphoto";
//WORKING ON FEEDBACK & ABOUT
function App() {
  return (
    <Router>
      <Navbar />
      {/* <SearchBar placeholder="Enter a Book Name..." data={BookData} /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AddUser" element={<AddUser />} />
        {/* Add the feedback page  */}
        {/* <Route path="/contact" /> 
        <Route path="/about" /> */}
        <Route path="/ViewEmp" element={<ShowEmployee />} />
        <Route path="/UpdateEmployee/:id" element={<UpdateEmployee />} />
        <Route path="/AddPhoto/:id" element={<AddPhoto />} />
        <Route path="/Viewphoto/:id" element={<Viewphoto />} />
        {/* the present of the work we have did in the project and roles  */}
      </Routes>
    </Router>
  );
}

export default App;
