import * as React from "react";
// import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./components/HomePage/HomePage";
import './App.css';

function App() {
  return (
    <div className="app">
      <HomePage></HomePage>
      {/* <Router>
        <Routes>
          <Route path="/" element={}></Route>
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;
