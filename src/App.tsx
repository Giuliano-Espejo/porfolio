import "./App.css";
import Contact from "./components/Contact/Contact";
import Presentation from "./components/Presentation/Presentation";
import SkillList from "./components/Skills/SkillList";

function App() {
  return (
    <>
      <div>
        <Presentation/>
        <SkillList/>

        <Contact/>
      </div>
    </>
  )
}

export default App
