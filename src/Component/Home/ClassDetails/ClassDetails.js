import React from 'react';
import { useHistory } from 'react-router';
import './ClassDetails.css';

const ClassDetails = ({cls}) => {
    const history = useHistory();
    const handleBuy =(_id)=>{
        history.push(`/enrollClass/${_id}`)
    }
    return (
        <div className="container mt-2 mb-5 col-md-4">
        <div class="card card-design" style={{ width: "18rem", height:"25rem", boxShadow:'5px 10px 5px 10px #993d00' }}>
            <div className="card-header text-center">
            {
                cls.image ? <img style={{height: '200px', width: '200px'}} className="img-animation" src={`data:image/jpeg;base64,${cls.image.img}`}alt=""/>
                :
                <img style={{height: '200px', width: '200px'}} className="img-fluid mb-3 img-animation" src={`http://localhost:5000/${cls.img}`} alt=""/>
            }
            </div>
            <div style= {{backgroundColor:'#ffb380', color:'white'}} class="card-body fw-bolder">
                <h3 class="card-title ">{cls.className}</h3>
                <small>Age Group: {cls.AgeGroup} YEARS</small>
                <br />
                <small>Class Size: {cls.classSize}</small>

            </div>
            <div className="card-footer d-flex justify-content-between">
                <h3 className="fw-bolder">${cls.price}</h3>
                <button onClick={() => handleBuy (cls._id)} style={{backgroundColor:'#ff6600', color:'white'}} className="btn">Enroll Now</button>
            </div>
        </div>
        </div>
    );
};

export default ClassDetails;