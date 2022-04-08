
import { NavBar } from "./componentes/NavBar/NavBar";
import { About }  from "./componentes/About/About";
import { Skills } from "./componentes/Skills/Skills";
import { Projets } from "./componentes/Projets/Projets";
import { Contact } from "./componentes/Contact/Contact";
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  

  return (
    <>
    <div>
      <NavBar />
      <About title="Sobre mi" id="about" dark={ true } />
      <Skills title="Habilidades" id="skills" dark={ false }/>
      <Projets title="Proyectos" id="projets" dark={ true }/>
      <Contact title="Contacto" id="contact" dark={ false }/>
    </div>
    </>
  );
}


export default App;
