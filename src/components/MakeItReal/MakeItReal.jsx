import air from "../Images/airwhite.jpg"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/Button"
import { Checkbox } from "@/components/ui/checkbox"





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
    const [appear, setAppear] = useState({
        Lengueta: false,
        Puntera: false,
        LateralInterno: false,
        LateralExterno: false,
        Talon: false,
        Suela: false,
        LogoLengueta: false,
        LogosLaterales: false,
        LogoSuela: false,
        LogoTalon: false,
        Cordones: false,

    })

    const handleCheckboxChange = (name) => {
        setAppear((prevAppear) => ({
            ...prevAppear,
            [name]: !prevAppear[name],
        }));
    };
    


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCustom({ ...custom, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(appear.Lengueta);
    };

   
    return (
        <div className="flex flex-col lg:flex-row w-full">
            <div className="lg:w-1/2 p-8 flex flex-col items-center mb-4 mt-4 py-4 px-4 mx-4 my-4">

                <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">SNEAKERS <span className="text-blue-600 dark:text-blue-500">ÚNICAS</span>.</h1>
                <p className="text-2xl font-bold text-gray-500 lg:text-2xl dark:text-gray-400">Para gente <span className="text-blue-600 dark:text-blue-500 font-bold">ÚNICA</span>.</p>

                <div className="flex items-center space-x-2 mt-4 mb-4">
                    {Object.keys(appear).map((optionName, index) => (
                        <div key={index}>
                            <Checkbox
                                id={optionName}
                                value={true}
                                onClick={() => handleCheckboxChange(optionName)}
                                name={optionName}
                                
                            />
                            <label
                                htmlFor={optionName}
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                {optionName}
                            </label>
                        </div>
                    ))}
                </div>





                <img src={air} alt="Air White" className="max-w-[80%]" />
            </div>
            <div className="lg:w-1/2 bg-white p-8 max-h-[90%]">
            
                {appear.Lengueta ? <div>
                    <h1>Lengueta:</h1>
                    <Input
                        name="Lengueta"
                        value={custom.Lengueta}
                        onChange={handleInputChange}
                    />
                    <br />
                </div>: null}
        
               
              {appear.Puntera ? <div>  <h1>Puntera:</h1>
                <Input name="Puntera" value={custom.Puntera} onChange={handleInputChange} />
                <br /></div> : null}
                
                {appear.LateralInterno ? <div><h1>Lateral interno:</h1>
                <Input name="LateralInterno" value={custom.LateralInterno} onChange={handleInputChange} />
                <br /></div> : null}
                {appear.LateralExterno ? <div><h1>Lateral externo:</h1>
                <Input name="LateralExterno" value={custom.LateralExterno} onChange={handleInputChange} />
                <br /></div> : null}
               {appear.Talon ? <div> <h1>Talón:</h1>
                <Input name="Talon" value={custom.Talon} onChange={handleInputChange} />
                <br /></div> : null}
                {appear.Suela ? <div><h1>Suela:</h1>
                <Input name="Suela" value={custom.Suela} onChange={handleInputChange} />
                <br /></div>: null}
               {appear.LogoLengueta ? <div> <h1>Logo lengueta: </h1>
                <Input name="LogoLengueta" value={custom.LogoLengueta} onChange={handleInputChange} />
                <br /></div>: null}
                {appear.LogosLaterales ? <div><h1>Logos laterales:</h1>
                <Input name="LogosLaterales" value={custom.LogosLaterales} onChange={handleInputChange} />
                <br /></div> : null}
               {appear.LogoSuela ? <div> <h1>Logo suela:</h1>
                <Input name="LogoSuela" value={custom.LogoSuela} onChange={handleInputChange} />
                <br /></div> : null}
               {appear.LogoTalon ? <div> <h1>Logo talón:</h1>
                <Input name="LogoTalon" value={custom.LogoTalon} onChange={handleInputChange} />
                <br /></div>: null}
                {appear.Cordones ? <div><h1>Cordones:</h1>
                <Input name="Cordones" value={custom.Cordones} onChange={handleInputChange} />
                <br /></div> : null}
                <Button onClick={handleSubmit} >SUBMIT</Button>
            </div>
        </div>
    );
}

export default MakeItReal;
