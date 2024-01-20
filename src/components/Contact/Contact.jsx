import React from 'react';
import FooterLink from '../FooterLink/FooterLink';
import Header from '../Header/Header';
import './Contact.css';
import contactVector from './../../assets/contact_anime.png';
import ig from './../../assets/ig.png';
import web from './../../assets/web.png';
import fb from './../../assets/fb.png';
import email from './../../assets/email.png';
import nupur from './../../assets/Nupur.jpg';

const Contact = () => {
    return (
        <div className='section-container'>
            <Header
                heading="Get in touch"
                details="Hey wanna contact me?"


            />

            {/* form section */}
            <div className='contact-form-container'>
                <form
                    action="https://formspree.io/f/mdoqnalp"
                    method="POST"
                    className='contact-form'>
                    {/* Email Id Input */}
                    <input
                        type='email'
                        placeholder='Your Email ID'
                        name='_replyto'
                        className='input-box email-input'
                        autoComplete='off'
                    />

                    {/* Email Body */}
                    <textarea
                        type='text'
                        placeholder='Your Message'
                        name='message'
                        className='input-box body-input'
                    ></textarea>

                    {/* Submit button */}
                    <button type='submit' className='contact-btn'>
                        Send Email
                    </button>
                </form>
            </div>

            {/* Social icons */}
            <div className="social-icons-container">
                <a href="mailto:nupursinghmodak@gmail.com" className="social-icon">
                    <img src={email} alt="social" className="s_icon_img" />
                </a>
                <a href="https://www.instagram.com/art_within_the_heart" className="social-icon">
                    <img src={ig} alt="social" className="s_icon_img" />
                </a>
                <a href="https://iamnupur.github.io/" className="social-icon">
                    <img src={web} alt="social" className="s_icon_img" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=100080281339826&mibextid=gik2fB" className="social-icon">
                    <img src={fb} alt="social" className="s_icon_img" />
                </a>
            </div>

            <div className="my-image">
                <img src={nupur} alt="Swaraj" className="my-image-img" />

            </div>




            < FooterLink
                phrase="Read more "
                link="About me"
                toAdress="/about"
            />

            <div className="vector-frame">
                <img
                    src={contactVector}
                    alt="contact"
                    className="about-vector"
                />

            </div>





            {/* <h1>I am the Contact page</h1> */}
        </div>
    );
}

export default Contact;