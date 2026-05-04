import Error404 from "./components/pages/Error404"
import Inicio from "./components/pages/Inicio"
import Login from "./components/pages/Login"
import Footer from "./components/shared/Footer"
import Menu from "./components/shared/Menu"

function App() {

  return (
   <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col">
    <Menu/>
    <main className="container mx-auto">
    {/* <Inicio></Inicio> */}
    {/* <Error404></Error404> */}
    {/* <Login></Login> */}
    </main>
    <Footer/>
   </div>

  )
}

export default App
