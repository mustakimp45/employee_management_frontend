import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import SearchBar from "./components/SearchBar";
// import BookData from "./Data.json";

<<<<<<< HEAD
import AddUser from "./AddUser";
import Home from "./Home";

=======
// import SearchBar from "./components/SearchBar";
// import BookData from "./Data.json";

import AddUser from './AddUser';
import Home from './Home';
//WORKING ON FEEDBACK & ABOUT
>>>>>>> a396af8905b01d3f9969e5311b16bb6a0191954f
function App() {
  return (
    <Router>
      <Navbar />
      {/* <SearchBar placeholder="Enter a Book Name..." data={BookData} /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AddUser" element={<AddUser />} />
<<<<<<< HEAD
        <Route path="/contact" element={<Home />} />
        <Route path="/about" />
=======
         <Route path="/contact" /> {/* Add the feedback page  */}
        <Route path="/about" /> {/* the present of the work we have did in the project and roles  */}
>>>>>>> a396af8905b01d3f9969e5311b16bb6a0191954f
      </Routes>
    </Router>
  );
}

export default App;
