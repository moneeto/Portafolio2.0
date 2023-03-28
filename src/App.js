import './App.css';
import Header from './componentes/Header/Header.jsx';
import { SkillSection } from './componentes/SkillSection/SkillSection.jsx';
import { WelcomeSection } from './componentes/WelcomeSection/WelcomeSection.jsx';
import { ProjectsSection } from './componentes/ProjectsSection/ProjectsSection.jsx'
import { ContactSection } from './componentes/ContactSection/ContactSection.jsx'
function App() {


  return (
    <div className="App">
      <Header></Header>
      <WelcomeSection></WelcomeSection>
      <SkillSection></SkillSection>
      <ProjectsSection></ProjectsSection>
      <ContactSection></ContactSection>
    </div>
  );
}

export default App;
