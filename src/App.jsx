import './styles/App.css'

import Header from './components/Header'
import { Carousel } from './components/Carousel'
import { Entry } from './components/Entry'
import MainLanding from './components/MainLanding'

import AboutUs from './components/AboutUs'
import FormSection from './components/FormSection'
import { CAROUSEL_IMAGES } from './constants'

function App() {
  return (
    <>
      <Entry />
      <MainLanding />
      <AboutUs />
      <Carousel images={CAROUSEL_IMAGES} />
      <FormSection />
    </>
  )
}

export default App
