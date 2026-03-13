import { useScrollAnimation } from './hooks/useScrollAnimation'
import Header from './components/Header'
import Hero from './components/Hero'
import Betrieb from './components/Betrieb'
import Hofladen from './components/Hofladen'
import Aktuelles from './components/Aktuelles'
import Auszeichnungen from './components/Auszeichnungen'
import Downloads from './components/Downloads'
import Footer from './components/Footer'

function App() {
  useScrollAnimation()

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Betrieb />
        <Hofladen />
               <Auszeichnungen />
        <Aktuelles />
 
        <Downloads />
      </main>
      <Footer />
    </>
  )
}

export default App
