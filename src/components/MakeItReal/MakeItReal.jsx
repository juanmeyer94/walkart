import air from "../Images/airwhite.jpg"
import { Input } from "@/components/ui/input"
import {Button} from "@/components/ui/Button"

import { useState } from "react";

const MakeItReal = () => {
    const [custom, setCustom] = useState({
        Status: false,
        Lengueta: "",
        Puntera: "",
        LateralInterno: "",
        LateralExterno: "",
        Talon: "",
        Suela: "",
        LogoLengueta: "",
        LogosLaterales: "",
        LogoSuela: "",
        LogoTalon: "",
        Cordones: "",
        images: {
            urls: []
        }

        
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCustom({ ...custom, [name]: value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(custom);
    };
    return (
        <div className="flex flex-col lg:flex-row w-full">
            <div className="lg:w-1/2p-8 flex items-center justify-center">
            <img src={air} alt="Air White" className="max-w-full h-auto" />
            </div>
            <div className="lg:w-1/2 bg-white p-8">
              <h1>Lengueta:</h1>
              <Input name="Lengueta" value={custom.Lengueta} onChange={handleInputChange} />
              <br />
              <h1>Puntera:</h1>
              <Input name="Puntera" value={custom.Puntera} onChange={handleInputChange}/>
              <br />
              <h1>Lateral interno:</h1>
              <Input name="LateralInterno" value={custom.LateralInterno} onChange={handleInputChange}/>
              <br />
              <h1>Lateral externo:</h1>
              <Input name="LateralExterno" value={custom.LateralExterno} onChange={handleInputChange}/>
              <br />
              <h1>Talón:</h1>
              <Input name="Talon" value={custom.Talon} onChange={handleInputChange}/>
              <br />
              <h1>Suela:</h1>
              <Input name="Suela" value={custom.Suela} onChange={handleInputChange} />
              <br />
              <h1>Logo lengueta: </h1>
              <Input name="LogoLengueta" value={custom.LogoLengueta} onChange={handleInputChange}/>
              <br />
              <h1>Logos laterales:</h1>
              <Input name="LogosLaterales" value={custom.LogosLaterales} onChange={handleInputChange}/>
              <br />
              <h1>Logo suela:</h1>
              <Input name="LogoSuela" value={custom.LogoSuela} onChange={handleInputChange}/>
              <br />
              <h1>Logo talón:</h1>
              <Input name="LogoTalon" value={custom.LogoTalon} onChange={handleInputChange}/>
              <br />
              <h1>Cordones:</h1>
              <Input name="Cordones" value={custom.Cordones} onChange={handleInputChange} />
              <br />
              <Button onClick={handleSubmit} >SUBMIT</Button>
            </div>
        </div>
    );
}

export default MakeItReal;
