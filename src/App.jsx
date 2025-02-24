import './styles/App.css'

import { Entry } from './components/Entry'
import MainLanding from './components/MainLanding'

import AboutUs from './components/AboutUs'
import FormSection from './components/FormSection'
// import { Skills } from './constants'

import { ReactLenis } from 'lenis/react' // Libreria para hacer scroll suave
import { SkillsSection } from './components/SkillsSection'
import { ProjectSection } from './components/ProjectSection'

function App() {
  return (
    <>
      <ReactLenis root>
        <Entry />
        <MainLanding />
        <ProjectSection />
        <AboutUs />
        <SkillsSection />
        <FormSection />
      </ReactLenis>
    </>
  )
}

export default App
