import Contact from "./components/Contact/Contact";
import Presentation from "./components/Presentation/Presentation";
import ProyectList from "./components/Proyects/ProyectList";
import SkillList from "./components/Skills/SkillList";

function App() {
  return (
    <>
      <div>
        <Presentation/>
        <SkillList/>
        <ProyectList/>
        <Contact/>
      </div>
    </>
  )
}

export default App
