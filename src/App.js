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
<<<<<<< HEAD
=======
import Viewphoto from "./Viewphoto";
>>>>>>> 91166ebf997f0dcf4bd7f216e3562d26a660cb45
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
<<<<<<< HEAD
        {/* the present of the work we have did in the project and roles  */}
=======
        <Route path="/Viewphoto/:id" element={<Viewphoto />} />
>>>>>>> 91166ebf997f0dcf4bd7f216e3562d26a660cb45
      </Routes>
    </Router>
  );
}

export default App;
