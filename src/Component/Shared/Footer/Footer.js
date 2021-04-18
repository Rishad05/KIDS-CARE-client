import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMapMarked, faClock, faMobileAlt} from '@fortawesome/free-solid-svg-icons'


const Footer = () => {
    return (
       <section style={{ backgroundColor:'#666699'}}>
           <div className="text-center text-light p-5">
               <h1 className="fw-bolder mb-3 pb-3">KINDERGARTEN</h1>
               <p> <FontAwesomeIcon icon={faMapMarked} ></FontAwesomeIcon> San Francisco, CA 94102, US 1234, Some Str</p>
               <p> <FontAwesomeIcon icon={faClock} ></FontAwesomeIcon> Monday - Friday: 7:30 am - 17:00 pm, Saturday: 8:00 am - 15:00 pm</p>
               <p> <FontAwesomeIcon icon={faMobileAlt} ></FontAwesomeIcon> +1 000 123 1234; +1 000 567 5678</p>
           </div>
           <div className="text-center text-light p-2 ">
                <p>Copyright {(new Date()).getFullYear()} All Rights Reserved By Ifatakher Uddin Rishad</p>
            </div>
       </section>
    );
};

export default Footer;