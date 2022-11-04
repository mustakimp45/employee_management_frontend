import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import SearchBar from "./components/SearchBar";
// import BookData from "./Data.json";

import AddUser from './AddUser';
import Home from './Home';

function App() {
  return (
    <Router>
      <Navbar />
      {/* <SearchBar placeholder="Enter a Book Name..." data={BookData} /> */}
      <Routes>
        <Route path="/" />
        <Route path="/AddUser" element={<AddUser />} />
        <Route path="/contact" element={<Home />}/>
        <Route path="/about" />
      </Routes>
    </Router>
  );
}

export default App;
