import Error404 from "./components/pages/Error404";
import Inicio from "./components/pages/Inicio";
import Administrador from "./components/pages/Administrador";
import FormularioServicio from "./components/pages/FormularioServicio";
import Login from "./components/pages/Login";
import Footer from "./components/shared/Footer";
import Menu from "./components/shared/Menu";
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col">
        <Menu />
        <main className="container grow mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Inicio></Inicio>}/>
            <Route path="/login" element={<Login></Login>}/>
            <Route path="/administrador" element={<Administrador></Administrador>}/>
            <Route path="/administrador/crear" element={<FormularioServicio titulo={'Crear Servicio'}></FormularioServicio>}/>
            <Route path="/administrador/editar/:id" element={<FormularioServicio titulo={'Editar Servicio'}></FormularioServicio>}/>
            <Route path="*" element={<Error404></Error404>}/>
          </Routes>
          {/*  */}
          {/* <Error404></Error404> */}
          {/* <Login></Login> */}
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
