import './App.css'
import About from './components/About'
import Contacts from './components/Contacts'
import DonateBtn from './components/DonateBtn'
import Founder from './components/Founder'
import Header from './components/Header'
import WeAre from './components/WeAre'

function App() {
  return (
    <main className='w-full font-inria-serif flex flex-col items-center overflow-hidden'>
      <Header />
      <DonateBtn />
      <About />
      <Founder />
      <WeAre />
      <Contacts />
    </main>
  )
}

export default App
