import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';



const containerStyle = {
    backgroundColor: "#F4FDFB",
    height:"100%"
}


const Dashboard = () => {
    return (
        <section>
            <div style={containerStyle} className="container-fluid row">
            <Navbar></Navbar>
                <div className="col-md-2">
                   
                    <Sidebar></Sidebar>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;