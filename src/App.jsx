import './styles/App.css'

import Header from './components/Header'
import { Carousel } from './components/Carousel'
import { Entry } from './components/Entry'
import MainLanding from './components/MainLanding'

import {
  C,
  CSSNew,
  Nodejs,
  NestJS,
  MySQL,
  PostgreSQL,
  MongoDB,
  Python,
  Docker,
  JWT,
  Git,
  Github,
  Linux,
  Firebase,
  TypeScript,
} from './components/Icons'
import AboutUs from './components/AboutUs'
import FormSection from './components/FormSection'

function App() {
  return (
    <>
      <Header />
      <Entry />
      <MainLanding />
      <AboutUs />
      <Carousel
        images={[
          C,
          CSSNew,
          Nodejs,
          NestJS,
          MySQL,
          PostgreSQL,
          MongoDB,
          Python,
          Docker,
          JWT,
          Git,
          Github,
          Linux,
          Firebase,
          TypeScript,
        ]}
      />
      <FormSection />
    </>
  )
}

export default App
