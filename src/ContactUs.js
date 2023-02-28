import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9mwnb9e', 'template_ea0ayr8', form.current, 'tje1y7z4o5zscdW-a')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      form.current.reset()
  };

  return (
<form class="form-container" ref={form} onSubmit={sendEmail}>
            <label className='label-input' for="fname">First Name</label>
            <input className="input" name="from_name" placeholder="Your name..." id="from_name" type="text" required></input>

            <label className='label-input' for="lname">Last Name</label>
            <input className="input" name="last_name" placeholder="Your last name..." id="last_name" type="text" required></input>

            <label className='label-input' for="email">Email</label>
            <input className="input" name="email" placeholder="Your email..." id="email" type="email" required></input>

            <label className='label-input' for="tel">Phone Number</label>
            <input className="input" name="email" placeholder="Your phone number..." id="tel" type="tel" required></input>

            <input type="submit" id="send" value="GET IT NOW" ></input>
        </form> 
  );
};

export default ContactUs