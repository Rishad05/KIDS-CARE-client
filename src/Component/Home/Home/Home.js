import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Classes from '../Classes/Classes';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import Review from '../Review/Review';
import Teacher from '../Teacher/Teacher';
import Event from '../Event/Event';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

const Home = () => {
    return (
        
            

              <div>
                    <Header></Header>
             
             <Classes></Classes>
            
              <Teacher></Teacher>
              <Review></Review>
              <Event></Event>
              <Contact></Contact>
              <Footer></Footer>
              </div>
           
        
    );
};

export default Home;