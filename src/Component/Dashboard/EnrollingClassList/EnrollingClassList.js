import React from 'react';
import EnrollClassList from '../EnrollClassList/EnrollClassList';
import Sidebar from '../Sidebar/Sidebar';
import basicSkills from '../../../images/basicSkills.jpg';


const courseData = [
    {
        img: basicSkills,
        name: 'Basic Skills',
        desc: 'Dolor sit amet, consectetur adipiscing elit, sed do eiusmod'
    }
]

const EnrollingClassList = () => {
    return (
        <div className="fluid-container">
            <div className="row  mx-0">
                <div className='col-md-2 p-0'>
                    <Sidebar></Sidebar>
                </div>
                <div className=" col-md-8 p-4 mx-auto">
                <h1 className="border-bottom mb-2">Enrolling Class List</h1>
                    <div className="row"> 
                        {
                            courseData.map(clas => <EnrollClassList clas={clas}></EnrollClassList>)
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default EnrollingClassList;