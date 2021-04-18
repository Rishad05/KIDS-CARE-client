import React from 'react';

const Events = ({event}) => {
    return (
        <section style={{height:'500px'}} className="row d-flex align-items-center w-100  ">
        <div className="col-md-6 offset-md-1">
            <h1 style={{color:'#4d4d4d'}} className="fw-bolder">{event.title}</h1>
            <p className="text-secondary">{event.description}</p>
       </div>
       <div className="col-md-4">
           
           <img style={{width:'600px', height:'300px'}} src={event.img} alt="" className="img-fluid mb-5 pb-5"/>
       </div>
      

   </section>
    );
};

export default Events;