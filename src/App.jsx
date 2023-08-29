import { Button } from "@/components/ui/button"


function App() {

  return (
    <div className=" bg-gray-500 ">
      <div className="text-green-500 mt-8"> <h1 >HOLA MUNDO</h1></div>
      <button
                  className="select-none rounded-lg bg-teal-700 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mr-2"
                >
                  MY POSTS
                </button>
      <Button className="py-4 px-4" >TEST</Button>
    </div>
  )
}

export default App
