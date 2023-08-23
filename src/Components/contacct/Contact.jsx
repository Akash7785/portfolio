import "./contact.css";
import Phone from "../img/phone.png";
import Emial from "../img/email.png";
import Adderss from "../img/address.png";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_chalz78",
        "template_pgegy8x",
        formRef.current,
        "HIp8x0b_QhPaT3TdD"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your Project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +91 77859 40933
            </div>
            <div className="c-info-item">
              <img src={Emial} alt="" className="c-icon" />
              akashka838@gmail.com
            </div>
            <div className="c-info-item">
              <img src={Adderss} alt="" className="c-icon" />
              529/158 Rahim Nagar , Mahanagar Lucknow
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" name="user_name" placeholder="Name" />
            <input type="text" name="user_subject" placeholder="Subject" />
            <input type="text" name="user_email" placeholder="Email" />
            <textarea name="message" placeholder="Meaasge" rows="5"></textarea>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
