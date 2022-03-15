import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";

import Navbar from "./componenets/Navbar";
import Page1 from "./componenets/Page1";
import Page2 from "./componenets/Page2";
import Page3 from "./componenets/Page3";
import Page4 from "./componenets/Page4";
import Fullstackdeveloper from "./componenets/Utbildningar/Fullstackdeveloper";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} >
         < Route path="Fullstackdeveloper" element={<Fullstackdeveloper />} />
        </Route>
        <Route path="/page4" element={<Page4 />} />
      </Routes>
    </div>
  );
}

export default App;
