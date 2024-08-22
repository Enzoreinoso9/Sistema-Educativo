import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      
      <div className="container">
        <Title subTitle='Nuestro Programa' title='Lo Que Ofrecemos'/>
      <Programs/>
      <About/>
      <Title subTitle='Galería' title='Albúm de Fotos'/>
      <Campus/>
      <Title subTitle='TESTIMONIOS' title='Lo Que Dice el Estudiante'/>
      <Testimonials/>
      <Title subTitle='Contáctanos' title='Ponte en Contacto con Nosotros'/>
      <Contact/>
      <Footer/>
      </div>
      
    </div>
  )
}

export default App
