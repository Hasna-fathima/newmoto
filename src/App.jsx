import logo from '../src/assets/logo.jpg'
import './App.css'
import dirt from '../src/assets/dirt.png'
import Footer from './Components/footer'
import Advartisingpage from './Components/advartisingpage'
import Singlemoto from './Components/singlemoto'
import Rowpost from './Components/Rowpost'

function App() {
  

  return (
    <>
            <header className="header">
        <nav className="nav">
          <div className="nav-links-left">
            <a href="/" className="nav-link">Home</a>
            <a href="/about" className="nav-link">About Us</a>
          </div>
          <div className="logo">
            <img className='logo-box' src={logo} alt="Logo" />
          </div>
          <div className="nav-links-right">
            <a href="/services" className="nav-link">Service</a>
            <a href="/contact" className="nav-link">Contact</a>
          </div>
        </nav>
      </header>
      <div className="main-img">
        <img className="dirt" src={dirt} alt="Dirt Image" />
      </div>
    <div>
      <Advartisingpage/>
      <div>
        <Rowpost/>
        </div>
      <div>
        <Singlemoto/>
      </div>
      <div>
        <Footer/>
      </div>

    </div>
    </>
  )
}

export default App
