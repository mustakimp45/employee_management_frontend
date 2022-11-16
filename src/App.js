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

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AddUser" element={<AddUser />} />
        <Route path="/ViewEmp" element={<ShowEmployee />} />
        <Route path="/UpdateEmployee/:id" element={<UpdateEmployee />} />
        <Route path="/AddPhoto/:id" element={<AddPhoto />} />
        <Route path="/Viewphoto/:id" element={<Viewphoto />} />
      </Routes>
    </Router>
  );
}

export default App;
