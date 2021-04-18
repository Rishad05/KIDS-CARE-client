import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket, faCalendar, faUsers, faPlusSquare, faUserPlus, faThLarge } from '@fortawesome/free-solid-svg-icons';
import {  faFileAlt } from '@fortawesome/free-regular-svg-icons';
import { UserContext } from '../../../App';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUSer] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch(`https://protected-waters-29079.herokuapp.com/isAdmin`, {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })

        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [loggedInUser.email]);
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{height:"100vh"}}>
            <ul className="list-unstyled">
                { !isAdmin && 
                     <div>
                     <li>
                         <Link to="/enrollClass" className="text-white">
                             <FontAwesomeIcon icon={faCalendar} /> <span>Enroll Class</span> 
                         </Link>
                     </li>
                     <li>
                         <Link to="/enrollingClassList" className="text-white">
                             <FontAwesomeIcon icon={faUsers} /> <span>Enrolling Class List</span>
                         </Link>
                     </li>
                     <li>
                         <Link to="/giveFeedback" className="text-white">
                             <FontAwesomeIcon icon={faFileAlt} /> <span>Give The Feedback</span>
                         </Link>
                     </li>
                     </div>
                }
               
                {isAdmin &&
                    <div>
                    <li>
                        <Link to="/classOrderList" className="text-white">
                            <FontAwesomeIcon icon={faShoppingBasket} /> <span>Class Order List</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addClasses" className="text-white">
                            <FontAwesomeIcon icon={faPlusSquare} /> <span>Add Classes</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addAdmin" className="text-white" >
                          <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/classManage" className="text-white" >
                          <FontAwesomeIcon icon={faThLarge} /> <span>Class Manage</span>
                        </Link>
                    </li>
                    </div>
                }
            </ul>
        </div>
    );
};

export default Sidebar;