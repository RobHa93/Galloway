import { useScrollAnimation } from './hooks/useScrollAnimation'
import Header from './components/Header'
import Hero from './components/Hero'
import Verband from './components/Verband'
import Zucht from './components/Zucht'
import Marktplatz from './components/Marktplatz'
import Aktuelles from './components/Aktuelles'
import ZuechterSuche from './components/ZuechterSuche'
import Downloads from './components/Downloads'
import Kontakt from './components/Kontakt'
import Footer from './components/Footer'

function App() {
  useScrollAnimation()

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Verband />
        <Zucht />
        <Marktplatz />
        <Aktuelles />
        <ZuechterSuche />
        <Downloads />
        <Kontakt />
      </main>
      <Footer />
    </>
  )
}

export default App
