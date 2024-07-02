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

        formData.append("access_key", "3ae80ac9-2fbd-47fc-b26f-0c0613ecec3e");

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
            <div className='contact-col'>
                <h3>Send us a message <img src={msg_icon} alt='' /></h3>
                <p>Feel free to reach out through contact form or find oour contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
                <ul>
                    <li><img src={mail_icon} alt='mail-icon' /> Contact@dhamaharsh9@gmail.com</li>
                    <li><img src={phone_icon} alt='phone-icon' />+91 9989789911</li>
                    <li><img src={location_icon} alt='location-icon' />Uttar Pradesh , India</li>
                </ul>
            </div>
            <div className='contact-col'>
                <form onSubmit={onSubmit}>
                    <label>Your name</label>
                    <input type='text' name='name' placeholder='Enter Your Name' required />
                    <label>Phone Number</label>
                    <input type='tel' name='phone' placeholder='Enter Your Phone Number' required />
                    <label>Email</label>
                    <input type='email' name='email' placeholder='Enter Your Email' required />
                    <label>Write Your Message Here</label>
                    <textarea name='message' rows='6' placeholder='Enter Your Message' required></textarea>
                    <button type='submit' className='btn dark-btn'>Send Message <img src={white_arrow} /></button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    )
}

export default Contact
