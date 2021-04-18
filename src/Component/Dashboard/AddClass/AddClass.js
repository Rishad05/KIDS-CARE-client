import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const AddClass = () => {
    const [info, setInfo] = useState({})
    const [file, setFile] = useState(null)

    const handleBlur = e =>{
        const newInfo = {...info}
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = e =>{
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        const formData = new FormData()
        formData.append('file', file)
        formData.append('className', info.className)
        formData.append('ageGroup', info.ageGroup)
        formData.append('classSize', info.classSize)
        formData.append('price', info.price)


        fetch('https://protected-waters-29079.herokuapp.com/addClass', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            e.target.reset();
           
            if(data){
                alert('Class added successfully')
            }
        })
        .catch(error => {
            console.error(error)
        })
    }

    return (
        <section className="container-fluid row " >
        <div className="col-md-2">
            <Sidebar></Sidebar>
        </div>
        <div className="col-md-10 p-5 pr-5 bg-warning ">
            <h2 className="text-brand border-bottom fw-bolder text-light text-center">Add Class</h2>
            <form class="row g-3 bg-light shadow mt-5 p-5 rounded container shadow" onSubmit={handleSubmit}>
                        <div className="col-md-6">
                            <label class="form-label fw-bolder">Class Name</label>
                            <input type="text" name="className" onBlur={handleBlur} class="form-control" placeholder="Enter Class Name" />
                        </div>
                        <div className="col-md-6">
                            <label class="form-label fw-bolder">Image</label>
                            <input class="form-control" onChange={handleFileChange}  type="file" name="image"  />
                        </div>

                        <div className="col-md-6">
                            <label class="form-label fw-bolder">Price</label>
                            <input type="text" name="price" onBlur={handleBlur} class="form-control" placeholder="price" />
                        </div>

                        <div className="col-md-6">
                            <label class="form-label fw-bolder">Age Group</label>
                            <input type="text" onBlur={handleBlur} name="ageGroup" class="form-control"  placeholder="Age Group" />
                        </div>
                        <div className="col-md-6">
                            <label class="form-label fw-bolder">Class Size</label>
                            <input type="text" onBlur={handleBlur} name="classSize" class="form-control" placeholder="Class Size" />
                        </div>

                        <div className="col-md-12 d-flex align-items-center">
                            <input type="submit" className="mt-3 btn btn-style" />
                        </div>
                    </form>
        </div>
    </section>
    );
};

export default AddClass;