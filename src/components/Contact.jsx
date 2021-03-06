import React from "react";
import emailjs from "emailjs-com";
// import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet";
// import Form from 'customisable-contact-form';
// import {Heading, FirstName, LastName, Email, Message, SubmitButton} from 'customisable-contact-form'
export default function Contact() {
  function sendEmail(e) {
    e.preventDefault();

emailjs.sendForm('service_1zfatsb', 'template_0ciuxfr', e.target, 'user_3TcS4pRKMgpo7fArsKmSf')
    .then((result) => {
        console.log(result.text);
        window.location.href = "https://cutoutwiz.com/thank-you";
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset();
    
}
  return (

    <div className="containers">
          <Helmet>
                <style>{'body { background-color: #f2f3f5; }'}</style>
            </Helmet>

          <div class="container">
          <div class="row">
          <div style={{marginTop:"4%"}}>
          <p style={{textAlign:"center",fontSize:"30px",fontFamily:"poppins"}}>GET IN TOUCH WITH US</p>
          <div class="text-center"style={{marginBottom:"-2%"}}><button id="button-20">CONTACT US</button></div>
    
    <form onSubmit={sendEmail}>
    {/* {renderAlert()} */}
            <div className="row pt-5 mx-auto">
                <div className="col-8 form-group mx-auto">
                    <input type="text" className="form-control" placeholder="Name" name="name"required/>
                </div>
                <div class="col-8 form-group mx-auto">
                  <select id="inputState" class="form-control"name="option">
                    <option selected> --Select Option-- </option>
                    <option>Image Editing Service</option>
                    <option>Video Editing Service</option>
                  </select>
                </div>
                <div className="col-8 form-group pt-2 mx-auto">
                    <input type="email" className="form-control" placeholder="Email" name="email"required/>
                </div>
                <div className="col-8 form-group pt-2 mx-auto">
                    <input type="text" className="form-control" placeholder="Subject" name="subject"required/>
                </div>
                <div className="col-8 form-group pt-2 mx-auto">
                    <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"required></textarea>
                </div>
                <div className="col-8 pt-3  mx-auto">
                  <div class="text-center">
                  <input type="submit" id="button-19" className="btn btn-info" value="SUBMIT"></input>
                  </div>
                </div>
            </div>
        </form>
        </div>
        </div>
        </div>
    
    <br/>
</div>

  );
  
}

