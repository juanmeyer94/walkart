import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/home";
import { Button } from "@/components/ui/button"
import NavBar from "./components/NavBar/navbar"
import Models from "./components/Models/Models";
import AboutUs from "./components/AboutUs/AboutUs";


function App() {

  return (
    
   <div>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/models" element={<Models />} />
        <Route path="/aboutus" element={<AboutUs/>}/>
        
      </Routes>
    </div>
  )
}

export default App
