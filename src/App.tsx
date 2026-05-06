import Error404 from "./components/pages/Error404";
import Inicio from "./components/pages/Inicio";
import Administrador from "./components/pages/Administrador";
import FormularioServicio from "./components/pages/FormularioServicio";
import Login from "./components/pages/Login";
import Footer from "./components/shared/Footer";
import Menu from "./components/shared/Menu";
import { BrowserRouter, Routes, Route } from "react-router";
import ProtectorRutas from "./components/routes/ProtectorRutas";

function App() {

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col">
        <Menu />
        <main className="container grow mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Inicio></Inicio>}/>
            <Route path="/login" element={<Login></Login>}/>
            <Route path="/administrador" element={<ProtectorRutas/>}>
              <Route index element={<Administrador/>}/>
              <Route path="crear" element={<FormularioServicio titulo={'Crear Servicio'}></FormularioServicio>}/>
              <Route path="editar/:id" element={<FormularioServicio titulo={'Editar Servicio'}></FormularioServicio>}/>
            </Route>
            <Route path="*" element={<Error404></Error404>}/>
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
