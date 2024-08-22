import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt=""  className='play-icon'/>
      </div>

      <div className="about-right">
        <h3>Acerca del Instituto</h3>
        <h2>Formando a los Líderes del Mañana Hoy</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore autem eos, explicabo dignissimos dolore accusantium porro veniam numquam similique, iste quos magni perspiciatis molestias ducimus doloremque hic. Laborum, eveniet modi.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit sunt esse perspiciatis autem modi, delectus et sint iure nulla tenetur corrupti porro laudantium quas sed maiores pariatur aperiam ad cupiditate?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum laboriosam perspiciatis tempore reprehenderit consequatur autem, vero delectus possimus dignissimos veritatis atque quisquam a minima? Quos a voluptas quaerat aperiam ipsa!</p>
      </div>
    </div>
  )
}

export default About
