import { Route, Routes } from "react-router-dom";

import AlumnoPage from "../src/components/Alumnos";
import Index from "../src/components/Index"
import { AlumnoContextProvider } from "../src/context/AlumnoProvider";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import AlumnoForm from "../src/components/Formulario";
import NuestroDojo from "../src/components/NuestroDojo";
import Sensei from "../src/components/Sensei";
import Productos from "../src/components/Productos"


function App() {
  return (
    <div className="bg-zinc-900 h-screen">
      <Navbar />
      <div className="container mx-auto py-4 px-20">
        <AlumnoContextProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/Alumnos" element={<AlumnoPage />} />
            <Route path="/Formulario" element={<AlumnoForm />} />
            <Route path="/edit/:id" element={<AlumnoForm />} />
            <Route path="/Sensei" element={<Sensei />} />
            <Route path="/Productos" element={<Productos />} />
            <Route path="/NuestroDojo" element={<NuestroDojo />} />
          

          </Routes>
        </AlumnoContextProvider>
        </div>
      <Footer />
    </div>
  );
}

export default App;