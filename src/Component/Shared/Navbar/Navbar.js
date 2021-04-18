import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../../images/logo.jpg'
import firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from '../../../App';
import firebaseConfig from '../../Login/Login/firebase.config';

const Navbar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const handleSignOut = () => {
      firebase.auth().signOut().then(() => {
          let signedOutUser = {
              isSignedIn: false,
              name: '',
              email: '',
              password: '',
              photo: '',
              error: '',
              success: false
          }
          setLoggedInUser(signedOutUser);
      })
          .catch((error) => {

          });
  }
    return (
        <nav class="navbar navbar-expand-lg navbar-light background">
        <div class="container-fluid">
        <Link style={{color: '#4d4d4d'}} class="navbar-brand fw-bolder text-light " to="/home"><img class="logo" src={logo} alt=""/> KIDS CARE</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link ms-5 text-light active" aria-current="page" to="/home">Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link ms-5 text-light" to="#">About Us</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link ms-5 text-light" to="/enrollClass">Classes</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link ms-5 text-light" to="#">Teachers</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link ms-5 text-light" to="#">Events</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link ms-5 text-light" to="/dashboard">Dashboard</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link ms-5 text-light" to="#">Contacts</Link>
              </li>
              <li class="nav-item">
              <Link to="/login" className="nav-link text-light"onClick={handleSignOut}>{loggedInUser.email?'Logout':'Login'}</Link>               
              </li>
            
             
            </ul>
            
         </div>
        </div>
      </nav>
    );
};

export default Navbar;