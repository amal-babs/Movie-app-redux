import React from "react";

import { BrowserRouter as Router, Route} from "react-router-dom";
import "./App.scss"
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
//import Footer from "./components/Footer/Footer";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import MovieDetail from "./components/MovieDetail/MovieDetail";

function App() {
  return (
    <div className="App">
      
      <Router>
        <Header></Header>
          <Route path="/"  component={Home} />
          <Route path="/movie/:imdbID" component={MovieDetail} />
          <Route path="*" component={PageNotFound} />
      </Router>
  
    </div>
  );
}

export default App;
