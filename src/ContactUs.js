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
    // <form className="billing-container" ref={form} onSubmit={sendEmail}> 
    //     <h4 className="billing-heading">Fill out form</h4>
    // <div className='form-container-contact'>
    //     <div className="input-container">
    //         <label className="input-text" for="message">First Name (required)</label>
    //         <div className="input-wrapper">
    //             <input className="input" name="from_name" placeholder="Your name" id="from_name" type="text" required></input>
    //         </div>
    //     </div>
    //     <div className="input-container">
    //     <label className="input-text" for="message">Last Name (required)</label>
    //         <div className="input-wrapper">
    //             <input className="input" name="last_name" placeholder="Your last name" id="last_name" type="text" required></input>
    //         </div>
    //     </div>
    //     <div className="input-container">
    //     <label className="input-text" for="message">Email (required)</label>
    //         <div className="input-wrapper">
    //             <input className="input" name="email" placeholder="Your Email" id="email" type="email" required></input>
    //         </div>
    //     </div>
    //     <div className="input-container">
    //     <label className="input-text" for="message">Phone Number (required)</label>
    //         <div className="input-wrapper">
    //             <input className="input" name="phone_number" placeholder="Your Phone Number" id="phone_number" type="tel" required></input>
    //         </div>
    //         <input type="submit" id="send" value="Send Email" ></input>
    //     </div>
    // </div>
    // </form>
    <div class="form-container" ref={form} onSubmit={sendEmail}>
        <form action="/action_page.php">
            <label for="fname">First Name</label>
            <input className="input" name="from_name" placeholder="Your name..." id="from_name" type="text" required></input>

            <label for="lname">Last Name</label>
            <input className="input" name="last_name" placeholder="Your last name..." id="last_name" type="text" required></input>

            <label for="lname">Email</label>
            <input className="input" name="email" placeholder="Your email..." id="email" type="email" required></input>

            <label for="lname">Phone Number</label>
            <input className="input" name="email" placeholder="Your phone number..." id="tel" type="tel" required></input>

            <label for="lname">Country</label>
            <input className="input" name="email" placeholder="Your country..." id="country" type="text" required></input>
            <input type="submit" value="Submit"></input>
        </form>
    </div>
  );
};

export default ContactUs