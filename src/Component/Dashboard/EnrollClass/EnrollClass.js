import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../../App';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import Sidebar from '../Sidebar/Sidebar';

const EnrollClass = () => {
    const [enrollClass, setEnrollClass] = useState({});
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
 
    const {className,price, image}=enrollClass;


   
    const { id } = useParams();
    useEffect(() => {
        fetch(`https://protected-waters-29079.herokuapp.com/enrollClass/${id}`)
            .then(res => res.json())
            .then(data => setEnrollClass(data));
    }, [id])
    const handlePaymentSuccess = paymentId => {
          const enrollClass = {
             ...loggedInUser, 
             className: className,
             image: image,
             price: price,
             paymentId
            
             }
             fetch('https://protected-waters-29079.herokuapp.com/enrollAllClass', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(enrollClass)
        })
          .then(res => res.json())
          .then(data => {
            if (data) {
                    alert('Your order placed successfully.');
            }
          })
            }
    return (
        <div className="fluid-container  ">
        <div className="row mx-0">
            <div className='col-md-2 p-0'>
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10 p-4 mx-auto bg-warning">
                <h2 className="border-bottom mb-2 fw-bolder text-light text-center">Enroll Class</h2>
                <div className="container">
                    <form className="row g-3 bg-light shadow mt-3 p-3 rounded container shadow">
                        <div>
                            <label for="inputEmail3" class="col-sm-2 col-form-label">User Name</label>
                            <div class="col-sm-10">
                                <input type="text" defaultValue={loggedInUser.name} class="form-control" id="inputEmail3" />
                            </div>
                        </div>
                        <div >
                            <label for="inputPassword3" class="col-sm-2 col-form-label">User Email</label>
                            <div class="col-sm-10">
                                <input type="email" defaultValue={loggedInUser.email} class="form-control" id="inputPassword3" />
                            </div>
                        </div>
                        <div>
                            <label for="inputPassword3" class="col-sm-2 col-form-label">Class Name</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="inputPassword3" value={className} />
                            </div>
                        </div>
                    </form>
                    <div className="bg-light shadow rounded p-3 mt-3 ">
                        <h4 className="mb-3">Payment For Enroll The Class</h4>
                        <ProcessPayment handlePaymentSuccess={handlePaymentSuccess} ></ProcessPayment>
                    </div>
                </div>
            </div>
        </div>
    </div>

    );
};

export default EnrollClass;