import './Home.css'
import Me from '../../assets/laith1.png'
import CV from'../..//assets/LaithBarakatCv (1).pdf'
import Homesocial from './Homesocial'



function Home() {
  return (
    <div id="home" className='home'>
      <div className="container home_container">
        <h4>Hello I'm</h4>
        <h1>Laith Barakat</h1>
        <h4 className="text-light">Full Stack Developer</h4>

        <div className="btns">
          <a href={CV} className="btn" download>Download CV</a>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
       

        <div className="me">
          <img src={Me} alt="Laith Barakat" />
        </div>
        <a href="#about" className="scroll_down">Scroll Down</a>

      <Homesocial/>
      </div>
      
    </div>
  )
}

export default Home
