import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route ,Routes} from 'react-router-dom';
import Navbar1 from "./Components/Navbar"
import Main from "./Pages/Main"
import './index.css'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  );
}
export default App;
