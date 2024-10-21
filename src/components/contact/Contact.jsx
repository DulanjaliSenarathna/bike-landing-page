import React, { useState } from 'react'
import { FaRegAddressBook,  FaRegEnvelope, FaRegMap, FaLinkedin } from "react-icons/fa";
import './contact.css'
import shapeOne from '../../assets/shape-1.png'
import Swal from 'sweetalert2'

const Contact = () => {

    // Handle form submission

    const onSubmit = async (event) => {
        event.preventDefault();

        try {
        const formData = new FormData(event.target);
    
        // Web3 Forms API key
        formData.append("access_key", "2e7954f5-07f4-4fdd-844b-c3af933dc322");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
             Swal.fire({
                title: "Success!",
                text: "Message Sent!",
                icon: "success",
                
              });
            event.target.reset();
        }else{
            Swal.fire({
                title: "Error!",
                text: "Something was wrong!",
                icon: "error",
              });
        }
        } catch (error) {
            Swal.fire({
                title: "Error",
                text: "Error occured!",
                icon: "error",
              });
            console.log('Form submit error: '+error);
        }
        
      };

   return (
    <section className="contact section" id="contact">
        <h2 className="section__title text-cs">Contact Us</h2>
        <p className="section__subtitle">
            Let's <span>Talk now</span>
        </p>

        <div className="contact__container container grid">
            <div className="contact__content">
                <div className="contact__card">
                    <span className="contact__card-icon">
                        <FaRegMap/>
                    </span>

                    <h3 className="contact__card-title">Address</h3>
                    <p className="contact__card-data">Kanuggalla, Ellawala, Eheliyagoda</p>
                </div>

                <div className="contact__card">
                    <span className="contact__card-icon">
                        <FaLinkedin/>
                    </span>

                    <h3 className="contact__card-title">LinkedIn</h3>
                    <p className="contact__card-data">Bike Hub</p>
                </div>

                <div className="contact__card">
                    <span className="contact__card-icon">
                        <FaRegEnvelope/>
                    </span>

                    <h3 className="contact__card-title">Email</h3>
                    <p className="contact__card-data">dulanjali@gmail.com</p>
                </div>

                <div className="contact__card">
                    <span className="contact__card-icon">
                        <FaRegAddressBook/>
                    </span>

                    <h3 className="contact__card-title">Phone</h3>
                    <p className="contact__card-data">+94 765489545</p>
                </div>
            </div>

          <form className="contact__form" onSubmit={onSubmit}>
            <div className="contact__form-group grid">
                <div className="contact__form-div">
                    <label className="contact__form-tag text-cs">Your Full Name <b>*</b></label>
                    <input type="text" name='name'
                     required
                    className="contact__form-input" />
                </div>

                <div className="contact__form-div">
                    <label className="contact__form-tag text-cs">Your Email Address <b>*</b></label>
                    <input type="email" name='email'  required
                     className="contact__form-input" />
                </div>
            </div>

            <div className="contact__form-div">
                    <label className="contact__form-tag text-cs">Your Subject <b>*</b></label>
                    <input type="text" name='subject'  required
                     className="contact__form-input" />
                </div>
            
            <div className="contact__form-div contact__form-area">
                    <label className="contact__form-tag text-cs">Your Message<b>*</b></label>
                    <textarea className='contact__form-input' name='message' 
                   required></textarea>
                </div>

                <div className="contact__submit">
                    <p>* Accept the terms and conditions.</p>
                    <button type='submit' className='btn text-cs'>Send Message</button>
                </div>
            </form>  
        </div>

        

        <div className="section__bg-wrapper">
            <span className="bg__title">Contact Me</span>
        </div>
    </section>
  )
}

export default Contact