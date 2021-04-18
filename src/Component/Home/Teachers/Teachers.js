import React from 'react';

const Teachers = ({teacher}) => {
    return (
        <div className="container mt-2 mb-5 pb-5 col-md-4">
        <div class="card  card-design" style={{ width: "18rem", height:"20rem", boxShadow:'5px 10px 5px 10px #993d00' }}>
            <div class="card-body fw-bolder">
            <img src={teacher.img} class="card-img-top p-2 rounded-circle" alt="..." />
                <h3 class="card-title text-center">{teacher.name}</h3>
               <p class="text-center"> <small > {teacher.subject} Teacher</small> </p> 
            </div>
            </div>
            </div>
    );
};

export default Teachers;