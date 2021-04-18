import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';


const EnrollClassList = () => {
    const [enrollClassList, setEnrollClassList] = useState([])
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('https://protected-waters-29079.herokuapp.com/enrollClassList?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setEnrollClassList(data))
    }, [loggedInUser.email])
    return (
        <div className="fluid-container">
            <div className="row mx-0">
                <div className="col-md-10 p-4 mx-auto bg-warning">
                    <h3 className="text-center text-light ">Thank You, {loggedInUser.email} You have Enroll total {enrollClassList.length} Classes.</h3>
                    <table class="table fw-bolder bg-light shadow rounded p-5">
                        <thead>
                            <tr>
                                <th scope="col">Class Name</th>
                                <th scope="col">Price</th>
                                <th scope="col">Image</th>
                                <th scope="col">Status</th>

                            </tr>
                        </thead>
                        {
                            enrollClassList.map(enrollClass =>
                                <tbody>
                                    <tr>
                                        <td style={{width: "20%", height: "20%"}}>{enrollClass.className}</td>
                                        <td style={{width: "20%", height: "20%"}}>{enrollClass.price}</td>
                                        <td style={{width: "20%", height: "20%"}}>

                                             {
                                                enrollClass.image ? <img  src={`data:image/jpeg;base64,${enrollClass.image.img}`}alt=""/>
                                                :
                                                <img  className="img-fluid mb-3" src={`https://protected-waters-29079.herokuapp.com/${enrollClass.img}`} alt=""/>        
                                             }
                                             
                                        </td>
                                        <td style={{ width: "20%" , height: "20%"}}>{enrollClass.status}</td>
                                    </tr>
                                </tbody>

                            )
                        }

                    </table>

                </div>
            </div>
        </div>

    );
};

export default EnrollClassList;