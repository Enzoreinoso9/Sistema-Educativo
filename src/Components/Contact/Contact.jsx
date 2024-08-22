import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "ff36ddde-ec01-49dc-bf59-0e8b42a1cdb4");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Envíanos un mensaje <img src={msg_icon} alt="" /></h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, amet. Itaque sint aspernatur necessitatibus eius illo vitae dolorem, doloremque perferendis laudantium dolore consequatur corrupti illum officiis voluptas, consequuntur ducimus mollitia?</p>
        <ul>
            <li> <img src={mail_icon} alt="" />ISFD@Gmail.com</li>
            <li> <img src={phone_icon} alt="" />+1 123-456-7890</li>
            <li> <img src={location_icon} alt="" />Hipólito Irigoyen, Córdoba &,   <br/> P3600 Formosa, Argentina</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Tu nombre</label>
          <input type="text" name='name' placeholder='Ingresa tu nombre' required/>

          <label> Número de Telefono</label>
          <input type="tel" name='phone' placeholder='Ingresa tu número de telefono' required/>

          <label>Escribe tu mensaje aquí</label>
          <textarea name="message" rows="6" placeholder='Ingresa tu mensaje' required></textarea>

          <button type='submit' className='btn dark-btn'>Enviar ahora <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
