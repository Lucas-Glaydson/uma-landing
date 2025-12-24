import './App.css'
import About from './components/About'
import DonateBtn from './components/DonateBtn'
import Header from './components/Header'

function App() {

  return (
    <main className='w-screen font-inria-serif flex flex-col items-center'>
      <Header></Header>
      <DonateBtn></DonateBtn>
      <About></About>
    </main>
  )
}

export default App
