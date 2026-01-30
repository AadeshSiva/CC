import './App.css'
import Navbar from './Component/Navbar'
import Home from './Section/Home'
import Feature from './Section/Feature'
import Tech from './Section/Tech'
import Better from './Section/Better'
import Installation from './Section/Installation'
import Real from './Section/Real'
import Contact from './Section/Contact'
import Footer from './Component/Footer'

export default function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Home />
      <Feature />
      <Tech />
      <Better />
      <Installation />
      <Real />
      <Contact />
      <Footer/>
    </div>
  )
}
