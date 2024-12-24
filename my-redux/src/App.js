import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Favorites from "./pages/Favorites";
import moviesReducer from "../features/movies/moviesSlice";


const App = () => {
  return (
    <Router>
      <div className="app">
        {/* Navigation Bar */}
        <Navbar />

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<Details />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
