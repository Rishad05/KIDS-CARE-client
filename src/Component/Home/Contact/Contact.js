import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section className="contact ">
        <div className="container">
            <div className="section-header text-center text-white">
                 <h2  style={{color: 'orange', paddingTop:'100px'}} className="border-bottom container fw-bolder  mb-4 pb-4">CONTACT US</h2>
            </div>
            <div className="col-md-9 mx-auto">
                <form action="">
                    <div className="mb-3 form-group">
                        <input type="text" className="form-control" placeholder="Email Address *"/>
                    </div>
                    <div className="mb-3 form-group">
                        <input type="text" className="form-control" placeholder="Subject *"/>
                    </div>
                    <div className="mb-3 form-group">
                        <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Message *"></textarea>
                    </div>
                    <div className="pb-5 form-group text-center">
                        <button type="button" className="btn fw-bolder style-btn mb-3 pb-3"> SUBMIT </button>
                    </div>
                </form>
            </div>
        </div>
    </section>
    );
};

export default Contact;