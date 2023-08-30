import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/home";
import { Button } from "@/components/ui/button"
import NavBar from "./components/NavBar/navbar"
import Models from "./components/Models/Models";


function App() {

  return (
    
   <div>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/models" element={<Models />} />
        
      </Routes>
    </div>
  )
}

export default App
