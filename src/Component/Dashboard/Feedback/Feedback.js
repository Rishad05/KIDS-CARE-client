import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';

import Sidebar from '../Sidebar/Sidebar';



const Feedback = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, formState: { errors } } = useForm();



    const onSubmit = (data, e) => {
        const feedbackDetails = {
            name: loggedInUser.name,
            description: data.description
        }
        fetch('https://protected-waters-29079.herokuapp.com/giveFeedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(feedbackDetails)
        })
            .then(res => res.json())
            .then(data => {
                e.target.reset();
                if (data) {
                    alert('successfully done')
                }
            });
    };



    return (
        <div className="fluid-container">
            <div className="row mx-0">
                <div className='col-md-2 p-0'>
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 p-4 mx-auto bg-warning ">
                    <h2 className="border-bottom mb-2 fw-bolder text-light">Give The Feedback</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="bg-light mt-5 p-5 rounded container shadow">
                        <div class="col-md-6 mb-3">
                            <label for="inputEmail3" class="col-sm-2 col-form-label">Name</label>
                            <div class="col-sm-10">
                                <input name="name" defaultValue={loggedInUser.name} {...register('name')} className="form-control" />
                            </div>
                        </div>

                        <div class="col-md-6 mb-3">
                            <label for="inputEmail3" class="col-sm-2 col-form-label">Description</label>
                            <div class="col-sm-10">
                                <textarea name="description" placeholder="write your opinion....." {...register('description')} id="" cols="100" rows="5" className="form-control" required ></textarea>
                                {errors.description && <span style={{ color: 'red' }}>This field is required</span>}
                            </div>
                        </div>
                        <div class="col-md-6 mb-3 d-flex content-justify-between">
                            <div className="col-md-6">
                            <button className="btn btn-style" type="submit">Submit</button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Feedback;