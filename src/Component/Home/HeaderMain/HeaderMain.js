import React from 'react';
import kids from '../../../images/kids2.jpg'
import './HeaderMain.css';

const HeaderMain = () => {
    return (
        <main style={{height:'700px'}} className="row d-flex align-items-center w-100  ">
             <div className="col-md-6 offset-md-1">
                <img style={{width:'600px', height:'400px'}} src={kids} alt="" className="img-fluid"/>
            </div>
            <div className="col-md-4">
                <h1 style={{color:'#4d4d4d'}} className="fw-bolder">WELCOME TO <br/> THE KINDERGARTEN!</h1>
                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates nostrum blanditiis similique, facere assumenda tempore!</p>
                <button className="btn fw-bolder btn-style">WHY KINDERGARTEN?</button>
            </div>
           

        </main>
    );
};

export default HeaderMain;