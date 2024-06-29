import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'

const App = () => {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <div className='container'>
      <Title subTitle='Our Programs' title='What we offer'/>
      <Programs/>
      <About/>
      <Title subTitle='Gallery' title='Campus Photos'/>
      <Campus/>
      <Title subTitle='Testimonials' title='What Student Says'/>
    </div>
    </div>
  )
}

export default App
