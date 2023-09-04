import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home/home";
import { Button } from "@/components/ui/button"
import NavBar from "./components/NavBar/navbar"
import Models from "./components/Models/Models";
import AboutUs from "./components/AboutUs/AboutUs";
import MakeItReal from "./components/MakeItReal/MakeItReal";
import AboutUs from "./components/AboutUs/AboutUs";


function App() {

  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== '/' && <NavBar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/makeitreal" element={<MakeItReal/>} />
        <Route path="/models" element={<Models />} />
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/makeitreal" element={<MakeItReal />} />
        
      </Routes>
    </div>
  )
}

export default App
