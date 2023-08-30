import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/home";
import { Button } from "@/components/ui/button"
import NavBar from "./components/NavBar/navbar"


function App() {

  return (
    
   <div>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        
      </Routes>
    </div>
  )
}

export default App
