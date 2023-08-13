import React, {useRef, useState} from "react";
import emailjs from '@emailjs/browser';
import '../ContactSection/ContactSection.scss'
import Modal from 'react-modal'

export const ContactSection = () => {
    const form = useRef();
    const [enviado, setEnviado] = useState(false);
    const [loading, setLoading] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [message, setMessage] = useState('')
    
    const sendEmail = (e) => {
    e.preventDefault();
    if(enviado){
        setMessage('You have already sent a message.')
        openModal()
    } else {
        setLoading(true)
        openModal()
        setMessage('Sending message...')
        emailjs.sendForm('service_pxz4njm', 'template_8auohjq', form.current, 'NKn4f_Ct_PbqOrqSy')
          .then((result) => {
              console.log(result.text);
              setMessage('The message was successfully sent!')
              setLoading(false)
              setEnviado(true);
          }, (error) => {
              console.log(error.text);
              setMessage('An error has occured.')

          });
    }
  };

  const openModal = () => {
    setModalIsOpen(true);
  }

  const closeModal = () => {
    setModalIsOpen(false)
  }

  const customStyles = {
    content: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent:'center',
        alignItems:'start',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        color: '#000',
        borderRadius: '14px',
      },
  }

  return (
    <section id="contact-section">
        <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2><b>CONTACT</b></h2>
        <p>{message}</p>
        {loading ? null : <button className="boton-modal" onClick={closeModal}>Close</button>}
      </Modal>
        <div className="form-title">
            <h1 className="form-title-text">LET ME <span style={{color: "#ddb226"}}>HELP</span> YOU!</h1>
        </div>
    <div className="form-div">
        <div className="head-form">
            <form ref={form} onSubmit={sendEmail}>
                <label for="name">
                    <input type="text" className="input" id="name" name="user_name" placeholder="Name" required/>
                </label>
                <label for="email">
                    <input type="email" className="input" id="email" name="user_email" placeholder="E-mail" required />
                </label>
                <label for="textarea">
                    <textarea className="input" placeholder="Write your message here..." id="textarea" name="message" required></textarea>
                </label>
                <button className="submit-button input hvr-shutter-in-horizontal" style={enviado ? {backgroundColor: "green"} : null} type="submit" value="Send">{!message ? "Send" : message}</button>
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
