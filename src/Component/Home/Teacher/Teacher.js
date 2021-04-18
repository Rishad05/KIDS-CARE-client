import React from 'react';
import LilyCarter from '../../../images/LILY CARTER.jpg';
import RichardHill from '../../../images/RICHARD HILL.jpg';
import JenniferLawrence from '../../../images/JENNIFER LAWRENCE.jpg'
import Teachers from '../Teachers/Teachers';

const teacherData =[
    {
        name: 'LILY CARTER',
        img: LilyCarter,
        subject:'Literacy'
    },
    {
        name: 'RICHARD HILL',
        img: RichardHill,
        subject:'Art and Music'
    },
    {
        name: 'JENNIFER LAWREN',
        img: JenniferLawrence,
        subject:'Active Learning'
    },
]

const Teacher = () => {
    return (
        <section className="class-container mt-5 pt-5">
            <div className="text-center">
                <h2 style={{color: 'orange'}} className="border-bottom container fw-bolder">MEET OUR TEACHERS</h2>
            </div>
                <div className="d-flex justify-content-center">
                <div className="w-75 row mt-2 pt-5 ">
                    {
                         teacherData.map(teacher => <Teachers teacher={teacher}></Teachers>)
                    }
                 </div>
            </div>
        </section>
    );
};

export default Teacher;