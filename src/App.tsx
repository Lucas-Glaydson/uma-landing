import './App.css'
import { DonateProvider } from './context/DonateContext'; // <-- Importe aqui
import About from './components/About'
import Contacts from './components/Contacts'
import Donate from './components/Donate'
import DonateBtn from './components/DonateBtn'
import Footer from './components/Footer'
import Founder from './components/Founder'
import Header from './components/Header'
import WeAre from './components/WeAre'

function App() {
  return (
    <DonateProvider>  {/* <-- Envolva TODOS os componentes aqui */}
      <main className='w-full font-inria-serif flex flex-col items-center overflow-hidden'>
        <Header />
        <DonateBtn />
        <About />
        <WeAre />
        <Founder />
        <Contacts />
        <Footer />
        <Donate />
      </main>
    </DonateProvider>
  )
}

export default App
