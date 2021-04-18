import React, { useEffect, useState } from 'react';
import ClassDetails from '../ClassDetails/ClassDetails';



const Classes = () => {
    const [classes, setClasses] = useState([])
    useEffect( () => {
        fetch('http://localhost:5000/classes')
        .then(res => res.json())
        .then(data => setClasses(data))
    }, [])
    
    return (
        <section className="class-container mt-5 background-service">
            <div className="text-center">
                <h2 style={{color: 'orange'}} className="border-bottom container fw-bolder ">CHOOSE CLASSES FOR YOUR CHILD</h2>
            </div>
                <div className="d-flex justify-content-center">
                <div className="w-75 row mt-2 pt-5 ">
                    {
                         classes.map(cls => <ClassDetails key={cls._id}  cls={cls}></ClassDetails>)
                    }
                 </div>
            </div>
        </section>
    );
};

export default Classes;