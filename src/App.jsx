import React from "react";
import { Route,Routes,BrowserRouter } from "react-router-dom";
import Aiplanner from "./pages/Aiplanner";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/aiplanner" element={<Aiplanner />}/>
       </Routes>
    </BrowserRouter>
    
  );
}

export default App;
