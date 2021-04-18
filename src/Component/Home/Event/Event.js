import React from 'react';
import parentDay from '../../../images/event1.jpg'
import Events from '../Events/Events';


const eventData =[
    {
        title: 'PARENT’S DAY AT THE KINDERGARTEN',
        img: parentDay,
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
    },
]

const Event = () => {
    return (
        <section className="class-container mt-5 pt-5">
            <div className="text-center">
                <h2 style={{color: 'orange'}} className="border-bottom container fw-bolder">WHAT’S GOING ON IN KINDERGARTEN</h2>
            </div>
                <div className="d-flex justify-content-center">
                <div className="w-75 row mt-2 pt-5 mb-5 pb-5">
                    {
                         eventData.map(event => <Events event={event}></Events>)
                    }
                 </div>
            </div>
        </section>
    );
};

export default Event;