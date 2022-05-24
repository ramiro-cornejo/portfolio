
import { NavBar } from "./componentes/NavBar/NavBar";
import { About }  from "./componentes/About/About";
import { Skills } from "./componentes/Skills/Skills";
import { Projets } from "./componentes/Projets/Projets";
import { Contact } from "./componentes/Contact/Contact";
import 'bootstrap/dist/css/bootstrap.min.css';





function App() {
  

  return (
    <>
    
      <NavBar />
      <About title="Sobre mi" id="about"  />
      <Skills title="Habilidades" id="skills" />
      <Projets title="Proyectos" id="projets" />
      <Contact title="Contacto" id="contact" />
    
    </>
  );
}


export default App;
