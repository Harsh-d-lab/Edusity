import { useState } from 'react'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/Player/Player'
import Navbar from './Components/Navbar'

const App = () => {

const [playState,setPlayState] = useState(false);

  return (
    <div>
    <Navbar/>
    <Hero/>
    <div className='container'>
      <Title subTitle='Our Programs' title='What we offer'/>
      <Programs/>
      <About setPlayState={setPlayState}/>
      <Title subTitle='Gallery' title='Campus Photos'/>
      <Campus/>
      <Title subTitle='Testimonials' title='What Student Says'/>
      <Testimonials/>
      <Title subTitle='Contact Us' title='Get in Touch'/>
      <Contact/>
      <Footer/>
    </div>
    <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  )
}

export default App
