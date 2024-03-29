import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home/home";
import { Button } from "@/components/ui/button"
import NavBar from "./components/NavBar/navbar"
import Models from "./components/Models/Models";
import AboutUs from "./components/AboutUs/AboutUs";
import MakeItReal from "./components/MakeItReal/MakeItReal";
import  Dashboard  from "./components/Dashboard/Dashboard";
import DetailDash from "./components/Dashboard/DetailDash";
import PostDash from "./components/Dashboard/PostDash";


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

        //Dashboard routes
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/:orderId" element={<DetailDash />} />
        <Route path="/dashboard/post" element={<PostDash />} />

        
      </Routes>
    </div>
  )
}

export default App
