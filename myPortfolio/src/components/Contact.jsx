import React from 'react';
import { Icon } from "@iconify/react";
import './Contact.css'

function Contact() {
  return (
    <section id="contact">
      <div className="content">
        <div className="title"><span>Contact Me</span></div>
        <div className="contact-card">
          <h3>Mobile Number</h3>
          <p>+91-8275078834</p>
        </div>
        <div className="contact-card">
          <h3>What'sApp Number</h3>
          <p>+91-9421161218</p>
        </div>
        <div className="contact-card">
          <h3>Location</h3>
          <p>sahakar Nagar, Khopoli-410203, Tal:Khalapur, Dist:Raigad, Maharastra</p>
        </div>
        <div className="contact-card">
          <h3>Email</h3>
          <p>thodsaresakshi17@gmail.com</p>
        </div>
        
        <div className="contact-links">
              <a
                href="https://github.com/sakshi1703"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button id="contact-github" className="contact-button">
                  <Icon icon="fa-brands:github" width="50" height="50" />
                </button>
              </a>
        
              <a
                href="https://www.linkedin.com/in/sakshi-thodsare-417169320/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button id="contact-linkedin" className="contact-button">
                  <Icon icon="devicon:linkedin" width="50" height="50" />
                </button>
              </a>
            </div>
      </div>
    </section>
  );
}

export default Contact;
