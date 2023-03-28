import React, {useRef, useState} from "react";
import emailjs from '@emailjs/browser';
import '../ContactSection/ContactSection.scss'

export const ContactSection = () => {
    const form = useRef();
    const [exito, setExito] = useState('Send') ;
    const [enviado, setEnviado] = useState(false);
    const [loading, setLoading] = useState(false);
    
    
    const sendEmail = (e) => {
    e.preventDefault();
    if(enviado){ 
        alert('Ya enviaste un formulario!')
    } else {
        setLoading(true)
        emailjs.sendForm('service_pxz4njm', 'template_8auohjq', form.current, 'NKn4f_Ct_PbqOrqSy')
          .then((result) => {
              console.log(result.text);
              setExito('Form sent!');
              setLoading(false)
              setEnviado(true);
          }, (error) => {
              console.log(error.text);
              setExito('Error.');
          });
    }
  };




  return (
    <section id="contact-section">
        <div className="form-title">
            <h1 className="form-title-text">LET ME <span style={{color: "#ddb226"}}>HELP</span> YOU!</h1>
            <h2 className="form-title-subtext">{loading ? "Sending message..." : "Get in touch:"}</h2>
        </div>
    <div className="form-div">
        <div className="head-form">
            <form ref={form} onSubmit={sendEmail}>
                <label for="name">
                    <input type="text" className="input" id="name" name="user_name" placeholder="Name" required/>
                </label>
                <label for="email">
                    <input type="email" className="input" id="email" name="user_email" placeholder="E-mail address" required />
                </label>
                <label for="textarea">
                    <textarea className="input" placeholder="Write your message here!" id="textarea" name="message" required></textarea>
                </label>
                <button className="submit-button input hvr-shutter-in-horizontal" style={enviado ? {backgroundColor: "green"} : null} type="submit" value="Send">{exito}</button>
            </form>

        </div>
        <div className="logo-div">
            <a href="https://www.linkedin.com/in/joaquinpalmeyro/" target="_blank" rel="noreferrer">
                <img className="form-logo" src="http://cdn.onlinewebfonts.com/svg/img_137494.png" alt="LinkedIn Logo" />
            </a>
            <a href="https://www.instagram.com/joakopalmeyro" target="_blank" rel="noreferrer">
                <img className="form-logo instagram-logo" src="https://media.istockphoto.com/id/1278996256/vector/camera-icon-simple-style-isolated-vector-illustration-on-white-background.jpg?s=612x612&w=0&k=20&c=nmJsi4AIImCMPD_hyNDb8kLhO1iDRcbW-haTBcByOJo=" alt="Instagram Logo" />
            </a>
            <a href="https://github.com/moneeto" target="_blank" rel="noreferrer">
                <img className="form-logo" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub Logo" />
            </a>

        </div>
    </div>
    </section>
  );
};
