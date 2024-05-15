import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import './Contact.css'

function Contact() {
    const form = useRef();
    const [submitted, setSubmitted] = useState(false);
    const [message, setMessage] = useState("");
    let time_out = 1200;

    const sendEmail = (e) => {
        e.preventDefault();

        const formDataObject = {};
        const formData = new FormData(e.target);
        formData.forEach((value, key) => { formDataObject[key] = value; });

        if (!formDataObject["email"].includes('@')) {
            setSubmitted(true)
            setMessage("Please input a valid email.")
            setTimeout(() => {
                setSubmitted(false);
            }, time_out);
        } else {
            emailjs.sendForm('service_7ajiit3', 'template_058hkd1', form.current, 'Cj1nazPOhR_DJCA6d');
            
            setSubmitted(true)
            setMessage("Your message has been successfully sent!")
            setTimeout(() => {
                setSubmitted(false);
            }, time_out);
        }
        e.target.reset();
    };

    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">Contact Me</h2>

            <div className="contact__container container">
                <div className="contact__content">
                    <div className="contact__card">
                        <i class="uil uil-envelope contact__logo"></i>
                        <span className="contact__method">
                            Email
                        </span>
                        <span className="contact__detail">
                            gabrielle.lu.1019@gmail.com
                        </span>
                        <a href="mailto:gabrielle.lu.1019@gmail.com" className="contact__link">
                            Contact Me
                            <i class="uil uil-arrow-right contact__icon"></i>
                        </a>
                    </div>

                    <div className="contact__card">
                        <i class="uil uil-facebook-messenger-alt contact__logo"></i>
                        <span className="contact__method">
                            Messenger
                        </span>
                        <span className="contact__detail">
                            gabriellelu1019
                        </span>
                        <a href="https://m.me/gabriellelu1019" className="contact__link">
                            Contact Me
                            <i class="uil uil-arrow-right contact__icon"></i>
                        </a>
                    </div>
                </div>

                <form ref={form} onSubmit={sendEmail} className='contact__form'>
                    <div className="contact__box__pair">
                        <label className='contact__box__tag'>Name</label>
                        <input type="text" name="name" placeholder="Insert your name" required className='contact__box__input' />
                    </div>

                    <div className="contact__box__pair">
                        <label className='contact__box__tag'>Email</label>
                        <input type="email" name="email" placeholder="Insert your email" required className='contact__box__input' />
                    </div>

                    <div className="contact__box__pair">
                        <label className='contact__box__tag'>Message</label>
                        <textarea name="message" rows="4" placeholder="Leave me a message" className='contact__box__input' />
                    </div>
                    <button type="submit" className='button button--flex contact__send'>
                        Send Message
                        <i class="uil uil-message"></i>
                    </button>
                </form>

                <div className={submitted ? "contact__send__success show-message" : "contact__send__success"}>
                    <div className="contact__send__box">
                        <div className="contact__send__message">
                            {message}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Contact