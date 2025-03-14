import './styles/App.css'
import { ReactLenis } from 'lenis/react'

import { Entry } from './components/Entry'
import Header from './components/Header'
import MainLanding from './components/MainLanding'

import AboutUs from './components/AboutUs'
import FormSection from './components/FormSection'

import { SkillsSection } from './components/SkillsSection'
import { ProjectSection } from './components/ProjectSection'

function App() {
  return (
    <>
      {/* <ReactLenis root> */}
        <Entry />
        <Header />
        <MainLanding />
        <ProjectSection />
        <AboutUs />
        <FormSection />
        <SkillsSection />
      {/* </ReactLenis> */}
    </>
  )
}

export default App
